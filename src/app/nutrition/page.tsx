import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import {
  Callout,
  CTAButton,
  ImageSlot,
  PageHero,
  PullQuote,
  Section,
  SectionHeading,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Nutrition & DNA",
  description:
    "The Neurogenomics Protocol, powered by The Cook Doctor® methodology. DNA-based eating plans and The Longevity Plate — a premium concierge add-on.",
};

const offerings = [
  {
    title: "DNA-Based Eating Plans",
    body: "Pre- and post-treatment neurogenomic profiling to support surgical outcomes, help manage inflammation, and support tissue repair. Built from your genetics, not a generic template.",
  },
  {
    title: "The Longevity Plate",
    body: "Mediterranean longevity fats combined with Eastern herbal tonics and peptide-supportive macronutrient design — a physician-guided plate, not a diet.",
  },
];

export default function NutritionPage() {
  return (
    <>
      <PageHero
        eyebrow="Nutrition & DNA · Neurogenomics"
        title="The Neurogenomics Protocol"
        lede="Powered by The Cook Doctor® methodology. We do not treat nutrition as an afterthought — it is the foundation of cellular recovery."
      />

      <Section>
        <ImageSlot
          asset={{
            tag: "STOCK",
            brief: "A market kitchen — fresh produce, warm and unstaged. No faces.",
            alt: "A market kitchen with fresh produce",
            caption: "Let food be thy medicine.",
          }}
        />
      </Section>

      <Section tone="dim">
        <PullQuote cite="Hippocrates">Let food be thy medicine.</PullQuote>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Offerings"
          title="Two programmes, one genome"
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {offerings.map((o) => (
            <Reveal key={o.title}>
              <div className="h-full rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-6">
                <p className="font-card-title text-[var(--color-ink-umber)]">
                  {o.title}
                </p>
                <p className="mt-3 text-sm text-[var(--color-ink-soft)]">
                  {o.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dim">
        <ImageSlot
          tone="cool"
          asset={{
            tag: "STOCK",
            brief: "DNA-helix line-art overlaid on a spread of vegetables.",
            alt: "DNA helix line-art over vegetables",
            caption: "The blueprint meets the plate.",
          }}
        />
      </Section>

      <Section>
        <Callout tone="gold" title="Positioning">
          A premium concierge add-on for medical-tourism clients and long-term
          longevity members. Nutritional guidance supports care; it does not
          replace the treating physician&rsquo;s plan.
        </Callout>
        <div className="mt-8">
          <CTAButton href="/consultation" variant="outline">
            Ask about adding the protocol
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
