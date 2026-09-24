/** Standalone flat vector characters for section decoration */

type Props = {className?: string};

/** Woman with laptop — grey turtleneck, blue wide pants */
export function CharacterLaptop({className = ''}: Props) {
  return (
    <svg className={className} viewBox="0 0 160 280" fill="none" aria-hidden>
      {/* Legs */}
      <path d="M55 160 L62 250 L88 250 L80 160 Z" fill="#6B8CAE" />
      <path d="M80 160 L88 250 L114 250 L105 160 Z" fill="#6B8CAE" />
      {/* Shoes */}
      <ellipse cx="72" cy="252" rx="16" ry="7" fill="#E8B4C0" />
      <ellipse cx="104" cy="252" rx="16" ry="7" fill="#E8B4C0" />
      {/* Skirt/pants waist */}
      <rect x="55" y="145" width="50" height="25" rx="8" fill="#5A7A9A" />
      {/* Torso */}
      <rect x="52" y="85" width="56" height="70" rx="22" fill="#B8C4CE" />
      {/* Belt */}
      <rect x="58" y="148" width="44" height="8" rx="2" fill="#2D3436" />
      <circle cx="80" cy="152" r="4" fill="#F5C4A0" />
      {/* Arms */}
      <rect x="30" y="95" width="28" height="14" rx="7" fill="#E8B896" transform="rotate(-25 30 95)" />
      <rect x="100" y="100" width="40" height="14" rx="7" fill="#E8B896" transform="rotate(15 100 100)" />
      {/* Laptop under arm */}
      <rect x="115" y="130" width="36" height="28" rx="3" fill="#2D3436" />
      <rect x="118" y="133" width="30" height="18" rx="2" fill="#7EB8A8" />
      {/* Head */}
      <circle cx="80" cy="55" r="32" fill="#C4785A" />
      {/* Hair updo */}
      <circle cx="80" cy="28" r="18" fill="#1A1A1A" />
      <path d="M52 50 Q52 22 80 18 Q108 22 108 50 Q108 35 80 32 Q52 35 52 50" fill="#1A1A1A" />
      {/* Face */}
      <circle cx="70" cy="55" r="3" fill="#2D3436" />
      <circle cx="90" cy="55" r="3" fill="#2D3436" />
      <path d="M72 70 Q80 78 88 70" stroke="#A05A45" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Phone to ear */}
      <rect x="28" y="48" width="14" height="24" rx="3" fill="#2D3436" />
    </svg>
  );
}

/** Person with coffee — warm casual */
export function CharacterCoffee({className = ''}: Props) {
  return (
    <svg className={className} viewBox="0 0 140 260" fill="none" aria-hidden>
      <path d="M45 150 L52 235 L75 235 L68 150 Z" fill="#C4783A" />
      <path d="M68 150 L75 235 L98 235 L90 150 Z" fill="#C4783A" />
      <ellipse cx="60" cy="237" rx="14" ry="6" fill="#2D3436" />
      <ellipse cx="90" cy="237" rx="14" ry="6" fill="#2D3436" />
      <rect x="45" y="80" width="50" height="80" rx="18" fill="#6B9BFF" />
      <rect x="52" y="75" width="36" height="20" rx="8" fill="#5A7FE0" />
      <rect x="30" y="95" width="20" height="14" rx="7" fill="#E8B896" />
      <rect x="90" y="90" width="20" height="50" rx="10" fill="#E8B896" />
      {/* Coffee cup */}
      <rect x="28" y="75" width="22" height="26" rx="4" fill="#F5F0EB" />
      <ellipse cx="39" cy="75" rx="11" ry="5" fill="#FFF" />
      <path d="M50 82 Q58 85 58 90 Q58 96 50 98" stroke="#F5F0EB" strokeWidth="4" fill="none" />
      <circle cx="70" cy="48" r="28" fill="#E8B896" />
      <path d="M48 42 Q48 20 70 16 Q92 20 92 42 Q92 28 70 26 Q48 28 48 42" fill="#8B6914" />
      <circle cx="60" cy="48" r="2.5" fill="#2D3436" />
      <circle cx="80" cy="48" r="2.5" fill="#2D3436" />
      <path d="M62 60 Q70 66 78 60" stroke="#C97B63" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/** Stretching figure — for 10-minute fix / movement */
export function CharacterStretch({className = ''}: Props) {
  return (
    <svg className={className} viewBox="0 0 160 240" fill="none" aria-hidden>
      <ellipse cx="80" cy="225" rx="40" ry="10" fill="#EDE6DC" />
      {/* Legs wide stance */}
      <path d="M70 140 L50 210 L70 210 L80 140 Z" fill="#4A5568" />
      <path d="M90 140 L100 210 L120 210 L100 140 Z" fill="#4A5568" />
      <ellipse cx="58" cy="212" rx="14" ry="6" fill="#2D3436" />
      <ellipse cx="112" cy="212" rx="14" ry="6" fill="#2D3436" />
      {/* Torso */}
      <rect x="58" y="80" width="44" height="70" rx="16" fill="#E8A0B8" />
      {/* Arms raised */}
      <rect x="20" y="50" width="14" height="55" rx="7" fill="#E8B896" transform="rotate(-30 20 50)" />
      <rect x="120" y="45" width="14" height="55" rx="7" fill="#E8B896" transform="rotate(30 120 45)" />
      <circle cx="80" cy="55" r="26" fill="#E8B896" />
      <path d="M58 50 Q58 28 80 24 Q102 28 102 50 Q102 38 80 36 Q58 38 58 50" fill="#3D2914" />
      <circle cx="70" cy="55" r="2.5" fill="#2D3436" />
      <circle cx="90" cy="55" r="2.5" fill="#2D3436" />
      <path d="M72 68 Q80 74 88 68" stroke="#C97B63" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
