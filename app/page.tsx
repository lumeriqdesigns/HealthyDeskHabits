import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import Newsletter from '@/components/Newsletter';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import {articles, categories} from '@/lib/content';

export default function Home() {
  const featured = articles.find(a => a.featured) ?? articles[0];
  const secondary = articles.filter(a => a.slug !== featured.slug).slice(0, 2);
  const rest = articles.filter(a => a.slug !== featured.slug && !secondary.some(s => s.slug === a.slug));
  const grid = rest.slice(0, 6);
  const list = rest.slice(6, 12);

  return (
    <main>
      {/* Masthead — newspaper / TT4 */}
      <section className="border-b border-[#e0ddd6]">
        <div className="container py-8 text-center md:py-10">
          <p className="eyebrow">A publication for remote workers</p>
          <h1 className="serif mt-2 text-4xl font-bold tracking-[-0.04em] text-[#111] md:text-6xl">
            HealthyDeskHabits
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-[#6b6b6b]">
            Desk health, screen comfort, and calmer workdays — practical stories, clearly written.
          </p>
        </div>
      </section>

      {/* Lead story + two side stories — magazine top */}
      <section className="container py-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.85fr] lg:gap-12">
          <ArticleCard article={featured} large />
          <div className="flex flex-col gap-8 border-t border-[#e0ddd6] pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            {secondary.map(a => (
              <article key={a.slug}>
                <Link href={`/article/${a.slug}`} className="group block">
                  <ImagePlaceholder category={a.category} />
                  <p className="eyebrow mt-3">{a.category}</p>
                  <h2 className="serif mt-1 text-2xl font-bold leading-snug tracking-[-0.02em] group-hover:underline">
                    {a.title}
                  </h2>
                  <p className="mt-2 text-xs text-[#6b6b6b]">
                    {a.date} · {a.readTime}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Category strip */}
      <section className="border-y border-[#e0ddd6] bg-[#f7f5f0]">
        <div className="container flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-4 text-sm font-semibold">
          {categories.map(c => (
            <Link key={c.slug} href={'/' + c.slug} className="text-[#111] hover:underline">
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Magazine grid */}
      <section className="container py-12 md:py-16">
        <div className="section-rule">
          <h2>From the magazine</h2>
          <Link href="/search" className="text-sm font-semibold hover:underline">
            View all
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {grid.map(a => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      {/* Newspaper list with thumbs */}
      {list.length > 0 && (
        <section className="container pb-12 md:pb-16">
          <div className="section-rule">
            <h2>More stories</h2>
          </div>
          <div className="max-w-3xl">
            {list.map(a => (
              <ArticleCard key={a.slug} article={a} horizontal />
            ))}
          </div>
        </section>
      )}

      <section className="container pb-20">
        <Newsletter />
      </section>
    </main>
  );
}
