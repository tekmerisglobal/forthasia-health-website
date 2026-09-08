import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Callout, CTAButton, PageHero, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Recovery & Tourism",
  description:
    "Heal in the morning. Hainan in the afternoon. Curated recovery routes built around China's Health Island · Happy City program.",
};

const routes = [
  {
    title: "Screening & Sea",
    body: "An executive check-up, paired with the bays of Sanya.",
  },
  {
    title: "TCM Rejuvenation",
    body: "A Sanya TCM plan, paired with the hot springs at Guantang or Qixian.",
  },
  {
    title: "Chronic Recuperation",
    body: "A 14-day rehabilitation plan, paired with the rainforest air of Jianfengling.",
  },
  {
    title: "Dental & Duty-Free",
    body: "A dental rehabilitation plan, paired with Haitang Bay.",
  },
  {
    title: "Culture & Calm",
    body: "Nanshan Temple and the 108-metre Guanyin.",
  },
];

const activities = [
  "Beaches & bays",
  "Golf — Mission Hills Haikou",
  "Hot springs",
  "Tropical rainforest walks",
  "Snorkelling — Wuzhizhou",
  "The Hainanese table — chicken rice, seafood, coconut",
  "Duty-free shopping",
];

export default function RecoveryPage() {
  return (
    <>
      <PageHero
        eyebrow="Recovery & Tourism"
        title="Heal in the Morning. Hainan in the Afternoon."
        lede="China's 'Health Island · Happy City' program (January 2025) published eight integrated medical-tourism routes. We curate your recovery around them."
      >
        <CTAButton href="/consultation">Ask about a curated route</CTAButton>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Curated routes" title="Five pairings we build around" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {routes.map((r) => (
            <Reveal key={r.title}>
              <div className="h-full rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-6">
                <p className="font-card-title text-[var(--color-ink-umber)]">{r.title}</p>
                <p className="mt-3 copy-sm text-[var(--color-ink-soft)]">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dim">
        <SectionHeading eyebrow="Recovery-friendly" title="What fills the afternoons" />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((a) => (
            <li
              key={a}
              className="rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-4 copy-sm text-[var(--color-ink-soft)]"
            >
              {a}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <Callout tone="ionian" title="Scope">
          Tourism activities are advisory and arranged as consulting; medical
          treatment decisions rest with the hospital.
        </Callout>
        <div className="mt-8">
          <CTAButton href="/journey" variant="outline">
            See the 4-phase journey
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
