import type {Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Health Disclaimer',
  description:
    'HealthyDeskHabits provides general information only and is not a substitute for professional medical advice, diagnosis or treatment.',
  alternates: {canonical: '/health-disclaimer'},
};

export default function HealthDisclaimerPage() {
  return (
    <main className="container min-h-[65vh] max-w-[900px] py-16">
      <div className="eyebrow">Important</div>
      <h1 className="serif mt-3 text-5xl tracking-[-.04em] md:text-6xl">Health disclaimer</h1>
      <div className="article-copy mt-10">
        <p>
          The content on HealthyDeskHabits is for general educational and informational purposes only. It is not medical advice, diagnosis, treatment or a substitute for consultation with a qualified healthcare professional.
        </p>
        <h2>No clinician patient relationship</h2>
        <p>
          Reading this site does not create a clinician patient relationship. Individual health needs vary. What helps one person may be inappropriate for another, especially when injury, chronic conditions, pregnancy, disability or medication are involved.
        </p>
        <h2>When to seek professional care</h2>
        <p>
          Seek prompt medical care for severe pain, sudden vision changes, chest pain, difficulty breathing, neurological symptoms such as weakness or numbness, thoughts of self harm, or any symptom that concerns you. For mental health crises, contact local emergency services or a crisis line in your country.
        </p>
        <h2>Accuracy and limitations</h2>
        <p>
          We work to keep information accurate and aligned with publicly available guidance, but health knowledge evolves and no website can cover every situation. Always follow the advice of your own clinician when it differs from general articles online.
        </p>
        <h2>Related policies</h2>
        <p>
          Learn more about our standards in the <Link href="/editorial-policy">editorial policy</Link> and how we handle commercial relationships in the <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
        </p>
      </div>
    </main>
  );
}
