const categoryToCover: Record<string, string> = {
  'Desk Health': '/images/covers/desk-health.svg',
  'Screen Health': '/images/covers/screen-health.svg',
  'Mental Wellness': '/images/covers/mental-wellness.svg',
  'Health Tech': '/images/covers/health-tech.svg',
  'The 10-Minute Fix': '/images/covers/the-10-minute-fix.svg',
};

export default function ImagePlaceholder({
  category,
  variant = 'default',
  label,
  src,
  alt,
}: {
  category?: string;
  variant?: 'default' | 'tall' | 'wide' | 'square';
  label?: string;
  src?: string;
  alt?: string;
}) {
  const size =
    variant === 'tall'
      ? 'img-ph--tall'
      : variant === 'wide'
        ? 'img-ph--wide'
        : variant === 'square'
          ? 'img-ph--square'
          : '';

  const imageSrc = src ?? (category ? categoryToCover[category] : undefined) ?? '/images/covers/default.svg';
  const imageAlt = alt ?? (label || category || 'Article cover');

  return (
    <div className={`img-ph ${size}`} style={{background: '#f7f5f0', border: '1px solid #e0ddd6'}}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}
