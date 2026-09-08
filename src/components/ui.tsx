import Link from "next/link";
import type { ReactNode } from "react";

/* ============================================================
   Shared presentational primitives.
   ============================================================ */

export function Section({
  children,
  className = "",
  tone = "porcelain",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "porcelain" | "dim" | "ink" | "ionian";
  id?: string;
}) {
  const tones: Record<string, string> = {
    porcelain: "bg-[var(--color-porcelain)] text-[var(--color-ink-umber)]",
    dim: "bg-[var(--color-porcelain-dim)] text-[var(--color-ink-umber)]",
    ink: "bg-[var(--color-ink-umber)] text-[var(--color-porcelain)]",
    ionian: "bg-[var(--color-ionian)] text-[var(--color-porcelain)]",
  };
  return (
    <section id={id} className={`${tones[tone]} py-16 md:py-[5.5rem] ${className}`}>
      <div className="shell">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[color-mix(in_srgb,var(--color-bronze)_22%,transparent)] bg-[var(--color-porcelain-dim)] py-16 md:py-[5.5rem]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5] [background:radial-gradient(60%_60%_at_80%_-10%,color-mix(in_srgb,var(--color-olympic-gold)_28%,transparent),transparent_70%),radial-gradient(50%_50%_at_-10%_110%,color-mix(in_srgb,var(--color-ionian)_20%,transparent),transparent_70%)]"
      />
      <div className="shell relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="font-monument text-h1 mt-5 max-w-4xl text-balance text-[var(--color-ink-umber)]">
          {title}
        </h1>
        {lede ? (
          <p className="text-lede mt-6 max-w-2xl text-[var(--color-ink-soft)]">
            {lede}
          </p>
        ) : null}
        {children ? <div className="mt-9">{children}</div> : null}
      </div>
    </section>
  );
}

export function PullQuote({
  children,
  cite,
  onDark = false,
  emphasis = "sans",
}: {
  children: ReactNode;
  cite?: string;
  onDark?: boolean;
  /** "serif" (Fraunces italic) is reserved for the Philosophy page. Everywhere
   * else uses the Inter Tight "sans" treatment per the V-7 correction. */
  emphasis?: "sans" | "serif";
}) {
  const face = emphasis === "serif" ? "font-editorial" : "font-monument";
  return (
    <figure className="mx-auto max-w-3xl text-center">
      <div aria-hidden className="rule-gold mx-auto mb-8 w-24" />
      <blockquote
        className={`${face} text-[1.75rem] leading-snug md:text-[2.25rem] ${
          onDark ? "text-[var(--color-porcelain)]" : "text-[var(--color-ionian)]"
        }`}
      >
        {children}
      </blockquote>
      {cite ? (
        <figcaption
          className={`data-tag mt-6 ${
            onDark
              ? "text-[color-mix(in_srgb,var(--color-olympic-gold)_92%,white)]"
              : "text-[var(--color-bronze)]"
          }`}
        >
          — {cite}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function CTAButton({
  href,
  children,
  variant = "solid",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  external?: boolean;
}) {
  const base = "btn-label inline-flex items-center justify-center gap-2 transition-colors";
  const variants: Record<string, string> = {
    solid:
      "h-11 whitespace-nowrap rounded-full px-6 bg-[var(--color-ink-umber)] text-[var(--color-porcelain)] hover:bg-[var(--color-ionian)]",
    outline:
      "h-11 whitespace-nowrap rounded-full px-6 border border-[var(--color-bronze)] text-[var(--color-ink-umber)] hover:border-[var(--color-olympic-gold)] hover:text-[var(--color-ionian)]",
    ghost:
      "text-[var(--color-ionian)] underline decoration-[var(--color-olympic-gold)] decoration-2 underline-offset-4 hover:decoration-[var(--color-ionian)]",
  };
  const cls = `${base} ${variants[variant]}`;
  if (external) {
    return (
      <a href={href} className={cls} rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/**
 * The Diptych motif (Blueprint §1.2): juxtapose ancient/natural with modern/clinical.
 * Renders two labelled panels side by side. `media` slots take an image later;
 * for now they show a captioned placeholder frame.
 */
export type DiptychPanelInput = {
  label: string;
  note: string;
  /** Descriptive alt text for the asset once it lands (imagery manifest). */
  alt?: string;
  /** [OWN] = supplied by the client; [STOCK] = interim, needs a search brief. */
  tag?: "OWN" | "STOCK" | "OWN/STOCK";
};

export function Diptych({
  ancient,
  modern,
  caption,
}: {
  ancient: DiptychPanelInput;
  modern: DiptychPanelInput;
  caption?: string;
}) {
  return (
    <figure>
      <div className="grid overflow-hidden rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_30%,transparent)] md:grid-cols-2">
        <DiptychPanel side="Ancient · Natural" {...ancient} tone="warm" />
        <DiptychPanel side="Modern · Clinical" {...modern} tone="cool" />
      </div>
      {caption ? (
        <figcaption className="data-tag mt-3 text-[var(--color-bronze)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function DiptychPanel({
  side,
  label,
  note,
  alt,
  tag,
  tone,
}: DiptychPanelInput & { side: string; tone: "warm" | "cool" }) {
  const bg =
    tone === "warm"
      ? "[background:linear-gradient(150deg,#efe4cf,#d9c49a)]"
      : "[background:linear-gradient(150deg,#dfe6ee,#b9c7d8)]";
  return (
    <div
      className={`relative min-h-[220px] p-6 ${bg}`}
      role={alt ? "img" : undefined}
      aria-label={alt}
    >
      <p className="eyebrow text-[color-mix(in_srgb,var(--color-ink-umber)_60%,transparent)]">
        {side}
      </p>
      <p className="font-card-title mt-3 text-[var(--color-ink-umber)]">
        {label}
      </p>
      <p className="mt-2 max-w-xs copy-sm text-[color-mix(in_srgb,var(--color-ink-umber)_75%,transparent)]">
        {note}
      </p>
      <span className="data-tag absolute bottom-4 right-5 rounded-full bg-[color-mix(in_srgb,var(--color-ink-umber)_12%,transparent)] px-2 py-0.5 text-[color-mix(in_srgb,var(--color-ink-umber)_60%,transparent)]">
        {tag ? `[${tag}]` : "image slot"}
      </span>
    </div>
  );
}

/**
 * Card grid primitive (V-7 density spec): gap 16px handled by the parent grid,
 * padding 24px/22px, radius 8px, hairline border. Pass `onDark` for cards that
 * sit on an ink/ionian section (rgba(233,226,216,.14) hairline, per spec).
 */
export function Card({
  children,
  onDark = false,
  className = "",
}: {
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  const border = onDark
    ? "border-[var(--color-hairline-dark)]"
    : "border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)]";
  const bg = onDark ? "bg-[color-mix(in_srgb,var(--color-porcelain)_6%,transparent)]" : "bg-[var(--color-porcelain)]";
  return (
    <div className={`rounded-lg border ${border} ${bg} px-[22px] py-6 ${className}`}>
      {children}
    </div>
  );
}

export type ImageAsset = {
  /** [OWN] = supplied by the client; [STOCK] = interim, needs a search brief. */
  tag: "OWN" | "STOCK" | "OWN/STOCK";
  /** What the frame will hold, for the person sourcing or shooting it. */
  brief: string;
  alt: string;
  caption?: string;
};

/**
 * A single (non-Diptych) image band from the imagery manifest — a captioned,
 * tagged placeholder frame standing in for a photo or line-art asset.
 */
export function ImageSlot({
  asset,
  tone = "warm",
  aspect = "wide",
  className = "",
}: {
  asset: ImageAsset;
  tone?: "warm" | "cool";
  aspect?: "wide" | "square";
  className?: string;
}) {
  const bg =
    tone === "warm"
      ? "[background:linear-gradient(135deg,#efe4cf,#d9c49a)]"
      : "[background:linear-gradient(135deg,#dfe6ee,#b9c7d8)]";
  return (
    <figure className={className}>
      <div
        role="img"
        aria-label={asset.alt}
        className={`relative flex items-end overflow-hidden rounded-lg p-6 ${bg} ${
          aspect === "wide" ? "min-h-[180px] md:min-h-[260px]" : "min-h-[260px]"
        }`}
      >
        <p className="max-w-sm copy-sm text-[color-mix(in_srgb,var(--color-ink-umber)_75%,transparent)]">
          {asset.brief}
        </p>
        <span className="data-tag absolute right-5 top-5 rounded-full bg-[color-mix(in_srgb,var(--color-ink-umber)_12%,transparent)] px-2 py-0.5 text-[color-mix(in_srgb,var(--color-ink-umber)_60%,transparent)]">
          [{asset.tag}]
        </span>
      </div>
      {asset.caption ? (
        <figcaption className="font-card-title mt-3 text-[var(--color-ink-umber)]">
          {asset.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

/**
 * A labelled block of third-party stats (zone/hospital-published pricing,
 * capacity, dates). Every fact carries the same disclosure label so a reader
 * never mistakes it for a Forthasia claim — see Dental/TCM/Destinations §2.
 */
export function FactsBand({
  label,
  facts,
  className = "",
}: {
  label: string;
  facts: string[];
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain-dim)] px-[22px] py-6 ${className}`}
    >
      <p className="eyebrow text-[var(--color-bronze)]">{label}</p>
      <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
        {facts.map((f) => (
          <li key={f} className="flex gap-2 copy-sm text-[var(--color-ink-soft)]">
            <span aria-hidden className="text-[var(--color-olympic-gold)]">
              —
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Pathway-specific mailto CTA (V-11 §3) — a short prompt followed by a
 * clickable mailto: link, styled as a pill button per the "Send As" /
 * accessibility protocol (real <a href="mailto:"> links, not plain text).
 */
export function EmailCTA({
  body,
  email,
  className = "",
}: {
  body: ReactNode;
  email: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-[color-mix(in_srgb,var(--color-olympic-gold)_45%,transparent)] bg-[color-mix(in_srgb,var(--color-olympic-gold)_8%,transparent)] px-[22px] py-6 ${className}`}
    >
      <p className="max-w-2xl copy-sm text-[var(--color-ink-soft)]">{body}</p>
      <a
        href={`mailto:${email}`}
        className="btn-label mt-4 inline-flex h-11 items-center justify-center whitespace-nowrap rounded-full bg-[var(--color-ink-umber)] px-6 text-[var(--color-porcelain)] transition-colors hover:bg-[var(--color-ionian)]"
      >
        {email}
      </a>
    </div>
  );
}

export function Callout({
  tone = "gold",
  title,
  children,
  className = "",
}: {
  tone?: "gold" | "olive" | "terracotta" | "ionian";
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  const tones: Record<string, string> = {
    gold: "border-[var(--color-olympic-gold)] bg-[color-mix(in_srgb,var(--color-olympic-gold)_10%,transparent)]",
    olive: "border-[var(--color-olive)] bg-[color-mix(in_srgb,var(--color-olive)_12%,transparent)]",
    terracotta:
      "border-[var(--color-terracotta)] bg-[color-mix(in_srgb,var(--color-terracotta)_10%,transparent)]",
    ionian:
      "border-[var(--color-ionian)] bg-[color-mix(in_srgb,var(--color-ionian)_8%,transparent)]",
  };
  return (
    <div className={`rounded-lg border-l-2 ${tones[tone]} p-5 ${className}`}>
      {title ? (
        <p className="eyebrow mb-2 text-[var(--color-ink-umber)]">{title}</p>
      ) : null}
      <div className="text-[0.95rem] text-[var(--color-ink-soft)]">{children}</div>
    </div>
  );
}

export function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] p-6">
      <p className="font-monument text-[1.875rem] text-[var(--color-ionian)]">{value}</p>
      <p className="mt-2 copy-sm text-[var(--color-ink-soft)]">{label}</p>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  onDark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  onDark?: boolean;
}) {
  return (
    <header className="max-w-2xl">
      {eyebrow ? (
        <p
          className={`eyebrow ${
            onDark ? "text-[color-mix(in_srgb,var(--color-olympic-gold)_92%,white)]" : ""
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-monument text-h2 mt-3 text-balance ${
          onDark ? "text-[var(--color-porcelain)]" : "text-[var(--color-ink-umber)]"
        }`}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={`text-lede mt-5 ${
            onDark
              ? "text-[color-mix(in_srgb,var(--color-porcelain)_82%,transparent)]"
              : "text-[var(--color-ink-soft)]"
          }`}
        >
          {lede}
        </p>
      ) : null}
    </header>
  );
}
