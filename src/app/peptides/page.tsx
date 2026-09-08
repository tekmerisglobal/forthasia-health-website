import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { FaqBlock, type Faq } from "@/components/seo/FaqBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { Callout, PageHero, Section, SectionHeading } from "@/components/ui";
import { ORG_NAME, SITE_URL } from "@/lib/site";

const URL = `${SITE_URL}/peptides`;

export const metadata: Metadata = {
  title: "Peptide Therapy in China — Legal, Physician-Supervised, Zone-Based",
  description:
    "What peptide therapy is legal in China, where (Hainan's Boao Lecheng zone), and how physician-supervised protocols work. Forthasia Health facilitates and verifies the institution — we never sell, ship, or prescribe peptides.",
  keywords: [
    "peptide therapy China",
    "peptides Hainan legal",
    "peptide therapy Boao Lecheng",
    "is peptide therapy legal in China",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "Peptide Therapy in China — Legal, Physician-Supervised, Zone-Based",
    description:
      "Where peptide therapy is lawful in China and how supervised protocols work. Forthasia Health facilitates; we never sell or prescribe peptides.",
    url: URL,
    type: "article",
    siteName: "Forthasia Health",
  },
};

const COMPLIANCE_BLOCK =
  "Forthasia Health does not sell, ship, or prescribe peptides. Peptide and regenerative protocols are facilitated only within licensed facilities, under physician supervision, and only where lawful at the destination — in China, within the Boao Lecheng pilot zone. Nothing on this page is medical advice or a dosing recommendation.";

const blocks = [
  {
    h2: "What peptide therapy is",
    body: "Therapeutic peptides are short chains of amino acids used, under medical supervision, for defined clinical indications. Some are long-established and widely approved; many marketed direct-to-consumer are not approved for therapeutic use in most countries. The distinction that matters is regulatory status in the place you are treated.",
  },
  {
    h2: "Where it is lawful in China",
    body: "In China, selected peptide and regenerative treatments that are not yet nationally approved (non-NMPA-approved) are lawfully available only inside Hainan's Boao Lecheng International Medical Tourism Pilot Zone — the designated pathway for early access to selected therapies ahead of national registration — and only through a licensed medical institution in the zone. Outside the zone, care follows China's national formulary.",
  },
  {
    h2: "How a protocol is governed",
    body: "A treating physician in the licensed facility assesses eligibility, prescribes, and administers any therapy. There is no self-administration pathway and no mail-order route. If a peptide is not lawfully available for your indication, we say so.",
  },
  {
    h2: "What Forthasia Health does",
    body: "We verify the institution, translate and handle your records, arrange invitation letters, visas, stewards and in-person medical translation, and coordinate recovery. We are a facilitator and care-coordinator — never the prescriber, the pharmacy, or the clinical decision-maker.",
  },
];

const faqs: Faq[] = [
  {
    q: "Is peptide therapy legal in China?",
    a: "Certain non-NMPA-approved peptide treatments are lawful in China only within Hainan's Boao Lecheng International Medical Tourism Pilot Zone, and only when prescribed and administered by a licensed medical institution in the zone under physician supervision. Nationally approved peptides follow China's standard rules. We verify which treatments and institutions that covers before you travel.",
  },
  {
    q: "Can I buy peptides from Forthasia Health or have them shipped?",
    a: "No. We never sell, ship, compound, or prescribe peptides or cell products. Doing so would be an unlicensed pharmaceutical activity. We facilitate access to licensed facilities and verify them; the therapy itself is the treating physician's responsibility.",
  },
  {
    q: "Do you recommend doses or specific peptides?",
    a: "No. Nothing we publish is medical advice or a dosing recommendation. Eligibility, selection and dosing are decided by the treating physician after clinical assessment.",
  },
  {
    q: "How is the Boao Lecheng zone different from the rest of China?",
    a: "The zone is where foreign-approved and selected non-approved drugs and devices can be used lawfully before national registration, with a real-world-data pathway that can support full China approval. It is the reason a supervised peptide or regenerative protocol can be lawful in Hainan when it would not be elsewhere in China.",
  },
];

export default function PeptidesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Peptide Therapy in China — Legal, Physician-Supervised, Zone-Based",
    description:
      "Where peptide therapy is lawful in China and how supervised protocols work.",
    url: URL,
    lastReviewed: "2026-09-08",
    reviewedBy: { "@type": "Organization", name: ORG_NAME, url: SITE_URL },
    about: { "@type": "MedicalTherapy", name: "Peptide therapy" },
  };

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        eyebrow="Peptides"
        title="Peptide therapy in China: legal, supervised, zone-based"
        lede="If you are seeking peptide therapy in China, Hainan's Boao Lecheng zone is the route for accessing certain non-NMPA-approved peptide treatments — through a licensed medical institution in the zone, under a doctor's supervision. Forthasia Health verifies the institution and coordinates the journey. We never sell, ship, or prescribe peptides."
      />

      <Section>
        <Callout tone="terracotta" title="Read this first">
          {COMPLIANCE_BLOCK}
        </Callout>
        <p className="mt-4 copy-sm text-[var(--color-ink-soft)]">
          For the regulatory background — national rules, the Hainan pilot-zone
          exception, and the limits on personal importation — see the{" "}
          <Link
            href="/peptides/legal"
            className="text-[var(--color-ionian)] underline decoration-[var(--color-olympic-gold)] decoration-2 underline-offset-4 hover:text-[var(--color-ink-umber)]"
          >
            Peptide Therapy Legal Notice
          </Link>
          .
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="The essentials" title="Education, not commerce" />
        <div className="mt-8 space-y-8">
          {blocks.map((b) => (
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
      </Section>

      <Section tone="dim">
        <FaqBlock faqs={faqs} />
      </Section>

      <Section>
        <SectionHeading eyebrow="Keep reading" title="Related pathways" />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            ["Regenerative medicine & peptide therapy — the treatment pathway", "/treatments/regenerative"],
            ["Hainan & Boao Lecheng — where it runs", "/destinations/hainan"],
            ["How every facility is verified — The Standard", "/standard"],
            ["Longevity protocols, diagnostics-first", "/wellness/longevity"],
          ].map(([label, href]) => (
            <li key={href}>
              <Link
                href={href}
                className="flex items-center justify-between gap-3 rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-4 copy-sm text-[var(--color-ink-soft)] transition-colors hover:border-[var(--color-olympic-gold)] hover:text-[var(--color-ionian)]"
              >
                {label}
                <span aria-hidden className="text-[var(--color-olympic-gold)]">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-[var(--color-bronze)]">
          Last reviewed 8 September 2026. {COMPLIANCE_BLOCK}
        </p>
      </Section>
    </>
  );
}
