'use client';
import Link from 'next/link';
import {Search, Menu} from 'lucide-react';
import {useState} from 'react';

const nav = [
  {label: 'Desk Health', href: '/desk-health'},
  {label: 'Screen Health', href: '/screen-health'},
  {label: 'Mental Wellness', href: '/mental-wellness'},
  {label: 'Health Tech', href: '/health-tech'},
  {label: '10-Minute Fix', href: '/the-10-minute-fix'},
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-[#dfe2dc] bg-[#f7f7f3]/95 backdrop-blur">
      <div className="container flex h-[76px] items-center justify-between gap-6">
        <Link href="/" className="text-[21px] font-bold tracking-[-.05em]">
          Healthy<span className="text-[#718f7c]">Desk</span>Habits
        </Link>
        <nav className="hidden items-center gap-6 text-[13px] font-medium lg:flex">
          {nav.map(item => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/search" aria-label="Search" className="grid size-10 place-items-center rounded-full border border-[#dfe2dc]">
            <Search size={17} />
          </Link>
          <Link
            href="#newsletter"
            className="hidden rounded-full bg-[#111315] px-5 py-3 text-[12px] font-bold text-white sm:block"
          >
            Join the Brief
          </Link>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
            className="grid size-10 place-items-center rounded-full border border-[#dfe2dc] lg:hidden"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-[#dfe2dc] bg-[#f7f7f3] lg:hidden">
          <nav className="container grid gap-1 py-4">
            {nav.map(item => (
              <Link onClick={() => setOpen(false)} className="rounded-xl px-3 py-3" key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link onClick={() => setOpen(false)} className="rounded-xl px-3 py-3" href="/about">
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
