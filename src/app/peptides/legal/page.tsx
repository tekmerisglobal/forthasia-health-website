import type { Metadata } from "next";
import Link from "next/link";
import { Callout, PageHero, Section, SectionHeading } from "@/components/ui";
import { ORG_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Peptide Therapy in China — Regulatory Position & Legal Notice",
  description:
    "A plain-language summary of how peptides are regulated in China, the Hainan Boao Lecheng pilot-zone exception, and what it means for individuals. Not legal or medical advice.",
  // Reference / disclaimer page — reachable from the footer and the /peptides
  // page, deliberately kept out of search indexes and the sitemap.
  robots: { index: false, follow: true },
};

const sections = [
  {
    h2: "1. National status — mainland China",
    points: [
      "China's National Medical Products Administration (NMPA) regulates therapeutic peptides — peptide hormones and anabolic agents in particular — as pharmaceuticals. They are not treated as dietary supplements or as unregulated “research chemicals”.",
      "There is no “research-only” loophole for peptides intended for human use. Manufacturing, selling, or administering them outside approved medical or licensed research channels is unlawful.",
      "Retail pharmacies are prohibited from selling peptide hormones.",
      "Import and export of peptide hormones require specific NMPA permits. Customs enforcement is strict, and unauthorised shipments are routinely seized.",
    ],
  },
  {
    h2: "2. The Hainan exception — Boao Lecheng pilot zone",
    points: [
      "Hainan operates under the Hainan Free Trade Port Law, which gives the Boao Lecheng International Medical Tourism Pilot Zone special “pioneering and experimenting” (先行先试) authority for medical policy.",
      "Designated institutions in the zone may import and use drugs and devices approved overseas (for example by the US FDA or the European EMA) that are not yet NMPA-approved, for genuine clinical need.",
      "Hainan provincial policy has extended this to selected imported peptide-hormone and anabolic-agent products under the “specially licensed drugs and devices” (特许药械) framework.",
      "These treatments may be administered only inside licensed medical facilities within the zone. For controlled products such as peptide hormones, customs clears the import only against a valid prescription from an authorised institution in Boao Lecheng.",
    ],
  },
  {
    h2: "3. What this means for individuals",
    points: [
      "No personal importation. Individuals cannot lawfully mail, carry, or personally import unapproved peptides into Hainan or mainland China for personal use.",
      "No “take-home” entitlement. Even where a therapy is lawfully administered in Boao Lecheng, policy generally restricts patients from taking unapproved imported drugs out of the zone.",
      "Cross-border “research peptide” orders — into China or out of it — carry real legal and customs-seizure risk. These supply chains are heavily monitored.",
    ],
  },
];

export default function PeptidesLegalPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal notice"
        title="Peptide therapy in China: the regulatory position"
        lede="A plain-language summary for prospective patients. In short: within China, Hainan's Boao Lecheng pilot zone is the only lawful route for accessing certain non-NMPA-approved peptide treatments, and only through a licensed medical institution in the zone under a doctor's supervision."
      />

      <Section>
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.h2}>
              <h2 className="font-monument text-h3 text-[var(--color-ink-umber)]">
                {s.h2}
              </h2>
              <ul className="mt-4 space-y-3">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 text-[var(--color-ink-soft)]"
                  >
                    <span aria-hidden className="text-[var(--color-olympic-gold)]">
                      —
                    </span>
                    <span className="max-w-2xl">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="dim">
        <SectionHeading eyebrow="Our position" title={`${ORG_NAME} does not touch the supply chain`} />
        <p className="mt-5 max-w-2xl text-[var(--color-ink-soft)]">
          We facilitate access to licensed institutions inside the Boao Lecheng
          zone and verify those institutions. We do not sell, ship, carry,
          compound, or prescribe peptides or cell products, and we do not advise
          on importation. Eligibility, prescribing and administration are matters
          for the treating physician within the licensed facility.
        </p>
        <p className="mt-6 copy-sm text-[var(--color-ink-soft)]">
          Back to{" "}
          <Link
            href="/peptides"
            className="text-[var(--color-ionian)] underline decoration-[var(--color-olympic-gold)] decoration-2 underline-offset-4 hover:text-[var(--color-ink-umber)]"
          >
            Peptide therapy in China
          </Link>
          .
        </p>
      </Section>

      <Section>
        <Callout tone="terracotta" title="This is not legal or medical advice">
          This summary is provided for general information only. It is not legal
          advice, medical advice, or a recommendation to pursue any treatment.
          Regulations in China — and in its special economic zones in particular
          — change frequently. Before making any decision about peptide treatment
          or importation, consult a licensed medical provider in Boao Lecheng and
          a Chinese legal adviser specialising in healthcare compliance. Last
          reviewed 8 September 2026.
        </Callout>
      </Section>
    </>
  );
}
