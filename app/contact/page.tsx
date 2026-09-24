import type {Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact the HealthyDeskHabits editorial team for corrections, questions and partnership enquiries.',
  alternates: {canonical: '/contact'},
};

export default function ContactPage() {
  return (
    <main className="container min-h-[65vh] max-w-[900px] py-16">
      <div className="eyebrow">Get in touch</div>
      <h1 className="serif mt-3 text-5xl tracking-[-.04em] md:text-6xl">Contact</h1>
      <div className="article-copy mt-10">
        <p>
          We read messages about corrections, editorial questions, accessibility issues and partnership proposals. We aim to respond within a few business days when a reply is required.
        </p>
        <h2>Email</h2>
        <p>
          Editorial and general enquiries: <a href="mailto:hello@healthydeskhabits.com">hello@healthydeskhabits.com</a>
        </p>
        <p>
          Corrections: please include the article URL, the passage in question and a short note on what should be checked. See our <Link href="/editorial-policy">editorial policy</Link> for how we handle updates.
        </p>
        <h2>What we cannot do</h2>
        <p>
          We cannot provide personal medical advice, diagnose conditions or comment on individual treatment plans by email. For health concerns, contact a qualified clinician or local emergency services.
        </p>
        <h2>Press and partnerships</h2>
        <p>
          For interview requests or collaboration ideas, email with a brief description of the opportunity and relevant deadlines. Commercial proposals should also review our <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
        </p>
      </div>
    </main>
  );
}
