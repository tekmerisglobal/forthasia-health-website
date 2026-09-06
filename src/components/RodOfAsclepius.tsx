/**
 * Single-serpent Rod of Asclepius (healing).
 * Blueprint §6: never the Caduceus (two snakes / wings — commerce).
 */
export function RodOfAsclepius({
  className,
  title = "Rod of Asclepius",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* The rod */}
      <line x1="24" y1="3" x2="24" y2="45" />
      {/* The serpent, entwined */}
      <path d="M24 7c6 0 6 5 0 5s-6 5 0 5 6 5 0 5-6 5 0 5 6 5 0 5-6 5 0 5" />
      {/* Serpent head */}
      <path d="M24 7c-2.2 0-3.4-1.5-3.4-3 0-1.2 1-2.2 2.2-2.2 0.9 0 1.6 0.5 1.9 1.2" />
      <circle cx="21.4" cy="2.9" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
