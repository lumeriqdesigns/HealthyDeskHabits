import type {Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms that govern your use of the HealthyDeskHabits website and its content.',
  alternates: {canonical: '/terms'},
};

export default function TermsPage() {
  return (
    <main className="container min-h-[65vh] max-w-[900px] py-16">
      <div className="eyebrow">Legal</div>
      <h1 className="serif mt-3 text-5xl tracking-[-.04em] md:text-6xl">Terms of use</h1>
      <p className="mt-4 text-sm text-[var(--muted)]">Last updated: September 23, 2026</p>
      <div className="article-copy mt-10">
        <p>
          By accessing healthydeskhabits.com, you agree to these terms. If you do not agree, please do not use the site.
        </p>
        <h2>Informational purpose</h2>
        <p>
          Content is provided for general information only. It is not professional medical, legal or financial advice. See our <Link href="/health-disclaimer">health disclaimer</Link> for important limits on health related material.
        </p>
        <h2>Intellectual property</h2>
        <p>
          Text, design and branding on this site are owned by HealthyDeskHabits or used under license. You may not copy, republish or commercially exploit substantial portions without prior written permission, except for fair use such as brief quotation with attribution.
        </p>
        <h2>Acceptable use</h2>
        <p>
          You agree not to misuse the site, attempt unauthorized access, scrape content at a scale that impairs service, or use the site to distribute malware or unlawful material.
        </p>
        <h2>Third party links</h2>
        <p>
          Articles may link to external sites for sources or further reading. We are not responsible for the content, privacy practices or availability of third party sites.
        </p>
        <h2>Disclaimer of warranties</h2>
        <p>
          The site is provided “as is” without warranties of any kind, express or implied, including fitness for a particular purpose or uninterrupted availability.
        </p>
        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, HealthyDeskHabits and its contributors are not liable for any indirect, incidental, special or consequential damages arising from your use of the site or reliance on its content.
        </p>
        <h2>Changes</h2>
        <p>
          We may update these terms periodically. Continued use after changes means you accept the revised terms.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent via the <Link href="/contact">contact page</Link>.
        </p>
      </div>
    </main>
  );
}
