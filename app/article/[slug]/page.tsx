import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {articles, authors, categories} from '@/lib/content';
import Newsletter from '@/components/Newsletter';
import ReadingProgress from '@/components/ReadingProgress';
import TableOfContents from '@/components/TableOfContents';
import AuthorBox from '@/components/AuthorBox';
import RelatedArticles from '@/components/RelatedArticles';

const site = 'https://healthydeskhabits.com';

export function generateStaticParams() {
  return articles.map(a => ({slug: a.slug}));
}

function getArticle(slug: string) {
  return articles.find(x => x.slug === slug);
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const {slug} = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: `${a.title} | HealthyDeskHabits`,
    description: a.excerpt,
    alternates: {canonical: `/article/${a.slug}`},
    openGraph: {
      type: 'article',
      title: a.title,
      description: a.excerpt,
      url: `${site}/article/${a.slug}`,
      publishedTime: a.date,
      modifiedTime: a.updated,
    },
    twitter: {
      card: 'summary',
      title: a.title,
      description: a.excerpt,
    },
  };
}

export default async function Article({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const a = getArticle(slug);
  if (!a) return notFound();
  const author = authors.find(x => x.slug === a.author)!;
  const reviewer = a.reviewer ? authors.find(x => x.slug === a.reviewer) : undefined;
  const related = articles.filter(
    x => x.slug !== a.slug && (x.category === a.category || x.tags.some(t => a.tags.includes(t)))
  );
  const category = categories.find(c => c.name === a.category);

  const jsonLd: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: a.title,
      description: a.excerpt,
      datePublished: a.date,
      dateModified: a.updated,
      author: {'@type': 'Person', name: author.name},
      publisher: {'@type': 'Organization', name: 'HealthyDeskHabits', url: site},
      mainEntityOfPage: {'@type': 'WebPage', '@id': `${site}/article/${a.slug}`},
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {'@type': 'ListItem', position: 1, name: 'Home', item: site},
        {'@type': 'ListItem', position: 2, name: a.category, item: `${site}/${category?.slug ?? ''}`},
        {'@type': 'ListItem', position: 3, name: a.title, item: `${site}/article/${a.slug}`},
      ],
    },
  ];

  if (a.faq && a.faq.length > 0) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: a.faq.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {'@type': 'Answer', text: item.answer},
      })),
    });
  }

  return (
    <>
      <ReadingProgress />
      <main>
        <article className="container max-w-[1240px] py-10 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
            <div>
              <div className="eyebrow">{a.category}</div>
              <h1 className="serif mt-4 max-w-3xl text-4xl leading-tight tracking-[-.04em] md:text-5xl lg:text-[3.4rem]">
                {a.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#626965] md:text-xl">{a.excerpt}</p>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-[var(--muted)]">
                <span>By {author.name}</span>
                <span>Published {a.date}</span>
                <span>Updated {a.updated}</span>
                <span>{a.readTime}</span>
              </div>
            </div>
            <div className="lg:pt-40">
              <TableOfContents sections={a.sections} />
            </div>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,760px)_280px] lg:justify-center">
            <div>
              {a.quickAnswer && (
                <div className="card border-l-4 border-l-[var(--sage)] p-6 md:p-8">
                  <div className="eyebrow">Quick answer</div>
                  <p className="mt-3 text-lg leading-8 text-[#3f4542]">{a.quickAnswer}</p>
                </div>
              )}

              <AuthorBox author={author} reviewer={reviewer} />

              <div className="article-copy mt-12">
                {a.sections.map(s => (
                  <section key={s.id} id={s.id} className="scroll-mt-24">
                    <h2>{s.title}</h2>
                    {s.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                    {s.bullets && (
                      <ul>
                        {s.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              {a.sources && a.sources.length > 0 && (
                <section className="mt-12" id="sources">
                  <h2 className="serif text-2xl tracking-[-.03em]">Sources and further reading</h2>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-[#505753]">
                    {a.sources.map((src, i) => (
                      <li key={i} className="flex flex-col gap-0.5">
                        {src.url ? (
                          <a
                            href={src.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-[var(--ink)] underline-offset-2 hover:underline"
                          >
                            {src.name}
                          </a>
                        ) : (
                          <span className="font-semibold text-[var(--ink)]">{src.name}</span>
                        )}
                        {src.note && <span className="text-[var(--muted)]">{src.note}</span>}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {a.faq && a.faq.length > 0 && (
                <section className="mt-12" id="faq">
                  <h2 className="serif text-2xl tracking-[-.03em]">Frequently asked questions</h2>
                  <div className="mt-6 space-y-5">
                    {a.faq.map((item, i) => (
                      <div key={i} className="card p-5">
                        <h3 className="text-base font-bold leading-6">{item.question}</h3>
                        <p className="mt-2 text-sm leading-6 text-[#505753]">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <div className="mt-12 rounded-[24px] bg-[var(--sage-soft)] p-6 md:p-8">
                <strong>Health note:</strong> HealthyDeskHabits content is for general informational purposes and is not medical advice. Always consult a qualified professional for personal health concerns.
              </div>

              <RelatedArticles articles={related} />
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-5">
                <div className="card p-5">
                  <p className="eyebrow">About this story</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    Reviewed against public guidance from major health authorities. Sources are listed below the article when available.
                  </p>
                </div>
                <div className="card p-5">
                  <p className="eyebrow">Topics</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {a.tags.map(t => (
                      <span key={t} className="rounded-full bg-[var(--sage-soft)] px-3 py-1 text-xs font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </article>
        <section className="container max-w-[1180px] pb-20">
          <Newsletter />
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
    </>
  );
}
