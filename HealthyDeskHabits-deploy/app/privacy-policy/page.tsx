import type {Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How HealthyDeskHabits collects, uses and protects information when you use our website.',
  alternates: {canonical: '/privacy-policy'},
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container min-h-[65vh] max-w-[900px] py-16">
      <div className="eyebrow">Legal</div>
      <h1 className="serif mt-3 text-5xl tracking-[-.04em] md:text-6xl">Privacy policy</h1>
      <p className="mt-4 text-sm text-[var(--muted)]">Last updated: September 23, 2026</p>
      <div className="article-copy mt-10">
        <p>
          This privacy policy describes how HealthyDeskHabits (“we,” “us”) handles information when you visit healthydeskhabits.com. We aim to collect only what we need to operate and improve the publication.
        </p>
        <h2>Information we may collect</h2>
        <p>
          <strong>Information you provide.</strong> If you contact us by email or submit a form, we receive the details you include, such as your name, email address and message content.
        </p>
        <p>
          <strong>Newsletter signups.</strong> If you subscribe, we collect your email address and any preferences you choose. You can unsubscribe at any time using the link in our emails or by contacting us.
        </p>
        <p>
          <strong>Technical and usage data.</strong> Like most websites, our servers or analytics providers may automatically receive IP address, browser type, device type, pages viewed, approximate location derived from IP, and referral URLs. We use this to understand traffic, fix errors and improve content.
        </p>
        <h2>Cookies and similar technologies</h2>
        <p>
          We may use essential cookies required for the site to function and optional analytics cookies to understand aggregate usage. You can control cookies through your browser settings. Blocking some cookies may affect site features.
        </p>
        <h2>How we use information</h2>
        <p>
          We use information to operate the site, respond to messages, send newsletters you requested, measure performance, prevent abuse and comply with legal obligations. We do not sell personal information.
        </p>
        <h2>Sharing</h2>
        <p>
          We may share information with service providers who help us host the site, send email or analyze traffic, under agreements that limit use of your data. We may also disclose information if required by law or to protect the rights, safety and integrity of the publication and its users.
        </p>
        <h2>Data retention</h2>
        <p>
          We retain contact messages and operational logs only as long as needed for the purposes above, unless a longer period is required by law. Newsletter data is kept until you unsubscribe or request deletion.
        </p>
        <h2>Your choices</h2>
        <p>
          You may request access, correction or deletion of personal information we hold about you by contacting us. You may also unsubscribe from marketing or newsletter emails at any time.
        </p>
        <h2>Children</h2>
        <p>
          This site is intended for adults and is not directed at children under 13. We do not knowingly collect personal information from children.
        </p>
        <h2>International visitors</h2>
        <p>
          If you access the site from outside the country where our servers or providers operate, your information may be processed in other jurisdictions that may have different data protection rules.
        </p>
        <h2>Changes</h2>
        <p>
          We may update this policy from time to time. The “Last updated” date at the top will change when we do. Continued use of the site after updates constitutes acceptance of the revised policy.
        </p>
        <h2>Contact</h2>
        <p>
          Privacy questions can be sent through the <Link href="/contact">contact page</Link>.
        </p>
      </div>
    </main>
  );
}
