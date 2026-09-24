/** Flat modular icons for categories */
type IconProps = {className?: string};

export function DeskHealthIcon({className = ''}: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden>
      <circle cx="40" cy="40" r="38" fill="#FFE8D6" />
      <rect x="18" y="42" width="44" height="8" rx="4" fill="#C4A484" />
      <rect x="28" y="22" width="24" height="18" rx="4" fill="#2D3436" />
      <rect x="30" y="24" width="20" height="14" rx="2" fill="#7EB8A8" />
      <rect x="36" y="40" width="8" height="4" rx="2" fill="#636E72" />
    </svg>
  );
}

export function ScreenHealthIcon({className = ''}: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden>
      <circle cx="40" cy="40" r="38" fill="#D6E8FF" />
      <circle cx="40" cy="38" r="16" fill="#F5C4A0" />
      <path d="M28 30 Q40 22 52 30" stroke="#2D3436" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="34" cy="38" r="2.5" fill="#2D3436" />
      <circle cx="46" cy="38" r="2.5" fill="#2D3436" />
      <path d="M24 50 Q40 58 56 50" stroke="#6B9BFF" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function MentalWellnessIcon({className = ''}: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden>
      <circle cx="40" cy="40" r="38" fill="#E8D6F0" />
      <circle cx="40" cy="36" r="18" fill="#F5C4A0" />
      <circle cx="34" cy="34" r="2.5" fill="#2D3436" />
      <circle cx="46" cy="34" r="2.5" fill="#2D3436" />
      <path d="M34 44 Q40 50 46 44" stroke="#C97B63" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <ellipse cx="28" cy="22" rx="8" ry="6" fill="#E8B4C8" opacity="0.8" />
      <ellipse cx="52" cy="20" rx="10" ry="7" fill="#B8D4C8" opacity="0.8" />
    </svg>
  );
}

export function HealthTechIcon({className = ''}: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden>
      <circle cx="40" cy="40" r="38" fill="#D6F0E8" />
      <rect x="24" y="28" width="32" height="28" rx="8" fill="#2D3436" />
      <rect x="28" y="32" width="24" height="16" rx="3" fill="#7EB8A8" />
      <circle cx="40" cy="54" r="3" fill="#B2BEC3" />
      <path d="M40 20 L40 26 M40 58 L40 64 M20 42 L26 42 M54 42 L60 42" stroke="#6B9BFF" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function TenMinFixIcon({className = ''}: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden>
      <circle cx="40" cy="40" r="38" fill="#FFF0D6" />
      <circle cx="40" cy="40" r="22" fill="#FFE08A" />
      <circle cx="40" cy="40" r="16" fill="#FFF8E7" />
      <path d="M40 28 L40 40 L50 46" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="40" cy="40" r="3" fill="#2D3436" />
    </svg>
  );
}

const map: Record<string, (p: IconProps) => ReturnType<typeof DeskHealthIcon>> = {
  'desk-health': DeskHealthIcon,
  'screen-health': ScreenHealthIcon,
  'mental-wellness': MentalWellnessIcon,
  'health-tech': HealthTechIcon,
  'the-10-minute-fix': TenMinFixIcon,
};

export function CategoryIcon({slug, className = 'size-16'}: {slug: string; className?: string}) {
  const Icon = map[slug] ?? DeskHealthIcon;
  return <Icon className={className} />;
}
