import { JsonLd } from "./JsonLd";

export type Faq = { q: string; a: string };

/**
 * Accessible FAQ accordion + FAQPage JSON-LD. Drop inside a <Section>.
 * The rendered copy and the schema stay in sync from one `faqs` array.
 */
export function FaqBlock({
  faqs,
  heading = "Questions patients actually ask",
}: {
  faqs: Faq[];
  heading?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div>
      <h2 className="font-monument text-h2 text-balance text-[var(--color-ink-umber)]">
        {heading}
      </h2>
      <div className="mt-8 divide-y divide-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] border-y border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)]">
        {faqs.map((f) => (
          <details key={f.q} className="group py-4">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-card-title text-[var(--color-ink-umber)] [&::-webkit-details-marker]:hidden">
              {f.q}
              <span
                aria-hidden
                className="mt-1 shrink-0 text-[var(--color-olympic-gold)] transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl copy-sm text-[var(--color-ink-soft)]">
              {f.a}
            </p>
          </details>
        ))}
      </div>
      <JsonLd data={schema} />
    </div>
  );
}
