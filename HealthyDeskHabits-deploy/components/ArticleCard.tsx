import Link from 'next/link';
import type {Article} from '@/lib/content';

export default function ArticleCard({article, large = false}: {article: Article; large?: boolean}) {
  return (
    <Link
      href={`/article/${article.slug}`}
      className={`group block ${large ? 'md:col-span-2' : ''}`}
    >
      <div
        className={`h-full overflow-hidden rounded-[26px] border border-[var(--line)] bg-white/60 p-6 transition hover:bg-white md:p-8 ${
          large ? 'md:min-h-[280px]' : ''
        }`}
      >
        <div className="eyebrow">{article.category}</div>
        <h3
          className={`serif mt-3 tracking-[-.035em] group-hover:text-[#3d5c48] ${
            large ? 'text-3xl md:text-5xl' : 'text-2xl'
          }`}
        >
          {article.title}
        </h3>
        <p className={`mt-4 leading-7 text-[var(--muted)] ${large ? 'max-w-2xl text-base md:text-lg' : 'text-sm md:text-base'}`}>
          {article.excerpt}
        </p>
        <div className="mt-6 text-xs font-semibold text-[var(--muted)]">
          {article.readTime} · {article.date}
        </div>
      </div>
    </Link>
  );
}
