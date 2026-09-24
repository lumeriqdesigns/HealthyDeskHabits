/** Flat vector remote-work scene — diverse professionals (Humaaans-inspired, original) */
export default function HeroScene({className = ''}: {className?: string}) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustrated remote workers in a friendly workspace"
    >
      {/* Soft ground */}
      <ellipse cx="260" cy="378" rx="220" ry="18" fill="#EDE6DC" />

      {/* Desk */}
      <rect x="120" y="268" width="280" height="16" rx="8" fill="#C4A484" />
      <rect x="132" y="284" width="12" height="70" rx="6" fill="#A88968" />
      <rect x="376" y="284" width="12" height="70" rx="6" fill="#A88968" />

      {/* Monitor */}
      <rect x="210" y="175" width="100" height="72" rx="10" fill="#2D3436" />
      <rect x="218" y="183" width="84" height="56" rx="6" fill="#A8D4C8" />
      <rect x="250" y="247" width="20" height="10" rx="3" fill="#636E72" />
      <rect x="235" y="255" width="50" height="6" rx="3" fill="#B2BEC3" />

      {/* Plant */}
      <path d="M145 268 L150 240 H165 L170 268 Z" fill="#D4A574" />
      <circle cx="150" cy="232" r="12" fill="#5A9B6E" />
      <circle cx="164" cy="228" r="14" fill="#6BB07E" />
      <circle cx="157" cy="218" r="10" fill="#4A8A5E" />

      {/* Mug */}
      <rect x="340" y="248" width="26" height="22" rx="5" fill="#E8917A" />
      <path d="M366 254 Q376 256 376 259 Q376 264 366 265" stroke="#E8917A" strokeWidth="4" fill="none" />

      {/* ===== FIGURE 1: standing left, laptop bag, teal sweater ===== */}
      {/* Legs */}
      <path d="M70 300 L78 360 L95 360 L88 300 Z" fill="#3D4A6B" />
      <path d="M88 300 L95 360 L112 360 L105 300 Z" fill="#3D4A6B" />
      {/* Shoes */}
      <ellipse cx="84" cy="362" rx="14" ry="6" fill="#2D3436" />
      <ellipse cx="106" cy="362" rx="14" ry="6" fill="#2D3436" />
      {/* Torso */}
      <rect x="72" y="210" width="40" height="95" rx="18" fill="#5B8DEF" />
      {/* Arm with phone */}
      <rect x="108" y="225" width="14" height="48" rx="7" fill="#E8B896" transform="rotate(-20 108 225)" />
      <rect x="58" y="230" width="14" height="45" rx="7" fill="#E8B896" transform="rotate(15 58 230)" />
      {/* Head */}
      <circle cx="92" cy="185" r="28" fill="#C4785A" />
      {/* Hair bun */}
      <circle cx="92" cy="160" r="16" fill="#1A1A1A" />
      <path d="M68 180 Q68 155 92 152 Q116 155 116 180 Q116 168 92 165 Q68 168 68 180" fill="#1A1A1A" />
      {/* Face */}
      <circle cx="84" cy="185" r="2.5" fill="#2D3436" />
      <circle cx="100" cy="185" r="2.5" fill="#2D3436" />
      <path d="M86 198 Q92 204 98 198" stroke="#A05A45" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Phone */}
      <rect x="118" y="218" width="12" height="20" rx="3" fill="#2D3436" />
      {/* Bag */}
      <rect x="55" y="280" width="22" height="28" rx="4" fill="#2D3436" />

      {/* ===== FIGURE 2: seated at desk (center) olive top ===== */}
      {/* Chair */}
      <rect x="230" y="290" width="60" height="55" rx="14" fill="#6B7FDB" />
      {/* Legs under desk */}
      <rect x="242" y="320" width="16" height="45" rx="8" fill="#4A5568" />
      <rect x="262" y="320" width="16" height="45" rx="8" fill="#4A5568" />
      <ellipse cx="248" cy="366" rx="12" ry="5" fill="#2D3436" />
      <ellipse cx="272" cy="366" rx="12" ry="5" fill="#2D3436" />
      {/* Torso */}
      <rect x="235" y="230" width="50" height="70" rx="16" fill="#7BA87A" />
      {/* Arms on desk */}
      <rect x="215" y="250" width="28" height="14" rx="7" fill="#E8B896" />
      <rect x="278" y="250" width="28" height="14" rx="7" fill="#E8B896" />
      {/* Head */}
      <circle cx="260" cy="205" r="26" fill="#E8B896" />
      {/* Hair short wavy */}
      <path d="M238 200 Q238 175 260 172 Q282 175 282 200 Q282 185 260 182 Q238 185 238 200" fill="#5C4030" />
      <circle cx="242" cy="195" r="8" fill="#5C4030" />
      <circle cx="278" cy="195" r="8" fill="#5C4030" />
      {/* Face */}
      <circle cx="252" cy="205" r="2.2" fill="#2D3436" />
      <circle cx="268" cy="205" r="2.2" fill="#2D3436" />
      <path d="M254 216 Q260 221 266 216" stroke="#C97B63" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* ===== FIGURE 3: standing right, coat + folder ===== */}
      {/* Legs */}
      <path d="M420 295 L428 360 L444 360 L438 295 Z" fill="#2D3436" />
      <path d="M438 295 L444 360 L460 360 L454 295 Z" fill="#2D3436" />
      <ellipse cx="434" cy="362" rx="12" ry="5" fill="#1A1A1A" />
      <ellipse cx="454" cy="362" rx="12" ry="5" fill="#1A1A1A" />
      {/* Coat */}
      <path d="M415 205 L415 300 Q435 310 455 300 L455 205 Q435 195 415 205 Z" fill="#3D4A6B" />
      <rect x="422" y="215" width="26" height="70" rx="10" fill="#F5F0EB" />
      {/* Arms */}
      <rect x="400" y="220" width="14" height="50" rx="7" fill="#E8B896" transform="rotate(10 400 220)" />
      <rect x="452" y="225" width="14" height="48" rx="7" fill="#E8B896" transform="rotate(-8 452 225)" />
      {/* Folder */}
      <rect x="460" y="250" width="28" height="36" rx="3" fill="#E8917A" />
      {/* Head */}
      <circle cx="435" cy="180" r="27" fill="#8B5A3C" />
      {/* Hijab-inspired soft wrap (stylized head covering) */}
      <path d="M410 175 Q410 148 435 145 Q460 148 460 175 Q460 155 435 152 Q410 155 410 175" fill="#6B7FDB" />
      <path d="M408 185 Q408 200 420 210 L435 200 L450 210 Q462 200 462 185 Q462 170 435 168 Q408 170 408 185" fill="#6B7FDB" />
      {/* Face */}
      <circle cx="427" cy="182" r="2.2" fill="#2D3436" />
      <circle cx="443" cy="182" r="2.2" fill="#2D3436" />
      <path d="M429 194 Q435 199 441 194" stroke="#6B3A2A" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
