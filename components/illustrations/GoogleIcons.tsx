/** Soft Material / Google empty-state style category marks */
type P = {className?: string};

export function IconDesk({className = ''}: P) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden>
      <circle cx="40" cy="40" r="40" fill="#CCFBF1" />
      <rect x="16" y="44" width="48" height="8" rx="4" fill="#0F766E" />
      <rect x="24" y="24" width="32" height="22" rx="5" fill="#44403C" />
      <rect x="28" y="28" width="24" height="14" rx="2" fill="#99F6E4" />
    </svg>
  );
}

export function IconScreen({className = ''}: P) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden>
      <circle cx="40" cy="40" r="40" fill="#F5F5F4" />
      <circle cx="40" cy="38" r="16" fill="#F6C4A8" />
      <path d="M28 30 Q40 24 52 30" stroke="#44403C" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="34" cy="38" r="2.5" fill="#44403C" />
      <circle cx="46" cy="38" r="2.5" fill="#44403C" />
      <path d="M24 52 Q40 60 56 52" stroke="#A8A29E" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function IconMind({className = ''}: P) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden>
      <circle cx="40" cy="40" r="40" fill="#F5F5F4" />
      <circle cx="40" cy="36" r="18" fill="#F6C4A8" />
      <circle cx="34" cy="34" r="2.5" fill="#44403C" />
      <circle cx="46" cy="34" r="2.5" fill="#44403C" />
      <path d="M34 44 Q40 50 46 44" stroke="#C47B5A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="22" cy="24" r="8" fill="#B45309" opacity="0.35" />
      <circle cx="58" cy="22" r="10" fill="#A8A29E" opacity="0.45" />
    </svg>
  );
}

export function IconTech({className = ''}: P) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden>
      <circle cx="40" cy="40" r="40" fill="#E6F4EA" />
      <rect x="24" y="26" width="32" height="28" rx="8" fill="#44403C" />
      <rect x="28" y="30" width="24" height="16" rx="3" fill="#0d9488" />
      <circle cx="40" cy="52" r="3" fill="#BDC1C6" />
    </svg>
  );
}

export function IconTimer({className = ''}: P) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden>
      <circle cx="40" cy="40" r="40" fill="#F5F5F4" />
      <circle cx="40" cy="42" r="20" fill="#A8A29E" />
      <circle cx="40" cy="42" r="14" fill="#FFF" />
      <path d="M40 32 L40 42 L48 48" stroke="#44403C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

const map: Record<string, (p: P) => ReturnType<typeof IconDesk>> = {
  'desk-health': IconDesk,
  'screen-health': IconScreen,
  'mental-wellness': IconMind,
  'health-tech': IconTech,
  'the-10-minute-fix': IconTimer,
};

export function CategoryIcon({slug, className = 'size-14'}: {slug: string; className?: string}) {
  const Icon = map[slug] ?? IconDesk;
  return <Icon className={className} />;
}
