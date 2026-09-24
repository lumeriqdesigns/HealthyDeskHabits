/** Soft claymation-style decorative blob */
export default function ClayBlob({
  variant = 'peach',
  className = '',
}: {
  variant?: 'peach' | 'sage' | 'lavender' | 'sky' | 'butter';
  className?: string;
}) {
  const fills: Record<string, string> = {
    peach: '#F4C9A8',
    sage: '#B8D4C8',
    lavender: '#D4C4E8',
    sky: '#A8D4F0',
    butter: '#FFE8A0',
  };
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" aria-hidden>
      <path
        d="M100 20 C140 20 175 50 175 95 C175 140 145 175 100 180 C55 175 25 140 25 95 C25 50 60 20 100 20 Z"
        fill={fills[variant]}
      />
      <ellipse cx="75" cy="70" rx="28" ry="18" fill="white" opacity="0.35" />
    </svg>
  );
}
