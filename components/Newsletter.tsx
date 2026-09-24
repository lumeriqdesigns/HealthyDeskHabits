import Link from 'next/link';

export default function Newsletter() {
  return (
    <section id="newsletter" className="newsletter-panel">
      <p className="eyebrow">Newsletter</p>
      <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.03em] text-[#111] md:text-4xl">
        Stories for a healthier workweek
      </h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#6b6b6b]">
        One practical idea each week — desk, screen, movement, and focus.
      </p>
      <form className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row" action="#" method="post">
        <label htmlFor="email" className="sr-only">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Email address"
          className="h-11 flex-1 border border-[#e0ddd6] bg-white px-3 text-sm outline-none focus:border-[#111]"
        />
        <button type="submit" className="btn-primary h-11">
          Subscribe
        </button>
      </form>
      <p className="mt-3 text-xs text-[#6b6b6b]">
        No spam.{' '}
        <Link href="/privacy-policy" className="underline underline-offset-2">
          Privacy policy
        </Link>
      </p>
    </section>
  );
}
