import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[#dfe2dc] bg-[#eceee8]">
      <div className="container grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="text-xl font-bold tracking-[-.04em]">HealthyDeskHabits</div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[#737875]">
            Health, technology and lifestyle for people who work remotely. General information only — not medical advice.
          </p>
        </div>
        <div>
          <div className="eyebrow">Explore</div>
          <div className="mt-4 grid gap-3 text-sm">
            <Link href="/desk-health">Desk Health</Link>
            <Link href="/screen-health">Screen Health</Link>
            <Link href="/mental-wellness">Mental Wellness</Link>
            <Link href="/health-tech">Health Tech</Link>
            <Link href="/the-10-minute-fix">The 10-Minute Fix</Link>
          </div>
        </div>
        <div>
          <div className="eyebrow">Publication</div>
          <div className="mt-4 grid gap-3 text-sm">
            <Link href="/about">About</Link>
            <Link href="/editorial-policy">Editorial policy</Link>
            <Link href="/author/maya-chen">Our editors</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/search">Search</Link>
          </div>
        </div>
        <div>
          <div className="eyebrow">Legal</div>
          <div className="mt-4 grid gap-3 text-sm">
            <Link href="/health-disclaimer">Health disclaimer</Link>
            <Link href="/privacy-policy">Privacy policy</Link>
            <Link href="/terms">Terms of use</Link>
            <Link href="/affiliate-disclosure">Affiliate disclosure</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-[#dfe2dc]">
        <div className="container flex flex-col gap-2 py-6 text-xs text-[#737875] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} HealthyDeskHabits. All rights reserved.</span>
          <span>Content is for general information and is not medical advice.</span>
        </div>
      </div>
    </footer>
  );
}
