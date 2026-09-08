import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import {
  Callout,
  CTAButton,
  EmailCTA,
  ImageSlot,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/ui";

const matchingRules = [
  {
    lead: "The condition leads.",
    body: "Matching begins with your diagnosis and records — never with a commission, a contract, or a convenience.",
  },
  {
    lead: "Capability over reputation.",
    body: "We verify the specific pathway you need — case volumes, specialist presence, translation quality, emergency readiness — not a facility's general prestige.",
  },
  {
    lead: "Verification before introduction.",
    body: "No facility appears in any proposal until TEKMERIS GLOBAL has completed an on-site verification cycle for that pathway.",
  },
  {
    lead: "Independence is funded by us.",
    body: "We pay a flat verification fee per facility, per cycle. Hospitals pay nothing — not to be listed, not to be verified, not to be matched.",
  },
  {
    lead: "Re-verified on cycle.",
    body: "Verification is a status with a date, not a permanent badge. An expired cycle removes a facility from matching automatically.",
  },
];

export const metadata: Metadata = {
  title: "The Forthasia Standard",
  description:
    "We Don't Refer. We Verify. We engage TEKMERIS GLOBAL, an independent verification partner, for on-site audits of every hospital, healthcare centre, medi-spa and medical-device programme before it reaches your proposal.",
};

const pillars = [
  {
    tag: "TEKMERIS GLOBAL · 01",
    title: "Independent facility audit, on the ground",
    body: "Before a partner facility appears in any proposal, a TEKMERIS GLOBAL inspector is physically on site — not reviewing a brochure. Accreditation and licensing confirmed at source, case volumes for the relevant pathway, complication and readmission data where available, and the presence of English-language medical translation.",
  },
  {
    tag: "TEKMERIS GLOBAL · 02",
    title: "QC/QA standards, applied in person",
    body: "Every verification is conducted against international QC/QA standards, on site and in person — infection control, emergency readiness, equipment currency, and the quality of English-language coordination at the door. A PDF certificate is not evidence. Eyes on the ground are evidence.",
  },
  {
    tag: "TEKMERIS GLOBAL · 03",
    title: "Credential verification, not credential display",
    body: "We confirm registrations and affiliations directly with the issuing bodies. We do not publish a wall of framed certificates. The standard is verified by outcomes, not by frames.",
  },
  {
    tag: "TEKMERIS GLOBAL · 04",
    title: "Custody of the record",
    body: "Every document you share is held in the HIIC Vault under client-side AES-256-GCM encryption. Every access, edit, and export is written to an immutable audit log. No protected health information moves by email, WeChat, or WhatsApp.",
  },
  {
    tag: "TEKMERIS GLOBAL · 05",
    title: "Consent-gated communication",
    body: "Family updates, physician forwarding, and third-party disclosures happen only against explicit, logged consent. You decide who sees what, and when.",
  },
];

export default function StandardPage() {
  return (
    <>
      <PageHero
        eyebrow="The Forthasia Standard"
        title="We Don't Refer. We Verify."
        lede="Most facilitators are paid to make introductions. Our value is the audit that happens before any introduction is made."
      >
        <CTAButton href="/consultation">Request a verification review</CTAButton>
      </PageHero>

      {/* Dark ethos band — two lines */}
      <Section tone="ink">
        <div className="mx-auto grid max-w-3xl gap-8 text-center sm:grid-cols-2 sm:text-left">
          <div>
            <p className="font-monument text-xl text-[var(--color-porcelain)]">
              We don&rsquo;t book journeys. We steward outcomes.
            </p>
            <p className="data-tag mt-3 text-[color-mix(in_srgb,var(--color-olympic-gold)_92%,white)]">
              — Concierge Ethos
            </p>
          </div>
          <div>
            <p className="font-monument text-xl text-[var(--color-porcelain)]">
              We verify what others take on trust.
            </p>
            <p className="data-tag mt-3 text-[color-mix(in_srgb,var(--color-olympic-gold)_92%,white)]">
              — TEKMERIS GLOBAL, our verification partner
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What TEKMERIS GLOBAL covers"
          title="Five checks, applied the same way every time"
          lede="TEKMERIS GLOBAL is the Spartan half of the philosophy made operational — the independent partner we engage to verify every hospital, healthcare centre, medi-spa and medical-device programme before it reaches your proposal. Verified on site, on the ground, in person. Tested until the structure holds under load."
        />
        <p className="mt-4 max-w-2xl text-xs leading-relaxed text-[var(--color-bronze)]">
          Verification covers licensing, facility standards, and compliance
          processes as at the audit date; it is not a guarantee of individual
          clinical outcomes.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <Reveal key={p.tag}>
              <div className="h-full rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-6">
                <span className="data-tag text-[var(--color-olympic-gold)]">
                  {p.tag}
                </span>
                <p className="font-card-title mt-2 text-[var(--color-ink-umber)]">
                  {p.title}
                </p>
                <p className="mt-3 text-sm text-[var(--color-ink-soft)]">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How hospitals are chosen & matched — the "how" (V-13 §2). */}
      <Section tone="dim">
        <SectionHeading title="How Hospitals Are Chosen & Matched" />
        <ol className="mt-8 space-y-5">
          {matchingRules.map((r, i) => (
            <Reveal as="li" key={r.lead}>
              <div className="flex gap-4 rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-5">
                <span className="data-tag shrink-0 text-[var(--color-olympic-gold)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-[var(--color-ink-soft)]">
                  <span className="font-medium text-[var(--color-ink-umber)]">
                    {r.lead}
                  </span>{" "}
                  {r.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
        <p className="mt-6 max-w-2xl text-sm text-[var(--color-ink-soft)]">
          Why we verify — the philosophy behind the standard — lives on our{" "}
          <Link
            href="/philosophy"
            className="text-[var(--color-ionian)] underline decoration-[var(--color-olympic-gold)] decoration-2 underline-offset-4 hover:text-[var(--color-ink-umber)]"
          >
            Philosophy page
          </Link>
          .
        </p>
      </Section>

      <Section>
        <ImageSlot
          tone="cool"
          asset={{
            tag: "STOCK",
            brief:
              "A hospital accreditation-certificate wall or a clean, empty clinical corridor — institutional, no faces.",
            alt: "Hospital accreditation certificates on a wall",
            caption: "We don't refer. We verify.",
          }}
        />
      </Section>

      {/* Independence band — directly under the cards */}
      <Section tone="ink">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-[color-mix(in_srgb,var(--color-olympic-gold)_92%,white)]">
            Independence Is The Product
          </p>
          <p className="mt-4 text-[var(--color-porcelain)]">
            TEKMERIS GLOBAL verifies every hospital, healthcare centre and
            clinic the same way: on site, against QC/QA standards, for one
            client — us. A green verification cannot be purchased; it is
            earned by passing the audit.
          </p>
        </div>
      </Section>

      <Section tone="dim">
        <div className="grid gap-8 lg:grid-cols-2">
          <Callout tone="olive" title="What a green verification means">
            A facility has passed the TEKMERIS GLOBAL audit for your specific
            pathway, its invitation letter is authentic, and your travel
            architecture is built around confirmed capacity — not a brochure.
          </Callout>
          <Callout tone="terracotta" title="What we will tell you plainly">
            If a pathway is not viable, or a facility does not meet the standard,
            we say so — before you have booked a flight. Evidence over
            adjectives.
          </Callout>
        </div>

        <EmailCTA
          className="mt-8"
          email="partners@forthasiahealth.com"
          body="Are you a hospital, healthcare centre or medi-spa seeking to join the Forthasia network? Every facility is admitted by independent audit only — no facility pays to be listed, verified, or matched."
        />
      </Section>

      {/* Foot of page */}
      <Section>
        <div className="flex justify-center">
          <CTAButton href="/journey" variant="outline">
            See the 4-phase journey
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
