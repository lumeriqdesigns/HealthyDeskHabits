'use client';
import Link from 'next/link';
import type {Section} from '@/lib/content';
export default function TableOfContents({sections}:{sections:Section[]}){return <aside className="card sticky top-24 p-5"><p className="eyebrow">In this article</p><nav className="mt-4 space-y-2" aria-label="Table of contents">{sections.filter(s=>s.paragraphs.length||s.bullets?.length).map(s=><Link key={s.id} href={`#${s.id}`} className="block rounded-xl px-3 py-2 text-sm leading-5 text-[#505753] hover:bg-[var(--sage-soft)] hover:text-[var(--ink)]">{s.title}</Link>)}</nav></aside>}
