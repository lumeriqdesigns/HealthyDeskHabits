import Link from 'next/link';

export default function Newsletter() {
  return (
    <section id="newsletter" className="rounded-[30px] bg-[#dce7df] px-6 py-12 text-center md:px-12">
      <div className="eyebrow">The Remote Health Brief</div>
      <h2 className="serif mx-auto mt-3 max-w-2xl text-4xl leading-tight md:text-5xl">
        One useful idea for a healthier workday.
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#59615c]">
        One useful idea each week to help you work healthier, move more, sleep better and use technology smarter.
      </p>
      <form className="mx-auto mt-7 flex max-w-md flex-col gap-2 sm:flex-row" action="#" method="post">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Your email address"
          className="min-h-12 flex-1 rounded-full border border-[#b9c9bd] bg-white px-5 outline-none focus:ring-2 focus:ring-[#8faf9a]"
        />
        <button type="submit" className="min-h-12 rounded-full bg-[#111315] px-6 text-sm font-bold text-white">
          Subscribe
        </button>
      </form>
      <p className="mt-3 text-[11px] text-[#737875]">
        No spam. Unsubscribe anytime. See our <Link href="/privacy-policy" className="underline underline-offset-2">privacy policy</Link>.
      </p>
    </section>
  );
}
