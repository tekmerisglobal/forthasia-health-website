import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "The Forthasia Standard",
  description:
    "We Don't Refer. We Verify. TEKMERIS GLOBAL is our independent verification engine — on-site facility audits, credential checks, and an immutable record of custody.",
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
    body: "Every verification is conducted against international QC/QA standards — the same discipline as our supply-chain work: chain-of-custody controls, tamper-evident sealing where product is involved, and blind third-party lab testing. A PDF certificate is not evidence. Eyes on the ground are evidence.",
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
              We don&rsquo;t sell product. We sell certainty.
            </p>
            <p className="data-tag mt-3 text-[color-mix(in_srgb,var(--color-olympic-gold)_92%,white)]">
              — TEKMERIS GLOBAL
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What TEKMERIS GLOBAL covers"
          title="Five checks, applied the same way every time"
          lede="TEKMERIS GLOBAL is the Spartan half of the philosophy made operational. The same QC/QA discipline we apply to peptide factories and supply chains is applied here to hospitals and clinics — verified on site, on the ground, in person. Tested until the structure holds under load."
        />
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

      <Section>
        <ImageSlot
          tone="cool"
          asset={{
            tag: "STOCK",
            brief:
              "Macro of a numbered tamper-evident security seal, alongside blurred laboratory vials.",
            alt: "Tamper-evident security seal; laboratory vials",
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
            TEKMERIS GLOBAL verifies hospitals, clinics and supply chains the
            same way: on site, against QC/QA standards, for the client alone.
            A green verification cannot be purchased — it can only be earned
            by passing the audit.
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
          body="Are you an overseas buyer requiring independent, on-the-ground QA/QC verification of a Chinese medical facility or supply chain? Engage our audit team."
        />
      </Section>

      {/* Cross-link — foot of page */}
      <Section>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-[var(--color-ink-soft)]">
            The same standard verifies the supply chain →{" "}
            <span
              aria-disabled="true"
              className="cursor-not-allowed text-[var(--color-bronze)] underline decoration-dotted underline-offset-4"
            >
              Read the TEKMERIS GLOBAL standard
            </span>{" "}
            <span className="data-tag text-[var(--color-bronze)]">
              (link activates when the TEKMERIS GLOBAL site is live)
            </span>
          </p>
          <CTAButton href="/journey" variant="outline">
            See the 4-phase journey
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
