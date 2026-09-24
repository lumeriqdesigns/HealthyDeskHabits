import Link from 'next/link';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {articles, categories} from '@/lib/content';
import ArticleCard from '@/components/ArticleCard';
import Newsletter from '@/components/Newsletter';
import ImagePlaceholder from '@/components/ImagePlaceholder';

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
  const [lead, ...rest] = list;
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
      <section className="border-b border-[#e0ddd6] bg-[#f7f5f0]">
        <div className="container py-10 md:py-12">
          <p className="text-sm text-[#6b6b6b]">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            {' / '}
            {c.name}
          </p>
          <h1 className="serif mt-2 text-4xl font-bold tracking-[-0.03em] text-[#111] md:text-5xl">{c.name}</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#6b6b6b]">{c.desc}</p>
        </div>
      </section>
      <div className="container py-12 pb-20">
        {lead && (
          <div className="mb-12">
            <ArticleCard article={lead} large />
          </div>
        )}
        <div className="section-rule">
          <h2>All in {c.name}</h2>
          <span className="text-sm text-[#6b6b6b]">{list.length} stories</span>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map(a => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
        <div className="mt-16">
          <Newsletter />
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
    </main>
  );
}
