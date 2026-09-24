/** Soft accent bar for article cards — classic modern */
export default function CardAccent({category}: {category: string}) {
  const bg: Record<string, string> = {
    'Desk Health': '#ccfbf1',
    'Screen Health': '#f5f5f4',
    'Mental Wellness': '#fafaf9',
    'Health Tech': '#ccfbf1',
    'The 10-Minute Fix': '#f5f5f4',
  };
  const accent: Record<string, string> = {
    'Desk Health': '#0f766e',
    'Screen Health': '#57534e',
    'Mental Wellness': '#b45309',
    'Health Tech': '#0d9488',
    'The 10-Minute Fix': '#a8a29e',
  };
  const b = bg[category] ?? '#f5f5f4';
  const a = accent[category] ?? '#0f766e';
  return (
    <div className="h-1.5 w-full" style={{background: b}} aria-hidden>
      <div className="h-full w-1/3 rounded-r-full" style={{background: a}} />
    </div>
  );
}
