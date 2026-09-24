import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container grid gap-10 py-14 md:grid-cols-4">
        <div>
          <p className="serif text-xl font-bold text-[#111]">HealthyDeskHabits</p>
          <p className="mt-3 text-sm leading-relaxed text-[#6b6b6b]">
            A magazine-style publication on healthier remote work. General information only — not medical advice.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#111]">Sections</p>
          <div className="mt-3 grid gap-2 text-sm text-[#444]">
            <Link href="/desk-health" className="hover:underline">Desk Health</Link>
            <Link href="/screen-health" className="hover:underline">Screen Health</Link>
            <Link href="/mental-wellness" className="hover:underline">Mental Wellness</Link>
            <Link href="/health-tech" className="hover:underline">Health Tech</Link>
            <Link href="/the-10-minute-fix" className="hover:underline">The 10-Minute Fix</Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#111]">Publication</p>
          <div className="mt-3 grid gap-2 text-sm text-[#444]">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/editorial-policy" className="hover:underline">Editorial policy</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/search" className="hover:underline">Search</Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#111]">Legal</p>
          <div className="mt-3 grid gap-2 text-sm text-[#444]">
            <Link href="/health-disclaimer" className="hover:underline">Health disclaimer</Link>
            <Link href="/privacy-policy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
            <Link href="/affiliate-disclosure" className="hover:underline">Affiliate disclosure</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-[#e0ddd6]">
        <div className="container flex flex-col gap-1 py-5 text-xs text-[#6b6b6b] sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} HealthyDeskHabits</span>
          <span>Magazine layout inspired by classic editorial design</span>
        </div>
      </div>
    </footer>
  );
}
