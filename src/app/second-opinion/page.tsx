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
  ["Day 5–7", "The document is delivered — all six sections above, in writing, whatever the verdict."],
];

/**
 * The deliverable, section by section. This is the product: a document,
 * not a conversation. Every cost figure in it is hospital-sourced and
 * labelled illustrative; every clinical statement is the board's, not ours.
 */
const deliverable = [
  {
    n: "01",
    title: "Your case, restated",
    body: "What you submitted, what was translated, and the exact question the specialist board was asked — so you can see the review was of your case, not a template.",
  },
  {
    n: "02",
    title: "The verdict, and the options considered",
    body: "The board's written viability verdict: yes, no, or conditional, with its reasoning. Where more than one mainstream approach exists, each is set out objectively — indications, known limitations, and what it would mean for your case. The final treatment plan is decided by you and the treating physician, never by us.",
  },
  {
    n: "03",
    title: "The facility, and the ones we didn't shortlist",
    body: "Which verified facility was matched and why — the department's case volume for your specific pathway, the reviewing clinicians' credentials as confirmed by the facility, translation quality, and emergency readiness. And the facilities we considered but did not shortlist, with the reason. Evidence over adjectives.",
  },
  {
    n: "04",
    title: "The itemised cost, and the whole journey",
    body: "A hospital-sourced, itemised cost range — procedure, imaging, admission days, follow-up — confirmed in writing by the facility before you book. Then the full-journey estimate: flights, accommodation near the facility, transfers, in-person translation, and any second visit — so you can compare honestly against staying home. If staying home is the better option, the document says so.",
  },
  {
    n: "05",
    title: "Entry, timing and logistics",
    body: "Your entry route (visa-free or by hospital invitation letter), the transfer from Haikou Meilan to the facility, the recommended length of stay, seasonal timing, and where to stay relative to the hospital.",
  },
  {
    n: "06",
    title: "Recovery and the return home",
    body: "Practical, non-clinical notes for the days after: the recovery window, what is advisable on the island and what to avoid, and what the home continuum looks like — a translated discharge summary and your records forwarded to your own physician.",
  },
];

const faqs: Faq[] = [
  {
    q: "Is this the same as the free preliminary consultation?",
    a: "No. The free enquiry on our Consultation page is a screening conversation — our coordination team reviews what you send and, if your case aligns with our facilitation parameters, issues a portal link within 24 hours. The Verified Second Opinion is a paid, guaranteed product: a named specialist board at a verified hospital reviews your case regardless, and you receive a written verdict and cost estimate on a fixed timeline.",
  },
  {
    q: "What happens if my case isn't viable?",
    a: "You keep the full document. The fee covers the review itself, not a particular outcome — if the board's answer is no, or conditional, you still have a documented, specialist-reviewed answer to take elsewhere, and no further obligation to us. And if the honest conclusion is that staying home is the better option, the document says exactly that.",
  },
  {
    q: "Which hospitals and clinicians will the document name?",
    a: "The verified facility your case was matched to, the reviewing department, and the clinicians' credentials as confirmed by that facility — plus the facilities we considered and did not shortlist, with the reason. Named institutions are public facilities; a place in our network is earned by independent audit only, never by payment.",
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
        lede="Submit your records once. A specialist board at a verified hospital reviews your case and returns a six-section written document in 5–7 days — the verdict, the options, the facility, the itemised and whole-journey cost, the logistics, the recovery — for one flat fee, disclosed upfront, whether or not you proceed."
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
                "Specialist board review at a verified hospital matched to your condition",
                "Certified medical translation, both directions",
                "A six-section written document in 5–7 days: verdict, options, facility, itemised cost, logistics, recovery",
                "The whole-journey cost — flights, stay, transfers, translation — set against staying home",
                "Zero obligation to proceed — if the answer is no, you keep the document",
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
          eyebrow="The deliverable"
          title="What's in the document, section by section"
          lede="You are paying for a document, not a conversation. This is what it contains — every time, whatever the verdict."
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {deliverable.map((d) => (
            <Reveal as="li" key={d.n}>
              <div className="h-full rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-6">
                <span className="data-tag text-[var(--color-olympic-gold)]">
                  Section {d.n}
                </span>
                <p className="font-card-title mt-2 text-[var(--color-ink-umber)]">
                  {d.title}
                </p>
                <p className="mt-3 copy-sm text-[var(--color-ink-soft)]">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-[var(--color-bronze)]">
          Cost figures are hospital-sourced and illustrative until confirmed
          by the facility. Clinical statements are the reviewing board&rsquo;s,
          not ours. What the document is not: a diagnosis, a treatment plan,
          or a booking.
        </p>
      </Section>

      <Section>
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
              A paid, guaranteed product. Your case is reviewed by a
              specialist board on a fixed timeline regardless of outcome,
              and you receive the six-section document — verdict, options,
              facility, itemised and whole-journey cost, logistics,
              recovery — not just a next step.
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
