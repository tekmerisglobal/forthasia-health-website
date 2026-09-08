/**
 * Decorative backdrop for the porcelain-dim bands (PageHero, and optionally
 * `Section tone="dim"`). Fills the right-hand whitespace with a faint, brand-
 * coloured line composition — a distant Hainan coastline and ridge line with a
 * hint of clinical architecture — plus the existing radial haze.
 *
 * - `aria-hidden`, `pointer-events-none`, never affects layout.
 * - Radial-masked so it dissolves before it reaches the text column.
 * - `variant="band"` is a fainter, smaller version for content sections.
 * - Pass `image` (a path under /public) to swap the line-art for a real photo
 *   rendered at low opacity behind a porcelain scrim — a clean drop-in once
 *   photography exists. See README "Hero imagery".
 */
export function HeroBackdrop({
  variant = "hero",
  image,
}: {
  variant?: "hero" | "band";
  image?: string;
}) {
  const isBand = variant === "band";

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Radial haze — gold from top-right, ionian from bottom-left. */}
      <div
        className={`absolute inset-0 ${isBand ? "opacity-[0.16]" : "opacity-[0.5]"} [background:radial-gradient(60%_60%_at_88%_-10%,color-mix(in_srgb,var(--color-olympic-gold)_28%,transparent),transparent_70%),radial-gradient(52%_52%_at_-8%_112%,color-mix(in_srgb,var(--color-ionian)_18%,transparent),transparent_70%)]`}
      />

      {image ? (
        <>
          <div
            className={`absolute inset-0 bg-cover bg-right bg-no-repeat ${
              isBand ? "opacity-[0.10]" : "opacity-[0.16]"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
          {/* Scrim — porcelain-dim solid over the text side, clearing to the right. */}
          <div className="absolute inset-0 [background:linear-gradient(90deg,var(--color-porcelain-dim)_0%,color-mix(in_srgb,var(--color-porcelain-dim)_70%,transparent)_45%,transparent_100%)]" />
        </>
      ) : (
        <svg
          viewBox="0 0 800 520"
          preserveAspectRatio="xMaxYMax slice"
          className={`absolute inset-0 h-full w-full ${
            isBand ? "opacity-[0.18]" : "opacity-[0.6]"
          } [mask-image:radial-gradient(120%_120%_at_98%_55%,#000_0%,#000_20%,transparent_60%)]`}
          fill="none"
        >
          {/* Coastline / water — long, calm horizontals. */}
          <g
            stroke="var(--color-olympic-gold)"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.6"
          >
            <path d="M300 168 C 400 156 520 182 620 166 S 800 150 820 150" />
            <path d="M320 198 C 430 188 540 214 650 198 S 800 186 820 186" />
            <path d="M360 230 C 470 222 560 246 680 232 S 800 224 820 224" />
          </g>

          {/* Ridge lines — a distant range. */}
          <g strokeLinejoin="round" strokeLinecap="round">
            <path
              d="M250 520 L 330 322 L 392 388 L 486 268 L 560 356 L 640 292 L 720 360 L 820 300 L 820 520 Z"
              fill="color-mix(in srgb, var(--color-ionian) 8%, transparent)"
              stroke="var(--color-ionian)"
              strokeWidth="1.5"
              opacity="0.5"
            />
            <path
              d="M180 520 L 250 402 L 336 448 L 452 338 L 540 420 L 660 330 L 760 402 L 820 366 L 820 520 Z"
              fill="color-mix(in srgb, var(--color-bronze) 7%, transparent)"
              stroke="var(--color-bronze)"
              strokeWidth="1.3"
              opacity="0.55"
            />
          </g>

          {/* Architecture — a hint of a glass facade, top-right. */}
          <g stroke="var(--color-bronze)" strokeWidth="1.1" opacity="0.4">
            <path d="M604 300 L 604 150 Q 604 120 636 120 L 720 120 Q 752 120 752 150 L 752 300" />
            <line x1="640" y1="300" x2="640" y2="132" />
            <line x1="678" y1="300" x2="678" y2="126" />
            <line x1="716" y1="300" x2="716" y2="132" />
            <line x1="604" y1="196" x2="752" y2="196" />
            <line x1="604" y1="248" x2="752" y2="248" />
          </g>

          {/* Waypoints — small gold marks, like sites on a chart. */}
          <g fill="var(--color-olympic-gold)" opacity="0.55">
            <circle cx="486" cy="268" r="3" />
            <circle cx="678" cy="126" r="2.5" />
            <circle cx="360" cy="230" r="2.5" />
          </g>
        </svg>
      )}
    </div>
  );
}
