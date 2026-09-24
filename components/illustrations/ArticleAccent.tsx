/** Flat vector character accent for article cards by category */
export default function ArticleAccent({category}: {category: string}) {
  const themes: Record<string, {bg: string; skin: string; outfit: string; accent: string}> = {
    'Desk Health': {bg: '#FFE8D6', skin: '#E8B896', outfit: '#5B8DEF', accent: '#C4A484'},
    'Screen Health': {bg: '#D6E8FF', skin: '#C4785A', outfit: '#6B9BFF', accent: '#2D3436'},
    'Mental Wellness': {bg: '#E8D6F0', skin: '#E8B896', outfit: '#B794F4', accent: '#E8B4C8'},
    'Health Tech': {bg: '#D6F0E8', skin: '#8B5A3C', outfit: '#2D3436', accent: '#7EB8A8'},
    'The 10-Minute Fix': {bg: '#FFF0D6', skin: '#E8B896', outfit: '#E8A0B8', accent: '#F6C945'},
  };
  const t = themes[category] ?? {bg: '#E8E4DC', skin: '#E8B896', outfit: '#8faf9a', accent: '#C4A484'};

  return (
    <div className="article-accent" style={{background: t.bg}} aria-hidden>
      <svg viewBox="0 0 160 100" className="h-full w-full max-h-[120px]" fill="none">
        {/* Soft floor */}
        <ellipse cx="80" cy="92" rx="50" ry="6" fill="white" opacity="0.35" />
        {/* Legs */}
        <path d="M68 58 L72 88 L84 88 L80 58 Z" fill="#4A5568" />
        <path d="M80 58 L84 88 L96 88 L92 58 Z" fill="#4A5568" />
        {/* Shoes */}
        <ellipse cx="76" cy="90" rx="10" ry="4" fill="#2D3436" />
        <ellipse cx="92" cy="90" rx="10" ry="4" fill="#2D3436" />
        {/* Torso */}
        <rect x="65" y="32" width="30" height="32" rx="12" fill={t.outfit} />
        {/* Arms */}
        <rect x="48" y="36" width="18" height="9" rx="4.5" fill={t.skin} />
        <rect x="94" y="36" width="18" height="9" rx="4.5" fill={t.skin} />
        {/* Prop */}
        <rect x="108" y="40" width="18" height="14" rx="2" fill={t.accent} />
        {/* Head */}
        <circle cx="80" cy="22" r="14" fill={t.skin} />
        {/* Hair */}
        <path d="M68 18 Q68 8 80 6 Q92 8 92 18 Q92 12 80 11 Q68 12 68 18" fill="#2D3436" />
        {/* Eyes */}
        <circle cx="75" cy="22" r="1.5" fill="#2D3436" />
        <circle cx="85" cy="22" r="1.5" fill="#2D3436" />
      </svg>
    </div>
  );
}
