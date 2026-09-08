import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Callout, PageHero, Section, SectionHeading } from "@/components/ui";
import { treatments } from "@/content/treatments";
import { FACILITATOR_DISCLAIMER, ORG_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Treatments We Facilitate — Verified Pathways Across China & Asia",
  description:
    "Verified treatment pathways Forthasia Health facilitates: oncology, orthopaedics, dental, regenerative medicine, executive screening and traditional Chinese medicine — routed through Hainan's Boao Lecheng zone and mainland China. We facilitate; physicians decide.",
  alternates: { canonical: `${SITE_URL}/treatments` },
};

const summary: Record<string, string> = {
  oncology: "BNCT, zone-approved targeted therapy, and second opinions in Haikou, Shanghai and Beijing.",
  orthopaedics: "Hip and knee replacement in weeks, not years — imported implants, coast-side recovery.",
  dental: "Implants through full-mouth rehabilitation, sequenced across one or two visits.",
  regenerative: "Stem-cell and peptide therapy — lawful only inside the Boao Lecheng zone, physician-supervised.",
  "executive-screening": "Full-body screening in a day, read by physicians, report to your own doctor.",
  tcm: "Acupuncture, herbal medicine and rehabilitation at accredited TCM hospitals in Hainan.",
};

export default function TreatmentsHubPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Treatment pathways",
    itemListElement: treatments.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.h1,
      url: `${SITE_URL}/treatments/${t.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={itemList} />

      <PageHero
        eyebrow="Treatments"
        title="Treatments we facilitate, verified before we recommend"
        lede="Forthasia Health matches your diagnosis to a verified department, then coordinates records, visas, translation and recovery around it. Every pathway below is routed through Hainan's Boao Lecheng zone or mainland China, and audited on the ground by TEKMERIS GLOBAL. We facilitate; treating physicians decide all care."
      />

      <Section>
        <SectionHeading eyebrow="Pathways" title="One intent, one verified route" />
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {treatments.map((t) => (
            <Reveal as="li" key={t.slug}>
              <Link
                href={`/treatments/${t.slug}`}
                className="flex h-full flex-col rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-6 transition-colors hover:border-[var(--color-olympic-gold)]"
              >
                <p className="font-card-title text-[var(--color-ink-umber)]">
                  {t.h1}
                </p>
                <p className="mt-2 copy-sm text-[var(--color-ink-soft)]">
                  {summary[t.slug]}
                </p>
                <span
                  aria-hidden
                  className="mt-4 text-[var(--color-olympic-gold)]"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="dim">
        <Callout tone="ionian" title="On regulated and non-approved therapies">
          Regenerative and peptide therapies, and any treatment not yet approved
          nationally, are facilitated only with licensed institutions inside
          Hainan&rsquo;s Boao Lecheng pilot zone, under physician supervision.{" "}
          {ORG_NAME} does not diagnose, treat, prescribe, or sell any therapy.
        </Callout>
        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-[var(--color-bronze)]">
          {FACILITATOR_DISCLAIMER}
        </p>
      </Section>
    </>
  );
}
