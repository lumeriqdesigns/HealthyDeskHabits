import Link from 'next/link';
import type {Author} from '@/lib/content';

export default function AuthorBox({author, reviewer}: {author: Author; reviewer?: Author}) {
  return (
    <div className="mt-10 grid gap-4">
      <Link href={`/author/${author.slug}`} className="card flex items-start gap-4 p-5 transition hover:bg-white">
        <div className="grid size-12 shrink-0 place-items-center rounded-full bg-[var(--sage-soft)] text-sm font-bold">
          {author.initials}
        </div>
        <div>
          <p className="eyebrow">Written by</p>
          <p className="mt-1 font-bold">{author.name}</p>
          <p className="text-sm text-[var(--muted)]">{author.role}</p>
          <p className="mt-2 text-sm leading-6 text-[#505753]">{author.bio}</p>
        </div>
      </Link>
      {reviewer && reviewer.slug !== author.slug && (
        <Link href={`/author/${reviewer.slug}`} className="card flex items-start gap-4 p-5 transition hover:bg-white">
          <div className="grid size-12 shrink-0 place-items-center rounded-full bg-[var(--sage-soft)] text-sm font-bold">
            {reviewer.initials}
          </div>
          <div>
            <p className="eyebrow">Reviewed by</p>
            <p className="mt-1 font-bold">{reviewer.name}</p>
            <p className="text-sm text-[var(--muted)]">{reviewer.role}</p>
          </div>
        </Link>
      )}
      {reviewer && reviewer.slug === author.slug && (
        <p className="text-xs text-[var(--muted)]">Also reviewed by the author against cited public guidance.</p>
      )}
    </div>
  );
}
