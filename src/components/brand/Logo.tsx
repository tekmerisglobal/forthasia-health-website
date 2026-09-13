import Link from "next/link";

/**
 * The Forthasia mark — a stroke-based line drawing, currentColor throughout.
 *
 *   ONE serpent (never two — the caduceus is banned repo-wide, see CLAUDE.md)
 *   coiled on a rod; the rod is the trunk of an olive tree; the kotinos —
 *   the victor's olive crown — is its canopy; the whole enclosed in a
 *   Spartan lambda (Λ).
 *
 * Colourways come from the parent's `color`:
 *   Olympic Gold #C2A15C on Ink Umber #171310  →  text-[var(--color-olympic-gold)]
 *   Ink Umber on Porcelain #FAF7F2             →  text-[var(--color-ink-umber)]
 *
 * `variant="compact"` is the ≤32px cut (favicon, nav): heavier strokes, no
 * leaf ticks, a simpler coil — the detail of the full mark closes up below
 * ~40px. Pick the variant by rendered size, not by context.
 */

// Shared geometry — viewBox 0 0 100 100.
const LAMBDA = "M14 92 L50 8 L86 92";
const TRUNK = "M50 50 L50 88";
const KOTINOS_ARC = "M39 48.5 A11 11 0 1 1 61 48.5";
// Leaf ticks radiating from the crown — full variant only.
const KOTINOS_LEAVES = [
  "M40.5 44.5 l-2.8 -1.6",
  "M44.5 40.5 l-1.8 -2.7",
  "M50 39 l0 -3.2",
  "M55.5 40.5 l1.8 -2.7",
  "M59.5 44.5 l2.8 -1.6",
];
const SERPENT_FULL =
  "M41 58 C56 58 60 64 50 68 C40 72 40 78 50 82 C58 85 56 89 51 90";
const SERPENT_COMPACT = "M41 58 C62 62 38 76 52 88";
const HEAD = { cx: 41, cy: 58 };

export function Logo({
  size = 24,
  variant,
  className = "",
  title = "Forthasia Health",
}: {
  /** Rendered size in px (square). */
  size?: number;
  /** Defaults by size: compact at or below 32px, full above. */
  variant?: "full" | "compact";
  className?: string;
  title?: string;
}) {
  const v = variant ?? (size <= 32 ? "compact" : "full");
  const compact = v === "compact";
  const sw = compact ? 7 : 2.6;

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={LAMBDA} />
      <path d={TRUNK} />
      <path d={KOTINOS_ARC} />
      {!compact && KOTINOS_LEAVES.map((d) => <path key={d} d={d} />)}
      {/* The single serpent. */}
      <path d={compact ? SERPENT_COMPACT : SERPENT_FULL} />
      <circle cx={HEAD.cx} cy={HEAD.cy} r={compact ? 3 : 2} fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * Mark + wordmark. FORTHASIA in Inter 600, 0.18em tracking, uppercase;
 * HEALTH beneath in JetBrains Mono 10px, 0.4em tracking, uppercase.
 * `tone="light"` = ink on porcelain (header); `tone="dark"` = gold on ink
 * (footer). `layout="stacked"` puts the mark above the wordmark for the
 * large footer/OG cut.
 */
export function LogoLockup({
  tone = "light",
  markSize = 24,
  layout = "inline",
  href,
  className = "",
}: {
  tone?: "light" | "dark";
  markSize?: number;
  layout?: "inline" | "stacked";
  href?: string;
  className?: string;
}) {
  const markColor =
    tone === "dark" ? "text-[var(--color-olympic-gold)]" : "text-[var(--color-ink-umber)]";
  const nameColor =
    tone === "dark" ? "text-[var(--color-porcelain)]" : "text-[var(--color-ink-umber)]";
  const subColor =
    tone === "dark" ? "text-[var(--color-olympic-gold)]" : "text-[var(--color-bronze)]";
  const stacked = layout === "stacked";

  const inner = (
    <>
      <Logo size={markSize} className={`shrink-0 ${markColor}`} />
      <span className="leading-none">
        <span
          className={`block font-body text-[1.4rem] font-semibold uppercase tracking-[0.18em] ${nameColor}`}
        >
          Forthasia
        </span>
        <span
          className={`mt-1.5 block font-mono text-[10px] uppercase tracking-[0.4em] ${subColor}`}
        >
          Health
        </span>
      </span>
    </>
  );

  const cls = `${stacked ? "inline-flex flex-col items-start gap-5" : "flex items-center gap-3.5"} ${className}`;

  if (href) {
    return (
      <Link href={href} aria-label="Forthasia Health — home" className={cls}>
        {inner}
      </Link>
    );
  }
  return <div className={cls}>{inner}</div>;
}
