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
    <header className="site-header">
      <div className="container flex h-14 items-center justify-between gap-4 md:h-16">
        <Link href="/" className="brand">
          HealthyDeskHabits
        </Link>
        <nav className="hidden items-center gap-6 text-[13px] font-medium tracking-wide text-[#1e1e1e] lg:flex">
          {nav.map(item => (
            <Link key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <Link href="/search" aria-label="Search" className="grid size-9 place-items-center text-[#6b6b6b] hover:text-[#111]">
            <Search size={18} />
          </Link>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
            className="grid size-9 place-items-center text-[#6b6b6b] lg:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-[#e0ddd6] bg-white lg:hidden">
          <nav className="container grid gap-1 py-3">
            {nav.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
