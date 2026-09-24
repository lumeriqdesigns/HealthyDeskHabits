import type {Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Editorial Policy',
  description:
    'How HealthyDeskHabits researches, reviews, cites sources and corrects health related content for remote workers.',
  alternates: {canonical: '/editorial-policy'},
};

export default function EditorialPolicyPage() {
  return (
    <main className="container min-h-[65vh] max-w-[900px] py-16">
      <div className="eyebrow">Standards</div>
      <h1 className="serif mt-3 text-5xl tracking-[-.04em] md:text-6xl">Editorial policy</h1>
      <div className="article-copy mt-10">
        <p>
          This policy explains how HealthyDeskHabits creates and maintains content. Our goal is practical, responsible guidance for remote workers, not medical diagnosis or treatment advice.
        </p>
        <h2>Scope of our content</h2>
        <p>
          We publish general information about desk setup, movement, screen habits, sleep routines, stress and related lifestyle topics. Nothing on this site is a substitute for personalized advice from a licensed clinician, therapist or other qualified professional.
        </p>
        <h2>Research and sourcing</h2>
        <p>
          Writers consult publicly available materials from recognized authorities when making health related claims. Typical sources include occupational safety agencies, major medical institutions and professional associations. Article pages list sources used so readers can verify and explore further.
        </p>
        <p>
          We prefer primary guidance documents and established clinical summaries over marketing claims or unverified social media advice. Product mentions, when they appear, are illustrative and not endorsements unless clearly labeled.
        </p>
        <h2>Review</h2>
        <p>
          Stories are reviewed for clarity, internal consistency and alignment with cited public guidance before publication. Reviewer names appear on articles when a formal review step is recorded. Complex or higher risk topics receive extra scrutiny and clearer “when to seek help” language.
        </p>
        <h2>Updates and corrections</h2>
        <p>
          Articles show published and updated dates. We revise content when guidance changes, errors are found or reader feedback identifies unclear claims. Factual corrections are made promptly. If you believe something is wrong, contact us through the <Link href="/contact">contact page</Link> with the article URL and a brief description of the issue.
        </p>
        <h2>Independence and commercial relationships</h2>
        <p>
          Editorial decisions are not sold. If we ever use affiliate links or sponsored placements, they will be disclosed in line with our <Link href="/affiliate-disclosure">affiliate disclosure</Link>. Sponsored content, if introduced later, will be clearly labeled.
        </p>
        <h2>Reader safety</h2>
        <p>
          We do not provide emergency medical advice. If you are in crisis or have symptoms that worry you, seek local emergency services or a qualified clinician. See also our <Link href="/health-disclaimer">health disclaimer</Link>.
        </p>
      </div>
    </main>
  );
}
