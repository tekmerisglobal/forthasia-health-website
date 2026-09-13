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

/** The flat fee, locked 2026-09-14. Credited in full toward the concierge package on proceeding. */
const PRICE_USD = "USD 500";

export const metadata: Metadata = {
  title: "The Verified Second Opinion — A Priced, Guaranteed Read Before You Travel",
  description:
    "A guaranteed specialist board review of your case. Seven itemised deliverables in 5–7 days — the clinical verdict, three pathways compared, the named team, the hospital quotation in writing, what we ruled out, the recovery preview, the honest line. One flat fee, disclosed upfront — no hospital commission, no obligation to proceed.",
};

const timeline = [
  ["Day 0–1", "Records submitted to the HIIC Vault; the fee is confirmed and the case opened."],
  ["Day 1–2", "Certified medical translation, both directions."],
  ["Day 3–6", "Review by a specialist board at the TEKMERIS GLOBAL-verified hospital matched to your condition."],
  ["Day 5–7", "All seven deliverables land in your vault, in writing, whatever the verdict."],
];

/**
 * The deliverable — the itemised spec of what lands in the vault. Verbatim
 * per the /second-opinion deliverable brief. Quotations are the facility's;
 * names appear only as confirmed by the facility; "ruled out" is criteria,
 * never accusation.
 */
const deliverable = [
  {
    n: "01",
    title: "The clinical verdict",
    body: "A written viability opinion from the matched specialist board, professionally translated: what is confirmed, what is questioned, and what further testing is required on arrival.",
  },
  {
    n: "02",
    title: "Three pathways compared",
    body: "Up to three facility × method options considered for your condition, each with its verification status, department case-volume band, and English-support capability — and plainly, why we recommend it or don’t.",
  },
  {
    n: "03",
    title: "The named team",
    body: "The lead physician or surgeon for the recommended pathway, with years in role and English-support level, exactly as confirmed to us by the facility.",
  },
  {
    n: "04",
    title: "Money, in writing",
    body: "The hospital-issued quotation on official hospital channel or letterhead where the facility provides one, itemized across procedure, devices, medication and bed days; plus a whole-trip cost model: concierge fee, estimated flights, accommodation bands and local transfers; and a treat-here vs. treat-at-home comparison built on labelled illustrative public data.",
  },
  {
    n: "05",
    title: "What we ruled out, and why",
    body: "The options considered and the criteria applied (verification status, case volumes, capability for your specific condition). Stated as criteria, never as accusations.",
  },
  {
    n: "06",
    title: "The recovery preview",
    body: "Your discharge-to-home continuum, the 1-week / 1-month / 3-month follow-up cadence, and, where relevant, recovery logistics down to meal planning and recovery-resort options.",
  },
  {
    n: "07",
    title: "The honest line",
    body: "Every verdict is dated and states what is not yet known. If the honest answer is “not viable here,” we say so in writing, and you pay nothing further.",
  },
];

const faqs: Faq[] = [
  {
    q: "Is this the same as the free preliminary consultation?",
    a: "No. The free enquiry on our Consultation page is a screening conversation — our coordination team reviews what you send and, if your case aligns with our facilitation parameters, issues a portal link within 24 hours. The Verified Second Opinion is a paid, guaranteed product: a specialist board at a verified hospital reviews your case regardless of outcome, and all seven itemised deliverables — verdict, pathways, named team, money in writing, what we ruled out, recovery preview, the honest line — land in your vault on a fixed timeline.",
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
    a: "The USD 500 fee is credited in full toward your ForthAsia Health concierge package if you proceed with us. It is not a deposit toward hospital fees — those you pay the treating facility directly, on its own quotation, with our facilitation fee disclosed separately.",
  },
];

export default function SecondOpinionPage() {
  return (
    <>
      <PageHero
        eyebrow="Priced. Flat Fee. Before You Travel."
        title="The Verified Second Opinion"
        lede="Submit your records once. A specialist board at a verified hospital reviews your case, and seven itemised deliverables land in your vault in 5–7 days — the verdict, the pathways compared, the named team, the money in writing, what we ruled out, the recovery preview, and the honest line — for one flat fee, disclosed upfront, whether or not you proceed."
      >
        <div className="max-w-2xl">
          <p className="text-[var(--color-ink-umber)]">
            <span className="font-card-title">{PRICE_USD}</span> — Verified
            Second Opinion fee, credited in full toward your concierge package
            if you proceed with ForthAsia Health.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-[var(--color-bronze)]">
            Payable on signing of the Medical Records Authorization &amp;
            Privacy Consent and the Facilitation Agreement. Covers professional
            translation, specialist-board submission, and the seven-part
            written deliverable. If the honest verdict is &lsquo;not viable
            here,&rsquo; you pay nothing further.
          </p>
          <div className="mt-6">
            <CTAButton href="#price">See what&rsquo;s included</CTAButton>
          </div>
        </div>
      </PageHero>

      <Section id="price">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <PriceCard
              eyebrow="Flat fee — paid once, no hospital commission"
              price={PRICE_USD}
              priceNote="Verified Second Opinion fee, credited in full toward your concierge package if you proceed with ForthAsia Health. No hospital commission is built into it."
              includes={[
                "Specialist board review at a verified hospital matched to your condition",
                "Certified medical translation, both directions",
                "Seven itemised deliverables in 5–7 days: verdict, pathways compared, named team, money in writing, what we ruled out, recovery preview, the honest line",
                "A whole-trip cost model — concierge fee, flights, accommodation bands, transfers — and a treat-here vs. treat-at-home comparison",
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
          title="What actually lands in your vault."
          lede="Seven items, every time, whatever the verdict. Verification status throughout is as audited on site by TEKMERIS GLOBAL, our independent verification partner."
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {deliverable.map((d) => (
            <Reveal as="li" key={d.n}>
              <div className="h-full rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-6">
                <span className="data-tag text-[var(--color-olympic-gold)]">
                  {d.n}
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
          Quotations are issued by the treating facility, never by ForthAsia
          Health. Cost comparisons are illustrative public data — confirm at
          consultation. Verification status is as at the audit date and is not
          a guarantee of individual clinical outcomes.
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
              and seven itemised deliverables land in your vault — the
              verdict, the pathways compared, the named team, the money in
              writing, what we ruled out, the recovery preview, the honest
              line — not just a next step.
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
