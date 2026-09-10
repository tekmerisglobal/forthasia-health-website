import Link from "next/link";

/**
 * The wordmark IS the logo — there is no pictorial symbol beside it.
 * "FORTHASIA" in Marcellus with 0.30em tracking (+ a matching 0.30em
 * left margin to compensate for the trailing letter-space); "HEALTH"
 * beneath it in Karla 600 at 0.36x the size, 0.55em tracking, bronze.
 *
 * Two variants only: `align="left"` for the header, `align="center"`
 * for the footer (per the brand rollout). `onDark` swaps to the
 * light/lifted pair for a basalt ground (e.g. the footer).
 */
export function Wordmark({
  align = "left",
  onDark = false,
  size = "1.35rem",
  className = "",
}: {
  align?: "left" | "center";
  onDark?: boolean;
  /** Size of "FORTHASIA"; HEALTH is locked to 0.36x this. */
  size?: string;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Forthasia Health — home"
      className={`inline-flex flex-col ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      <span
        className="uppercase"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: size,
          letterSpacing: "0.30em",
          marginLeft: "0.30em",
          color: onDark ? "var(--color-porcelain)" : "var(--color-ink-umber)",
        }}
      >
        Forthasia
      </span>
      <span
        className="uppercase"
        style={{
          marginTop: "0.9em",
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          fontSize: `calc(${size} * 0.36)`,
          letterSpacing: "0.55em",
          marginLeft: "0.55em",
          color: onDark ? "var(--bronze-lift)" : "var(--color-bronze)",
        }}
      >
        Health
      </span>
    </Link>
  );
}
