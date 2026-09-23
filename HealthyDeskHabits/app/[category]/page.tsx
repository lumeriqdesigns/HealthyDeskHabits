import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {articles, categories} from '@/lib/content';
import ArticleCard from '@/components/ArticleCard';
import Newsletter from '@/components/Newsletter';

export function generateStaticParams() {
  return categories.map(c => ({category: c.slug}));
}

export async function generateMetadata({params}: {params: Promise<{category: string}>}): Promise<Metadata> {
  const {category} = await params;
  const c = categories.find(x => x.slug === category);
  return c
    ? {title: `${c.name} | HealthyDeskHabits`, description: c.desc, alternates: {canonical: `/${c.slug}`}}
    : {};
}

export default async function CategoryPage({params}: {params: Promise<{category: string}>}) {
  const {category} = await params;
  const c = categories.find(x => x.slug === category);
  if (!c) return notFound();
  const list = articles.filter(a => a.category === c.name);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: c.name,
    description: c.desc,
    url: `https://healthydeskhabits.com/${c.slug}`,
    isPartOf: {'@type': 'WebSite', name: 'HealthyDeskHabits', url: 'https://healthydeskhabits.com'},
  };
  return (
    <main>
      <section className="container py-14 md:py-20">
        <div className="rounded-[34px] bg-[#111315] p-8 text-white md:p-14">
          <p className="text-xs font-bold uppercase tracking-[.16em] text-[#b9c9bf]">
            HealthyDeskHabits / {c.name}
          </p>
          <h1 className="serif mt-5 text-5xl leading-none tracking-[-.05em] md:text-7xl">{c.name}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">{c.desc}</p>
        </div>
      </section>
      <section className="container pb-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow">Latest</p>
            <h2 className="serif mt-2 text-4xl tracking-[-.04em]">Fresh from {c.name}</h2>
          </div>
          <span className="text-sm text-[var(--muted)]">{list.length} stories</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {list.map((a, i) => (
            <ArticleCard key={a.slug} article={a} large={i === 0} />
          ))}
        </div>
      </section>
      <section className="container max-w-[1180px] pb-20">
        <Newsletter />
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
    </main>
  );
}
