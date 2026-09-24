import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import Newsletter from '@/components/Newsletter';
import {articles, categories} from '@/lib/content';

export default function Home() {
  const featured = articles.find(a => a.featured) ?? articles[0];
  const editorsPicks = articles.filter(a => a.editorsPick && a.slug !== featured.slug).slice(0, 3);
  const series = articles.filter(a => a.series === 'The 10-Minute Fix').slice(0, 3);
  const latest = articles
    .filter(a => a.slug !== featured.slug && !editorsPicks.some(e => e.slug === a.slug))
    .slice(0, 6);

  return (
    <main>
      <section className="container max-w-[900px] py-16 md:py-20">
        <div className="eyebrow">Health · Technology · Lifestyle</div>
        <h1 className="serif mt-5 max-w-3xl text-[clamp(3.2rem,8vw,6.5rem)] leading-[.9] tracking-[-.06em]">
          Work Better.<br />Feel Better.
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-[#626965]">
          HealthyDeskHabits helps remote workers build healthier routines, better workspaces, and smarter relationships with technology.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/desk-health" className="btn-primary">
            Explore Desk Health
          </Link>
          <Link href="/search" className="btn-secondary">
            Read the latest
          </Link>
        </div>
      </section>

      <section className="container py-8">
        <div className="eyebrow">Featured story</div>
        <div className="mt-4">
          <ArticleCard article={featured} large />
        </div>
      </section>

      {editorsPicks.length > 0 && (
        <section className="container py-16">
          <div className="flex items-end justify-between gap-5">
            <div>
              <div className="eyebrow">Editors&apos; picks</div>
              <h2 className="serif mt-2 text-4xl md:text-5xl">Stories we recommend first.</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {editorsPicks.map(a => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      )}

      <section className="container py-12">
        <div className="flex items-end justify-between gap-5">
          <div>
            <div className="eyebrow">Explore the publication</div>
            <h2 className="serif mt-2 text-4xl md:text-5xl">Find your healthier workday.</h2>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(c => (
            <Link key={c.slug} href={'/' + c.slug} className="card p-7 transition hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span className="eyebrow">Category</span>
                <span className="text-[#8faf9a]">↗</span>
              </div>
              <h3 className="serif mt-7 text-3xl">{c.name}</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-[#737875]">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {series.length > 0 && (
        <section className="container py-12">
          <div className="eyebrow">The 10-Minute Fix</div>
          <h2 className="serif mt-2 text-4xl md:text-5xl">Short routines that fit between meetings.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {series.map(a => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      )}

      <section className="container py-16">
        <div className="flex items-end justify-between">
          <div>
            <div className="eyebrow">Latest stories</div>
            <h2 className="serif mt-2 text-4xl md:text-5xl">Fresh guidance for remote workdays.</h2>
          </div>
          <Link href="/search" className="hidden text-sm font-bold text-[#5a7a64] md:block">
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latest.map(a => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <section className="container pb-20">
        <Newsletter />
      </section>
    </main>
  );
}
