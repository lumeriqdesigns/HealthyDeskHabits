import Link from 'next/link';
import type {Article} from '@/lib/content';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function ArticleCard({
  article,
  large = false,
  horizontal = false,
}: {
  article: Article;
  large?: boolean;
  horizontal?: boolean;
}) {
  if (large) {
    return (
      <article>
        <Link href={`/article/${article.slug}`} className="group block">
          <ImagePlaceholder category={article.category} variant="wide" label={article.category} />
          <div className="mt-5 max-w-3xl">
            <p className="eyebrow">{article.category}</p>
            <h2 className="serif mt-2 text-3xl font-bold leading-tight tracking-[-0.03em] text-[#111] group-hover:underline md:text-5xl">
              {article.title}
            </h2>
            <p className="mt-3 text-sm text-[#6b6b6b]">
              {article.date} · {article.readTime}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#333]">{article.excerpt}</p>
            <span className="mt-4 inline-block text-sm font-semibold underline underline-offset-4">
              Continue reading
            </span>
          </div>
        </Link>
      </article>
    );
  }

  if (horizontal) {
    return (
      <article className="grid gap-4 border-b border-[#e0ddd6] py-5 sm:grid-cols-[140px_1fr] sm:gap-5">
        <Link href={`/article/${article.slug}`}>
          <ImagePlaceholder category={article.category} variant="square" />
        </Link>
        <div>
          <p className="eyebrow">{article.category}</p>
          <h3 className="serif mt-1 text-xl font-bold leading-snug tracking-[-0.02em]">
            <Link href={`/article/${article.slug}`} className="hover:underline">
              {article.title}
            </Link>
          </h3>
          <p className="mt-1 text-xs text-[#6b6b6b]">
            {article.date} · {article.readTime}
          </p>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#444]">{article.excerpt}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="mag-card">
      <Link href={`/article/${article.slug}`}>
        <ImagePlaceholder category={article.category} />
      </Link>
      <p className="eyebrow mt-3">{article.category}</p>
      <h3 className="text-xl md:text-[1.35rem]">
        <Link href={`/article/${article.slug}`}>{article.title}</Link>
      </h3>
      <p className="meta">
        {article.date} · {article.readTime}
      </p>
      <p className="excerpt line-clamp-3">{article.excerpt}</p>
    </article>
  );
}
