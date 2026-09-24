import type {Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'How HealthyDeskHabits handles affiliate links, sponsorships and commercial relationships.',
  alternates: {canonical: '/affiliate-disclosure'},
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="container min-h-[65vh] max-w-[900px] py-16">
      <div className="eyebrow">Transparency</div>
      <h1 className="serif mt-3 text-5xl tracking-[-.04em] md:text-6xl">Affiliate disclosure</h1>
      <div className="article-copy mt-10">
        <p>
          HealthyDeskHabits is committed to clear labeling of commercial relationships so readers can evaluate recommendations with full context.
        </p>
        <h2>Current status</h2>
        <p>
          At launch, most articles do not rely on affiliate links. If an article includes affiliate links in the future, we will disclose that relationship on the page in plain language near the relevant recommendation.
        </p>
        <h2>What affiliate links mean</h2>
        <p>
          An affiliate link is a tracking link that may earn us a commission if you purchase a product or service after clicking, at no additional cost to you. Commissions do not change the price you pay.
        </p>
        <h2>Editorial independence</h2>
        <p>
          Affiliate relationships do not determine our conclusions. We aim to recommend practices and setup principles first; specific products, when mentioned, are examples that fit those principles. See our <Link href="/editorial-policy">editorial policy</Link> for how content is researched and reviewed.
        </p>
        <h2>Sponsorships and paid placements</h2>
        <p>
          Sponsored articles or paid placements, if introduced, will be clearly labeled as sponsored. They will not be presented as independent editorial reviews without disclosure.
        </p>
        <h2>Questions</h2>
        <p>
          Contact us through the <Link href="/contact">contact page</Link> if you have questions about a commercial relationship on the site.
        </p>
      </div>
    </main>
  );
}
