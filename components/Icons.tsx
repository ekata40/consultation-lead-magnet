type IconProps = { className?: string };

export function ArrowDownIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 3.75v12.5m0 0 5-5m-5 5-5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m4.5 10.25 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SparkleIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m12 2 1.7 7.3L21 12l-7.3 1.7L12 21l-1.7-7.3L3 12l7.3-2.7L12 2Z" stroke="currentColor" strokeWidth="1.45" strokeLinejoin="round" />
      <path d="m19 16 .75 2.25L22 19l-2.25.75L19 22l-.75-2.25L16 19l2.25-.75L19 16Z" fill="currentColor" />
    </svg>
  );
}

export function MessageIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 11.5a7.5 7.5 0 0 1-11.16 6.54L4 19l.97-4.18A7.5 7.5 0 1 1 20 11.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8.5 9.5c.3 1.8 2.2 3.7 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
