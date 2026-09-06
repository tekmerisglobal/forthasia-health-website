import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import {
  Callout,
  CTAButton,
  ImageSlot,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "The 4-Phase Journey",
  description:
    "Clinical matching and diagnostic confirmation, verification and travel architecture, on-ground stewardship, and the home continuum.",
};

const phases = [
  {
    n: "01",
    title: "Clinical Matching & Diagnostic Confirmation",
    lead: "Hainan offers 30-day visa-free entry for 86 countries — enough not just for treatment, but for a full diagnostic confirmation trip. Arrive, undergo advanced imaging and specialist boards, and receive a definitive second opinion without relying solely on a home-country diagnosis.",
    steps: [
      "Records uploaded to the HIIC Vault",
      "Professional medical translation",
      "Specialist board review",
      "Viability & cost range returned in 5–7 days",
    ],
  },
  {
    n: "02",
    title: "Verification & Travel Architecture",
    lead: "Nothing is booked until the facility is verified.",
    steps: [
      "Independent facility audit to the TEKMERIS GLOBAL standard",
      "Hospital invitation letter generation",
      "Flight and accommodation logistics",
    ],
  },
  {
    n: "03",
    title: "On-Ground Stewardship",
    lead: "A person, not a hotline.",
    steps: [
      "A dedicated steward for the duration of your stay",
      "In-person medical translation at every consultation",
      "Consent-gated family updates",
    ],
  },
  {
    n: "04",
    title: "Home Continuum",
    lead: "The journey ends with a documented handover to your own physician.",
    steps: [
      "Translated discharge summary",
      "Records forwarded to your home physician",
      "DNA-based post-operative nutrition plan",
      "Follow-up check-ins at 1 week, 1 month, and 3 months",
    ],
  },
];

export default function JourneyPage() {
  return (
    <>
      <PageHero
        eyebrow="The Patient Journey"
        title="The 4-Phase Journey"
        lede="A definitive second opinion, a verified facility, a steward on the ground, and a documented return home."
      >
        <CTAButton href="/consultation">Begin secure intake</CTAButton>
      </PageHero>

      <Section>
        <ol className="space-y-6">
          {phases.map((p, i) => (
            <Reveal as="li" key={p.n}>
              <div className="rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] p-6 md:p-8">
                {/* TODO(imagery manifest — Journey): replace numerals with line icons per tile. */}
                <div className="flex flex-wrap items-baseline gap-4">
                  <span className="font-monument text-3xl text-[var(--color-olympic-gold)]">
                    {p.n}
                  </span>
                  <h2 className="font-monument text-xl text-[var(--color-ink-umber)] md:text-2xl">
                    {p.title}
                  </h2>
                </div>
                <p className="mt-4 max-w-2xl text-[var(--color-ink-soft)]">
                  {p.lead}
                </p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {p.steps.map((s) => (
                    <li
                      key={s}
                      className="flex gap-2 text-sm text-[var(--color-ink-soft)]"
                    >
                      <span aria-hidden className="text-[var(--color-olive)]">
                        ✓
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                {i === 0 ? (
                  <div className="mt-6">
                    <Callout tone="gold" title="Crucial selling point">
                      The visa-free window is designed to be enough for a
                      state-of-the-art diagnostic confirmation trip on its own —
                      before any treatment decision is made.
                    </Callout>
                  </div>
                ) : null}
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="dim">
        <ImageSlot
          tone="cool"
          asset={{
            tag: "STOCK",
            brief: "Aircraft window, coastline visible below.",
            alt: "View from an aircraft window over the coast",
            caption: "The pilgrimage, stewarded.",
          }}
        />
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            eyebrow="Next"
            title="Confirm your entry route, then start intake"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CTAButton href="/visa-guide" variant="outline">
              Visa & entry guide
            </CTAButton>
            <CTAButton href="/consultation" variant="ghost">
              Begin secure intake →
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
