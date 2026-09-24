import type {Metadata} from 'next';
import Link from 'next/link';
import {authors} from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description:
    'HealthyDeskHabits is an editorial publication for remote workers covering desk health, screen habits, mental wellness and practical technology.',
  alternates: {canonical: '/about'},
};

export default function AboutPage() {
  const named = authors.filter(a => a.slug !== 'healthydeskhabits-editorial-team');
  return (
    <main className="container min-h-[65vh] max-w-[900px] py-16">
      <div className="eyebrow">HealthyDeskHabits</div>
      <h1 className="serif mt-3 text-5xl tracking-[-.04em] md:text-6xl">About</h1>
      <div className="article-copy mt-10">
        <p>
          HealthyDeskHabits is a publication for people who work at a desk, often from home. We publish practical guidance on ergonomics, eye comfort, movement, mental wellness and the tools that support healthier workdays.
        </p>
        <h2>What we publish</h2>
        <p>
          Our stories focus on habits and environments you can change: how high your screen sits, how often you stand, how you end the workday, and how technology can remind you to move without becoming another source of pressure. We aim for clear language, realistic advice and honest limits about what a website can and cannot solve.
        </p>
        <h2>How we work</h2>
        <p>
          Articles are researched against publicly available guidance from recognized health and occupational sources such as OSHA, CDC and NIOSH, Mayo Clinic, the American Optometric Association and the American Academy of Ophthalmology. We cite primary sources on the article page when they inform the recommendations.
        </p>
        <p>
          Health related content on this site is general information. It is not a diagnosis, treatment plan or substitute for care from a qualified professional. When symptoms are severe, persistent or concerning, we encourage readers to seek clinical advice.
        </p>
        <h2>Editorial team</h2>
        <p>
          Stories are written and reviewed by editors who specialize in desk health, screen habits and remote work wellness. You can read more about each editor on their author page.
        </p>
        <div className="mt-8 grid gap-4">
          {named.map(a => (
            <Link key={a.slug} href={`/author/${a.slug}`} className="card block p-5 transition hover:bg-white">
              <div className="flex items-center gap-4">
                <div className="grid size-12 place-items-center rounded-full bg-[var(--sage-soft)] text-sm font-bold">
                  {a.initials}
                </div>
                <div>
                  <div className="font-bold">{a.name}</div>
                  <div className="text-sm text-[var(--muted)]">{a.role}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <h2>Contact</h2>
        <p>
          For editorial questions, corrections or partnership enquiries, visit the <Link href="/contact">contact page</Link>. For how we handle health claims and corrections, see our <Link href="/editorial-policy">editorial policy</Link>.
        </p>
      </div>
    </main>
  );
}
