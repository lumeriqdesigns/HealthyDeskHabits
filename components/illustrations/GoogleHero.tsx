/** Google product-style soft geometric illustration */
export default function GoogleHero({className = ''}: {className?: string}) {
  return (
    <svg
      className={className}
      viewBox="0 0 560 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="People working comfortably with technology"
    >
      <defs>
        <linearGradient id="gBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#CCFBF1" />
          <stop offset="100%" stopColor="#D2E3FC" />
        </linearGradient>
        <linearGradient id="gGreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E6F4EA" />
          <stop offset="100%" stopColor="#CEEAD6" />
        </linearGradient>
      </defs>

      <circle cx="480" cy="70" r="90" fill="url(#gBlue)" />
      <circle cx="60" cy="320" r="70" fill="url(#gGreen)" />
      <ellipse cx="280" cy="380" rx="200" ry="16" fill="#F1F3F4" />

      <rect x="140" y="255" width="280" height="14" rx="7" fill="#E7E5E4" />
      <rect x="152" y="269" width="10" height="60" rx="5" fill="#BDC1C6" />
      <rect x="398" y="269" width="10" height="60" rx="5" fill="#BDC1C6" />

      <rect x="220" y="165" width="120" height="80" rx="10" fill="#44403C" />
      <rect x="228" y="173" width="104" height="64" rx="6" fill="#99F6E4" />
      <rect x="270" y="245" width="20" height="10" rx="3" fill="#57534E" />
      <rect x="252" y="253" width="56" height="6" rx="3" fill="#E7E5E4" />

      <rect x="160" y="230" width="22" height="26" rx="4" fill="#FDD663" />
      <circle cx="165" cy="218" r="12" fill="#0d9488" />
      <circle cx="178" cy="214" r="14" fill="#0f766e" />
      <circle cx="171" cy="206" r="9" fill="#0d9488" />

      {/* Standing left — Google blue */}
      <ellipse cx="95" cy="340" rx="28" ry="6" fill="#E8EAED" />
      <rect x="78" y="275" width="16" height="60" rx="8" fill="#57534E" />
      <rect x="98" y="275" width="16" height="60" rx="8" fill="#57534E" />
      <ellipse cx="84" cy="336" rx="12" ry="5" fill="#1c1917" />
      <ellipse cx="108" cy="336" rx="12" ry="5" fill="#1c1917" />
      <rect x="74" y="200" width="48" height="80" rx="20" fill="#0f766e" />
      <rect x="55" y="215" width="22" height="12" rx="6" fill="#F6C4A8" transform="rotate(-20 55 215)" />
      <rect x="118" y="218" width="36" height="12" rx="6" fill="#F6C4A8" transform="rotate(12 118 218)" />
      <rect x="148" y="210" width="14" height="22" rx="3" fill="#1c1917" />
      <circle cx="98" cy="175" r="28" fill="#F6C4A8" />
      <path d="M74 168 C74 145 98 138 122 145 C122 158 122 168 122 168 C110 155 86 155 74 168 Z" fill="#44403C" />
      <circle cx="90" cy="175" r="2.5" fill="#44403C" />
      <circle cx="106" cy="175" r="2.5" fill="#44403C" />
      <path d="M92 188 Q98 193 104 188" stroke="#C47B5A" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Seated center — Google green */}
      <rect x="250" y="275" width="60" height="50" rx="12" fill="#CCFBF1" />
      <rect x="262" y="300" width="16" height="40" rx="8" fill="#57534E" />
      <rect x="282" y="300" width="16" height="40" rx="8" fill="#57534E" />
      <ellipse cx="268" cy="342" rx="11" ry="4" fill="#1c1917" />
      <ellipse cx="292" cy="342" rx="11" ry="4" fill="#1c1917" />
      <rect x="252" y="215" width="56" height="70" rx="18" fill="#0d9488" />
      <rect x="230" y="235" width="28" height="12" rx="6" fill="#E2A88A" />
      <rect x="300" y="235" width="28" height="12" rx="6" fill="#E2A88A" />
      <circle cx="280" cy="190" r="26" fill="#E2A88A" />
      <path d="M258 185 C258 165 280 158 302 165 C302 178 302 185 302 185 C290 172 270 172 258 185 Z" fill="#5D4037" />
      <circle cx="272" cy="190" r="2.2" fill="#44403C" />
      <circle cx="288" cy="190" r="2.2" fill="#44403C" />
      <path d="M274 201 Q280 206 286 201" stroke="#C47B5A" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Standing right — Google yellow + red folder */}
      <ellipse cx="455" cy="340" rx="28" ry="6" fill="#E8EAED" />
      <rect x="438" y="275" width="16" height="60" rx="8" fill="#44403C" />
      <rect x="458" y="275" width="16" height="60" rx="8" fill="#44403C" />
      <ellipse cx="444" cy="336" rx="12" ry="5" fill="#1c1917" />
      <ellipse cx="468" cy="336" rx="12" ry="5" fill="#1c1917" />
      <rect x="432" y="200" width="52" height="82" rx="20" fill="#A8A29E" />
      <rect x="440" y="210" width="36" height="55" rx="12" fill="#F5F5F4" />
      <rect x="415" y="215" width="22" height="12" rx="6" fill="#C58B6A" transform="rotate(8 415 215)" />
      <rect x="480" y="218" width="22" height="12" rx="6" fill="#C58B6A" transform="rotate(-10 480 218)" />
      <rect x="490" y="245" width="28" height="34" rx="4" fill="#B45309" />
      <circle cx="458" cy="175" r="27" fill="#C58B6A" />
      <path d="M435 168 C435 148 458 142 481 148 C481 160 481 168 481 168 C470 156 446 156 435 168 Z" fill="#1A1A1A" />
      <circle cx="450" cy="175" r="2.2" fill="#44403C" />
      <circle cx="466" cy="175" r="2.2" fill="#44403C" />
      <path d="M452 186 Q458 191 464 186" stroke="#A05A40" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
