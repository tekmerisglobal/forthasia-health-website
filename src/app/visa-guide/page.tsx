import type { Metadata } from "next";
import { VisaChecker } from "@/components/VisaChecker";
import {
  Callout,
  ImageSlot,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Visa & Entry Guide",
  description:
    "Check your eligibility for Hainan's 30-day visa-free medical entry, or request an official Hospital Invitation Letter. We advise and coordinate; embassies decide.",
};

export default function VisaGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Visa & Entry Guide"
        title="Can you enter Hainan visa-free?"
        lede="Answer three questions. The checker returns either your visa-free eligibility or the invitation-letter pathway."
      />

      {/* Addendum §4 — verbatim */}
      <Section>
        <p className="max-w-3xl text-[var(--color-ink-soft)]">
          On 1 December 2025, the Hainan Free Trade Port Tourism Regulations
          took effect — writing visa-free medical entry into law for citizens
          of 86 countries, with &ldquo;medical treatment&rdquo; an explicitly
          permitted purpose, up to 30 days, entering Hainan directly.
        </p>
      </Section>

      <Section tone="dim">
        <SectionHeading
          eyebrow="Interactive checker"
          title="Nationality, purpose, entry route"
        />
        <div className="mt-8">
          <VisaChecker />
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Callout tone="olive" title="Result A — Eligible (green)">
            You qualify for the 30-Day Visa-Free Medical Entry. Sufficient for
            diagnostic confirmation and many treatment pathways. You must enter
            Hainan directly.
          </Callout>
          <Callout tone="terracotta" title="Result B — Standard Visa (yellow)">
            Your nationality requires a standard L-Visa. We provide the official
            Hospital Invitation Letter and handle the paperwork.
          </Callout>
        </div>
        <div className="mt-8">
          <Callout tone="ionian" title="The boundary">
            We advise and coordinate; embassies decide. The 30-day visa-free
            period is typically sufficient for diagnostic confirmation and many
            treatment pathways; extended stays may require additional visa
            arrangements. The country list here is indicative and is reconciled
            against the current official Hainan programme before your travel is
            confirmed.
          </Callout>
        </div>
      </Section>

      {/* Optional footer strip — imagery manifest keeps this page institutional. */}
      <Section tone="dim">
        <ImageSlot
          aspect="wide"
          asset={{
            tag: "OWN",
            brief: "Hainan coastline — quiet, no overlaid text.",
            alt: "Hainan coastline",
          }}
        />
      </Section>
    </>
  );
}
