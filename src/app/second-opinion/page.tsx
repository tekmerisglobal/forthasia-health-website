import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { FaqBlock, type Faq } from "@/components/seo/FaqBlock";
import {
  Callout,
  CTAButton,
  PageHero,
  PriceCard,
  Section,
  SectionHeading,
} from "@/components/ui";

// TODO before launch (README "Known TODOs"): PRICE_USD is a placeholder.
// Confirm the real flat fee and replace every occurrence below.
const PRICE_USD = "[PRICE TBC]";

export const metadata: Metadata = {
  title: "The Verified Second Opinion — A Priced, Guaranteed Read Before You Travel",
  description:
    "A guaranteed specialist board review of your case, returned as a written viability verdict and cost-range estimate in 5–7 days. One flat fee, disclosed upfront — no hospital commission, no obligation to proceed.",
};

const timeline = [
  ["Day 0–1", "Records submitted to the HIIC Vault; the fee is confirmed and the case opened."],
  ["Day 1–2", "Certified medical translation, both directions."],
  ["Day 3–6", "Review by a specialist board at the TEKMERIS GLOBAL-verified hospital matched to your condition."],
  ["Day 5–7", "Your written viability verdict and an itemised cost-range estimate are delivered."],
];

const faqs: Faq[] = [
  {
    q: "Is this the same as the free preliminary consultation?",
    a: "No. The free enquiry on our Consultation page is a screening conversation — our coordination team reviews what you send and, if your case aligns with our facilitation parameters, issues a portal link within 24 hours. The Verified Second Opinion is a paid, guaranteed product: a named specialist board at a verified hospital reviews your case regardless, and you receive a written verdict and cost estimate on a fixed timeline.",
  },
  {
    q: "What happens if my case isn't viable?",
    a: "You keep the written verdict. The fee covers the review itself, not a particular outcome — if the board's answer is no, or conditional, you still have a documented, specialist-reviewed answer to take elsewhere, and no further obligation to us.",
  },
  {
    q: "Who actually reviews my case?",
    a: "A specialist board at a hospital matched to your specific condition, inside our TEKMERIS GLOBAL-verified network — the same verification standard described on The Standard. We do not review cases ourselves; we are facilitators, not clinicians.",
  },
  {
    q: "Is my medical data secure?",
    a: "Records are handled only through the HIIC Vault under client-side AES-256-GCM encryption, with every access, edit and export written to an immutable audit log. Nothing moves by email, WeChat, or WhatsApp.",
  },
  {
    q: "Does the fee go toward treatment if I proceed?",
    a: "Ask your coordinator when your case opens — this is confirmed case by case and we don't want to state a blanket policy here that doesn't hold for every pathway.",
  },
];

export default function SecondOpinionPage() {
  return (
    <>
      <PageHero
        eyebrow="Priced. Flat Fee. Before You Travel."
        title="The Verified Second Opinion"
        lede="Submit your records once. A specialist board at a verified hospital reviews your case and returns a written viability verdict and cost-range estimate in 5–7 days — for one flat fee, disclosed upfront, whether or not you proceed."
      >
        <CTAButton href="#price">See the fee &amp; what's included</CTAButton>
      </PageHero>

      <Section id="price">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <PriceCard
              eyebrow="Flat fee — paid once"
              price={PRICE_USD}
              priceNote="No hospital commission is built into this fee, and it is not a deposit toward treatment."
              includes={[
                "Specialist board review at a hospital matched to your condition",
                "Certified medical translation, both directions",
                "A written viability verdict — yes, no, or conditional — in 5–7 days",
                "An itemised, hospital-sourced cost-range estimate",
                "Zero obligation to proceed — if the answer is no, you keep the report",
              ]}
              cta={
                <a
                  href="mailto:concierge@forthasiahealth.com?subject=Verified%20Second%20Opinion%20Request"
                  className="btn-label inline-flex h-11 w-full items-center justify-center whitespace-nowrap rounded-full bg-[var(--color-ink-umber)] px-6 text-center text-[var(--color-porcelain)] transition-colors hover:bg-[var(--color-ionian)]"
                >
                  Request Your Second Opinion
                </a>
              }
            />
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Why a priced product"
              title="A definitive answer, not another form"
              lede="Most enquiries end in a conversation. This ends in a document: a specialist's written opinion on whether your case is viable here, and roughly what it will cost — before you've booked a flight or shared anything beyond your records."
            />
            <p className="mt-6 max-w-xl copy-sm text-[var(--color-ink-soft)]">
              It sits alongside, not instead of, our free preliminary
              enquiry — see how the two differ below.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="dim">
        <SectionHeading
          eyebrow="Compare"
          title="Free enquiry vs. the Verified Second Opinion"
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-6">
            <p className="font-card-title text-[var(--color-ink-umber)]">
              Free Preliminary Enquiry
            </p>
            <p className="mt-3 copy-sm text-[var(--color-ink-soft)]">
              A screening conversation. Our coordination team reviews what
              you send and responds within 24 hours; if your case aligns
              with our facilitation parameters, we issue a secure portal
              link for full records upload.
            </p>
            <Link
              href="/consultation"
              className="mt-4 inline-block copy-sm text-[var(--color-ionian)] underline decoration-[var(--color-olympic-gold)] decoration-2 underline-offset-4 hover:text-[var(--color-ink-umber)]"
            >
              Start the free enquiry →
            </Link>
          </div>
          <div className="rounded-lg border-2 border-[var(--color-olympic-gold)] bg-[var(--color-porcelain)] px-[22px] py-6">
            <p className="font-card-title text-[var(--color-ink-umber)]">
              The Verified Second Opinion
            </p>
            <p className="mt-3 copy-sm text-[var(--color-ink-soft)]">
              A paid, guaranteed product. Your case is reviewed by a named
              specialist board on a fixed timeline regardless of outcome,
              and you receive a written verdict and cost-range estimate —
              not just a next step.
            </p>
            <a
              href="#price"
              className="mt-4 inline-block copy-sm text-[var(--color-ionian)] underline decoration-[var(--color-olympic-gold)] decoration-2 underline-offset-4 hover:text-[var(--color-ink-umber)]"
            >
              See the fee →
            </a>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Timeline" title="What happens, day by day" />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {timeline.map(([n, d]) => (
            <Reveal as="li" key={n}>
              <div className="h-full rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-6">
                <span className="data-tag text-[var(--color-olympic-gold)]">
                  {n}
                </span>
                <p className="mt-2 copy-sm text-[var(--color-ink-soft)]">{d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="dim">
        <FaqBlock faqs={faqs} />
      </Section>

      <Section>
        <Callout tone="gold" title="On independence">
          No facility pays to be listed, verified, or matched, and this fee
          carries no hospital commission — the same independence standard
          described on{" "}
          <Link
            href="/standard"
            className="underline decoration-[var(--color-olympic-gold)] decoration-2 underline-offset-4"
          >
            The Forthasia Standard
          </Link>
          .
        </Callout>
        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-[var(--color-bronze)]">
          Forthasia Health is a facilitation and care-coordination company.
          We do not diagnose, treat, or prescribe. All clinical decisions
          rest with licensed hospitals and your own physicians. Cost
          estimates are illustrative and hospital-sourced; final pricing is
          confirmed by the treating facility.
        </p>
        <div className="mt-8 flex justify-center">
          <CTAButton href="#price" variant="outline">
            Request Your Verified Second Opinion
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
