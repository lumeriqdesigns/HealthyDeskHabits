import type {Metadata} from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'HealthyDeskHabits — Health, Technology & Lifestyle for Remote Workers',
    template: '%s | HealthyDeskHabits',
  },
  description:
    'Practical health, wellness, technology and lifestyle advice for people who work remotely. Build healthier desk habits, reduce screen strain and work better.',
  metadataBase: new URL('https://healthydeskhabits.com'),
  alternates: {canonical: '/'},
  openGraph: {
    siteName: 'HealthyDeskHabits',
    type: 'website',
    title: 'HealthyDeskHabits — Work Better. Feel Better.',
    description: 'Health, technology and lifestyle for remote workers.',
    url: 'https://healthydeskhabits.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HealthyDeskHabits — Work Better. Feel Better.',
    description: 'Health, technology and lifestyle for remote workers.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HealthyDeskHabits',
    url: 'https://healthydeskhabits.com',
    description: 'Health, technology and lifestyle for remote workers.',
    publisher: {
      '@type': 'Organization',
      name: 'HealthyDeskHabits',
      url: 'https://healthydeskhabits.com',
      description: 'Editorial publication on healthier remote work, desk ergonomics and digital wellness.',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://healthydeskhabits.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(websiteJsonLd)}} />
      </body>
    </html>
  );
}
