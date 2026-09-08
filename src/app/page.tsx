import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { RodOfAsclepius } from "@/components/RodOfAsclepius";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  CTAButton,
  Diptych,
  PullQuote,
  Section,
  SectionHeading,
  StatCard,
} from "@/components/ui";
import { CONCIERGE_EMAIL, ORG_NAME, SITE_URL } from "@/lib/site";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: ORG_NAME,
  url: SITE_URL,
  email: CONCIERGE_EMAIL,
  description:
    "Independent medical facilitation, longevity and wellness coordination across Asia. A facilitator — not a medical provider.",
  areaServed: "Worldwide",
  knowsAbout: [
    "Medical tourism",
    "Boao Lecheng International Medical Tourism Pilot Zone",
    "Longevity medicine",
    "Hospital verification",
  ],
};

const divisions = [
  [
    "Medical Journeys",
    "Oncology, orthopaedics, cardiac and dental care — matched to a verified hospital and routed through Hainan or mainland China.",
    "/treatments",
  ],
  [
    "Longevity & Executive Screening",
    "Biomarker panels, advanced imaging and executive health screens, read by physicians before any protocol begins.",
    "/wellness/longevity",
  ],
  [
    "Regenerative & Peptide Therapy",
    "Selected regenerative and peptide treatments, accessed only through a licensed institution inside Hainan's Boao Lecheng zone, under a doctor's supervision.",
    "/treatments/regenerative",
  ],
  [
    "Medi-Spa, Retreats & Recovery",
    "Physician-led aesthetic medicine, tropical recovery and structured post-procedure retreats across Asia.",
    "/wellness/medi-spa",
  ],
  [
    "Nutrition & The Longevity Plate",
    "DNA-guided, physician-designed nutrition for recovery and prevention.",
    "/nutrition",
  ],
  [
    "Integrative, TCM & Care at Home",
    "Traditional Chinese medicine, rehabilitation, and a documented home continuum after you fly back.",
    "/treatments/tcm",
  ],
];

const actionBlocks = [
  {
    label: "Check Visa Eligibility",
    href: "/visa-guide",
    note: "30-day visa-free entry for 86 countries — enough for a full diagnostic confirmation trip.",
  },
  {
    label: "The 4-Phase Journey",
    href: "/journey",
    note: "Clinical matching, verification, on-ground stewardship, and the home continuum.",
  },
  {
    label: "Secure Client Login",
    href: "https://app.forthasiahealth.com",
    note: "The HIIC Vault — encrypted records custody. No PHI ever moves by email or chat.",
    external: true,
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      {/* Hero — min-height 78vh / max-height 760px per V-7 density spec */}
      <section className="relative flex min-h-[78vh] max-h-[760px] items-end overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 [background:linear-gradient(180deg,#1f3a5f_0%,#171310_58%,#171310_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-70 [background:radial-gradient(70%_50%_at_75%_0%,color-mix(in_srgb,#c2a15c_30%,transparent),transparent_60%),radial-gradient(60%_50%_at_10%_100%,color-mix(in_srgb,#6e8b74_22%,transparent),transparent_60%)]"
        />
        {/*
          TODO(video, imagery manifest — Home / Hero):
          [OWN] Hainan beach, golden hour — still frame now; replace with a
          12–20s slow-pan loop at /public/video/hero-loop.mp4 + poster frame.
          alt: "Hainan coastline at golden hour"
        */}

        <div className="shell relative z-10 pb-16 pt-28 text-[var(--color-porcelain)]">
          <p className="eyebrow text-[color-mix(in_srgb,#c2a15c_92%,white)]">
            Forthasia Health // From the land of Olympia. Forth to health.
          </p>
          <h1 className="font-monument text-hero mt-5 max-w-4xl text-balance">
            The Global Standard in Medical Stewardship
          </h1>
          <p className="text-lede mt-6 max-w-2xl text-[color-mix(in_srgb,#faf7f2_88%,transparent)]">
            Navigating the intersection of advanced regenerative medicine,
            diagnostic confirmation, and longevity. Headquartered in Hainan,
            China.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {actionBlocks.map((b) => {
              const inner = (
                <>
                  <span className="font-card-title text-[var(--color-porcelain)]">
                    {b.label}
                  </span>
                  <span className="mt-2 block copy-sm text-[color-mix(in_srgb,#faf7f2_70%,transparent)]">
                    {b.note}
                  </span>
                  <span
                    aria-hidden
                    className="mt-4 block text-[var(--color-olympic-gold)]"
                  >
                    →
                  </span>
                </>
              );
              const cls =
                "group rounded-lg border border-[var(--color-hairline-dark)] bg-[color-mix(in_srgb,#171310_35%,transparent)] p-[22px] text-left transition-colors hover:border-[var(--color-olympic-gold)] hover:bg-[color-mix(in_srgb,#171310_55%,transparent)]";
              return b.external ? (
                <a key={b.label} href={b.href} className={cls}>
                  {inner}
                </a>
              ) : (
                <Link key={b.label} href={b.href} className={cls}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stewards of Health — positioning band + service divisions */}
      <Section>
        <SectionHeading
          eyebrow="Stewards of Health"
          title="More than medical tourism."
          lede="A knee replaced in Haikou. A physician-supervised peptide therapy inside Boao Lecheng — the one zone in China where selected treatments not yet approved nationally are lawfully available. A dental arch rebuilt in Shanghai. A longevity protocol in Phuket. A recovery on a Hainan beach. FORTHASIA HEALTH verifies, facilitates and accompanies every step — because health is not one appointment. It is a continuum we steward."
        />
        <ul className="mt-10 grid list-none gap-4 md:grid-cols-2 lg:grid-cols-3">
          {divisions.map(([t, d, href], i) => (
            <Reveal as="li" key={t}>
              <Link
                href={href}
                className="flex h-full flex-col rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-6 transition-colors hover:border-[var(--color-olympic-gold)]"
              >
                <span className="data-tag text-[var(--color-olympic-gold)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-card-title mt-2 text-[var(--color-ink-umber)]">
                  {t}
                </p>
                <p className="mt-2 copy-sm text-[var(--color-ink-soft)]">{d}</p>
                <span aria-hidden className="mt-4 text-[var(--color-olympic-gold)]">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-[var(--color-bronze)]">
          FORTHASIA HEALTH does not diagnose, treat or prescribe. Regenerative
          and peptide therapies are prescribed and administered solely by
          licensed physicians inside a regulated medical institution; in China,
          certain non-NMPA-approved treatments are lawfully available only within
          the Boao Lecheng pilot zone. Destinations beyond Hainan and Bangkok are
          partner-network-in-build.
        </p>
        <div className="mt-8">
          <CTAButton href="/partners" variant="ghost">
            Facilities &amp; clinicians: how affiliation works →
          </CTAButton>
        </div>
      </Section>

      {/* Ethos strip */}
      <Section tone="dim">
        <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
          <RodOfAsclepius className="h-14 w-14 text-[var(--color-olympic-gold)]" />
          <div className="grid gap-6 sm:grid-cols-3">
            <p className="font-card-title text-[var(--color-ionian)]">
              &ldquo;We don&rsquo;t book journeys. We steward outcomes.&rdquo;
            </p>
            <p className="font-card-title text-[var(--color-ionian)]">
              &ldquo;We Don&rsquo;t Refer. We Verify.&rdquo;
            </p>
            <p className="copy-sm text-[var(--color-ink-soft)]">
              A logistical, translational, and verification facilitator. We do
              not diagnose, treat, or prescribe.
            </p>
          </div>
        </div>
      </Section>

      {/* "Why Forthasia" trust band — Addendum §1, verbatim copy */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Why Forthasia"
            title="Your Own Person on the Inside."
          />
          <div>
            <p className="max-w-2xl text-[var(--color-ink-soft)]">
              Most medical tourism companies are call centres in another
              country, or local agencies you&rsquo;ve never met. FORTHASIA
              HEALTH is foreign-owned, practitioner-founded, and physically
              based in Hainan — run by a Western-registered practitioner who
              lives here. We speak your language because it&rsquo;s ours. We
              verify because we&rsquo;re practitioners. And we stay with you
              from the first record upload to the flight home.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Practitioner-founded — registered acupuncturist & naturopath (Australia)",
                "On the ground in Haikou",
                "Independent verification — every facility audited on site by TEKMERIS GLOBAL",
                "Facilitator ethics — you pay the hospital directly; our fee is disclosed",
              ].map((b) => (
                <li
                  key={b}
                  className="rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-5 copy-sm text-[var(--color-ink-soft)]"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* The regulatory oasis */}
      <Section>
        <SectionHeading
          eyebrow="Hainan · Boao Lecheng"
          title="A regulatory oasis for medicine that isn't available anywhere else yet"
          lede="The Boao Lecheng International Medical Tourism Pilot Zone gives verified access to FDA / EMA-approved therapies years before they reach mainland China or the West."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard value="~40 hrs" label="Drug-access framework via the Super AI Hospital and real-world data pathway" />
          <StatCard value="86" label="Countries with 30-day visa-free entry to Hainan" />
          <StatCard value="5–7 days" label="From records upload to viability & cost-range review" />
          <StatCard value="BNCT" label="Boron Neutron Capture Therapy for recurrent head & neck cancers" />
        </div>
        <div className="mt-8">
          <CTAButton href="/destinations" variant="ghost">
            Explore destinations & treatments →
          </CTAButton>
        </div>
      </Section>

      {/* Diptych band — imagery manifest: Home / Diptych band */}
      <Section tone="dim">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Philosophy"
              title="The land that taught the world to heal"
              lede="The brand bridges the ancient legacy of Greek healing — Olympia, Sparta — with the cutting-edge regulatory environment of Hainan. Not a clinical hospital. Not a tourist agency. A private family office for health."
            />
            <div className="mt-6">
              <CTAButton href="/philosophy" variant="outline">
                Read the philosophy
              </CTAButton>
            </div>
          </div>
          <Diptych
            ancient={{
              label: "Olympia",
              note: "The sanctuary of healing. We honour the body as a sacred vessel.",
              alt: "Ancient Olympia stadium",
              tag: "STOCK",
            }}
            modern={{
              label: "Boao Lecheng",
              note: "Glass elevators, tertiary care, Mayo Clinic and MD Anderson affiliations.",
              alt: "Modern Boao Lecheng medical architecture",
              tag: "OWN/STOCK",
            }}
            caption="The old sanctuaries. The new ones."
          />
        </div>
      </Section>

      {/* Journey teaser */}
      <Section>
        <SectionHeading
          eyebrow="The 4-Phase Journey"
          title="From a definitive second opinion to a documented home continuum"
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Clinical Matching & Diagnostic Confirmation", "Records to the HIIC Vault, translated, specialist board review, viability in 5–7 days."],
            ["02", "Verification & Travel Architecture", "Independent facility audit to the TEKMERIS GLOBAL standard. Invitation letters. Logistics."],
            ["03", "On-Ground Stewardship", "A dedicated steward. In-person medical translation at every consultation."],
            ["04", "Home Continuum", "Translated discharge summary, records to your physician, DNA-based post-op nutrition, follow-ups."],
          ].map(([n, t, d]) => (
            <Reveal as="li" key={n}>
              <div className="h-full rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-6">
                <span className="data-tag text-[var(--color-olympic-gold)]">
                  PHASE {n}
                </span>
                <p className="font-card-title mt-2 text-[var(--color-ink-umber)]">
                  {t}
                </p>
                <p className="mt-2 copy-sm text-[var(--color-ink-soft)]">{d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Closing */}
      <Section tone="ink">
        <PullQuote onDark cite="The Forthasia Master Close">
          Forth from Greece. Forth to Health. Forthasia.
        </PullQuote>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <CTAButton href="/consultation" variant="outline">
            Begin a confidential conversation
          </CTAButton>
          <CTAButton href="/visa-guide" variant="ghost">
            Check visa eligibility →
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
