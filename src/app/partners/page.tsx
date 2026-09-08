import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import {
  Callout,
  EmailCTA,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Affiliations & Partners",
  description:
    "Stewards of Health, together. FORTHASIA HEALTH builds verified affiliations across hospitals, clinics, medi-spas, retreats, laboratories, insurers and hospitality partners. Entry is by verification, never by payment.",
};

const environments = [
  "Hospitals and dental groups",
  "Longevity and integrative clinics",
  "Medi-spas and aesthetic medicine",
  "Retreats, resorts and recovery facilities",
  "Diagnostic laboratories",
  "Insurers and migration agents",
  "Hospitality and transport partners",
];

const terms = [
  {
    lead: "You keep full clinical authority.",
    body: "We bring coordinated, documented international patients. Diagnosis, treatment and prescribing remain entirely yours — FORTHASIA HEALTH does not practise medicine.",
  },
  {
    lead: "Entry is by verification, never by payment.",
    body: "TEKMERIS GLOBAL — the independent partner we engage — audits every facility on site, against QC/QA standards, before it reaches a patient's proposal. No paid listings. No commissions for placement.",
  },
  {
    lead: "Re-verified on cycle.",
    body: "Affiliation is a status with a date. An expired verification cycle removes a facility from matching until it is re-audited.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Affiliations"
        title="Stewards of Health, Together."
        lede="We build verified affiliations across every environment that touches a healthier life. You keep full clinical authority; we bring coordinated, documented international patients and carry the logistics, translation and records custody around them."
      />

      <Section>
        <SectionHeading
          eyebrow="The network"
          title="Every environment that touches a healthier life"
          lede="One country, many pathways — matched to the patient in front of us, not to a commission."
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {environments.map((e) => (
            <li
              key={e}
              className="rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-4 copy-sm text-[var(--color-ink-soft)]"
            >
              {e}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="dim">
        <SectionHeading
          eyebrow="How affiliation works"
          title="TEKMERIS GLOBAL audits. We facilitate."
        />
        <ol className="mt-8 space-y-5">
          {terms.map((t, i) => (
            <Reveal as="li" key={t.lead}>
              <div className="flex gap-4 rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-5">
                <span className="data-tag shrink-0 text-[var(--color-olympic-gold)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="copy-sm text-[var(--color-ink-soft)]">
                  <span className="font-medium text-[var(--color-ink-umber)]">
                    {t.lead}
                  </span>{" "}
                  {t.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
        <p className="mt-6 max-w-2xl copy-sm text-[var(--color-ink-soft)]">
          The full verification method — the five checks, the independence model
          — lives on{" "}
          <Link
            href="/standard"
            className="text-[var(--color-ionian)] underline decoration-[var(--color-olympic-gold)] decoration-2 underline-offset-4 hover:text-[var(--color-ink-umber)]"
          >
            The Standard
          </Link>
          .
        </p>
      </Section>

      <Section>
        <Callout tone="ionian" title="For regulated clinical services">
          Regenerative and peptide programmes, and any therapy not yet approved
          nationally, are facilitated only with licensed institutions inside
          Hainan&rsquo;s Boao Lecheng pilot zone, where such treatments are
          lawfully available under physician supervision. FORTHASIA HEALTH does
          not diagnose, treat or prescribe.
        </Callout>

        <EmailCTA
          className="mt-8"
          email="partners@forthasiahealth.com"
          body="Apply for affiliation. Send your corporate credentials and a short overview of your facility, scope and pathways. We reply with the verification requirements for your category — no facility pays to be listed, verified, or matched."
        />
      </Section>
    </>
  );
}
