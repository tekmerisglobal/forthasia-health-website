import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PageHero, Section, SectionHeading } from "@/components/ui";
import { FACILITATOR_DISCLAIMER, ORG_NAME, SITE_URL } from "@/lib/site";
import { HUB_LABEL, type Hub, type PageEntry } from "@/content/types";
import { FaqBlock } from "./FaqBlock";
import { JsonLd } from "./JsonLd";

type RelatedLink = { label: string; href: string };

/**
 * Shared renderer for every SEO spoke page (/treatments, /wellness,
 * /destinations). One `PageEntry` drives the copy, the FAQ and the schema.
 */
export function SpokePage({
  hub,
  entry,
  schemaType,
  related,
}: {
  hub: Hub;
  entry: PageEntry;
  /** schema.org type for the page's primary subject */
  schemaType: string;
  /** hub-and-spoke internal links shown at the foot of the page */
  related: RelatedLink[];
}) {
  const hubHref = `/${hub}`;
  const url = `${SITE_URL}${hubHref}/${entry.slug}`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: HUB_LABEL[hub],
        item: `${SITE_URL}${hubHref}`,
      },
      { "@type": "ListItem", position: 3, name: entry.h1, item: url },
    ],
  };

  const page = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: entry.title,
    description: entry.metaDescription,
    url,
    lastReviewed: entry.lastReviewed,
    reviewedBy: { "@type": "Organization", name: ORG_NAME, url: SITE_URL },
    about: { "@type": schemaType, name: entry.h1 },
    isPartOf: { "@type": "WebSite", name: ORG_NAME, url: SITE_URL },
  };

  const reviewed = new Date(entry.lastReviewed).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={page} />

      <PageHero eyebrow={HUB_LABEL[hub]} title={entry.h1} lede={entry.answerFirst}>
        <nav aria-label="Breadcrumb" className="data-tag text-[var(--color-bronze)]">
          <Link href="/" className="hover:text-[var(--color-ionian)]">
            Home
          </Link>
          <span aria-hidden> / </span>
          <Link href={hubHref} className="hover:text-[var(--color-ionian)]">
            {HUB_LABEL[hub]}
          </Link>
          <span aria-hidden> / </span>
          <span className="text-[var(--color-ink-soft)]">{entry.h1}</span>
        </nav>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
          <div className="space-y-8">
            {entry.blocks.map((b) => (
              <Reveal key={b.h2}>
                <h2 className="font-monument text-h3 text-[var(--color-ink-umber)]">
                  {b.h2}
                </h2>
                <p className="mt-3 max-w-2xl text-[var(--color-ink-soft)]">
                  {b.body}
                </p>
              </Reveal>
            ))}
          </div>

          {entry.bullets && entry.bullets.length > 0 ? (
            <ul className="space-y-2.5 rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain-dim)] px-[22px] py-6">
              {entry.bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-2 copy-sm text-[var(--color-ink-soft)]"
                >
                  <span aria-hidden className="text-[var(--color-olympic-gold)]">
                    —
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Section>

      <Section tone="dim">
        <FaqBlock faqs={entry.faqs} />
      </Section>

      <Section>
        <SectionHeading eyebrow="Keep reading" title="Related pathways" />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {related.map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                className="flex items-center justify-between gap-3 rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-4 copy-sm text-[var(--color-ink-soft)] transition-colors hover:border-[var(--color-olympic-gold)] hover:text-[var(--color-ionian)]"
              >
                {r.label}
                <span aria-hidden className="text-[var(--color-olympic-gold)]">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-[var(--color-bronze)]">
          Last reviewed {reviewed}. {FACILITATOR_DISCLAIMER}
        </p>
      </Section>
    </>
  );
}
