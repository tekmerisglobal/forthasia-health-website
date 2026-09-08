import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import {
  Callout,
  CTAButton,
  Diptych,
  EmailCTA,
  FactsBand,
  ImageSlot,
  PageHero,
  Section,
  SectionHeading,
  StatCard,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Destinations & Treatments",
  description:
    "The Hainan Boao Lecheng International Medical Tourism Pilot Zone — the regulatory oasis — plus mainland China's high-volume hospital network and strategic pathways in Bangkok and Mumbai.",
};

const boaoPoints = [
  {
    title: "The ~40-hour drug-access framework",
    body: "An AI system scans FDA and EMA approvals daily. A therapy cleared overseas can be approved for use inside the zone in around 40 hours — against roughly 60 days through the national route — with customs clearance for a patient's application in three to seven days.",
  },
  {
    title: "570+ therapies, first in China",
    body: "More than 570 innovative medicines and devices — approved abroad but not yet on the mainland market — have entered China first through Lecheng, across oncology, rare disease, ophthalmology and more.",
  },
  {
    title: "Real-world data as a bridge",
    body: "Lecheng is China's designated testing ground where real-world clinical data gathered on an imported product can support that product's full national registration. Treatment here also contributes to the evidence base.",
  },
  {
    title: "Advanced hardware",
    body: "Boron Neutron Capture Therapy for recurrent head-and-neck cancers at Pengbo (Hainan) Boron Neutron Hospital — its NeuCure system reached first beam extraction in November 2025. A proton-therapy centre is approved at Boao Evergrande International Hospital. Advanced stem-cell and gene therapies are available at a fraction of Western cost.",
  },
  {
    title: "The Super AI Hospital model",
    body: "Diagnosis near home, concentrated treatment in Lecheng, and follow-up back in your own region — the zone's three-stage framework, built around the international patient rather than the building.",
  },
  {
    title: "A regulatory sandbox by design",
    body: "A 20 km² zone in Qionghai, Hainan, established in 2013 and folded into the Hainan Free Trade Port. It runs on four special licences — medical practice, research, business operation and international exchange — with zero tariff on imported medicines since 2024.",
  },
];

const secondary = [
  {
    place: "Bangkok, Thailand",
    body: "Strategic partnerships for selected oncology pathways and complex orthopedics, where volume and sub-specialisation favour a Thai centre.",
    asset: {
      tag: "STOCK" as const,
      brief: "Temple silhouette against the sea — no faces.",
      alt: "Thai temple and coastline",
    },
  },
  {
    place: "Mumbai, India",
    body: "Partner facilities for specific oncology and orthopedic pathways, particularly where cost-to-outcome ratios are strongest.",
    asset: {
      tag: "STOCK" as const,
      brief: "Modern Mumbai skyline — no faces.",
      alt: "Modern Mumbai skyline",
    },
  },
];

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations & Treatments"
        title="Hainan Boao Lecheng — the Regulatory Oasis"
        lede="A pilot zone built so that approved therapies reach patients sooner. We coordinate access; the treating hospital provides the care."
      >
        <CTAButton href="/visa-guide">Check visa eligibility</CTAButton>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Why Boao Lecheng"
          title="What the pilot zone makes possible"
          lede="Boao Lecheng is China's designated 'medical special zone' — a regulatory sandbox inside the Hainan Free Trade Port where overseas-approved therapies reach patients years earlier than they would through the standard national route. We coordinate access to it; the treating hospital delivers the care."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard value="~40 hrs" label="To approve an overseas-cleared therapy for use in the zone (vs ~60 days nationally)" />
          <StatCard value="570+" label="Innovative medicines & devices brought into China first through Lecheng" />
          <StatCard value="~36" label="Medical institutions operating within the zone" />
          <StatCard value="20 km²" label="The pilot zone, in Qionghai, Hainan — a regulatory sandbox since 2013" />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {boaoPoints.map((p) => (
            <Reveal key={p.title}>
              <div className="h-full rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-6">
                <p className="font-card-title text-[var(--color-ink-umber)]">
                  {p.title}
                </p>
                <p className="mt-3 copy-sm text-[var(--color-ink-soft)]">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <FactsBand
            label="Illustrative public data — zone-published; figures move, confirm at consultation"
            facts={[
              "20 km² zone in Qionghai; established 2013, now part of the Hainan Free Trade Port",
              "~36 medical institutions operating · ~60 foreign-funded enterprises",
              "570+ overseas-approved medicines and devices used first-in-China here",
              "~40-hour approval pathway vs ~60 days nationally; customs clearance in 3–7 days",
              "Zero tariff on imported medicines since 2024 — reported patient savings ~68M CNY",
              "413,700 medical-tourism visits in 2024 (+36.8%); ~865,000 in 2025",
              "Real-world data from the zone can support a product's full China registration",
              "Research links with 180+ pharmaceutical and med-tech companies across 20 countries",
            ]}
          />
        </div>
        <p className="data-tag mt-6 text-[var(--color-bronze)]">
          We describe access to advanced therapies and the outcome of a viability
          assessment. We do not diagnose, treat, prescribe, or guarantee a
          clinical outcome. Named institutions are public facilities; the
          FORTHASIA NETWORK badge applies only after independent audit.
        </p>
      </Section>

      <Section tone="dim">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Diptych
            ancient={{
              label: "The ruins of Elis",
              note: "Where the standard was first guarded.",
              alt: "The ruins of Ancient Elis",
              tag: "STOCK",
            }}
            modern={{
              label: "Glass elevators, Boao Lecheng",
              note: "Where the standard is applied today.",
              alt: "Boao Lecheng architecture",
              tag: "OWN/STOCK",
            }}
            caption="The Diptych motif — Elis and Lecheng."
          />
          <div>
            <SectionHeading
              eyebrow="How access works"
              title="Approved therapy, coordinated arrival"
              lede="Your records are reviewed by a specialist board. If a Boao Lecheng pathway is viable, we build the travel architecture around confirmed capacity and an authentic hospital invitation."
            />
            <div className="mt-6">
              <CTAButton href="/journey" variant="outline">
                The 4-phase journey
              </CTAButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Dental & Oral Health pathway — V-9 §1, expanded */}
      <Section>
        <span className="data-tag text-[var(--color-olympic-gold)]">
          Pathway · Dental & Oral Health
        </span>
        <h2 className="font-monument text-h2 mt-4 max-w-3xl text-[var(--color-ink-umber)]">
          World-Class Dentistry, Without the Western Wait — or the Western Bill.
        </h2>
        <p className="mt-5 max-w-2xl text-[var(--color-ink-soft)]">
          China&rsquo;s leading hospital dental departments and specialist
          centres deliver digital, implant-focused dentistry —
          internationally manufactured implant systems, CAD/CAM same-day
          crowns, 3D-guided surgery — at a fraction of Western cost. In
          Hainan, zone policy permits imported dental devices and materials
          not yet registered nationally to be used within the zone, so you
          access current-generation hardware, not last decade&rsquo;s.
        </p>

        <p className="eyebrow mt-8 text-[var(--color-bronze)]">
          What we facilitate
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            "Full-mouth rehabilitation & All-on-4/6 implant programmes",
            "Single implants, bone grafting, sinus lifts",
            "Orthodontics & clear aligners · cosmetic dentistry (veneers, whitening)",
            "Endodontics & executive dental checks — combinable with a full health screen in the same trip",
          ].map((item) => (
            <li
              key={item}
              className="rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-4 copy-sm text-[var(--color-ink-soft)]"
            >
              {item}
            </li>
          ))}
        </ul>

        <Callout tone="gold" title="Why combine dental with Hainan" className="mt-8">
          Recover on a beach, not in a waiting room. Dental checks in the zone
          have been publicly promoted from ~115 CNY (illustrative public
          data — your hospital quote is issued at consultation).
        </Callout>

        <p className="eyebrow mt-8 text-[var(--color-bronze)]">
          Illustrative price context — confirm at consultation
        </p>
        <div className="mt-4 overflow-x-auto rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)]">
          <table className="w-full min-w-[520px] border-collapse copy-sm">
            <thead>
              <tr className="border-b border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain-dim)] text-left">
                <th className="eyebrow px-[22px] py-3 font-normal text-[var(--color-bronze)]">
                  Procedure
                </th>
                <th className="eyebrow px-[22px] py-3 font-normal text-[var(--color-bronze)]">
                  Typical Western cost
                </th>
                <th className="eyebrow px-[22px] py-3 font-normal text-[var(--color-bronze)]">
                  Typical China cost
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Single implant", "USD 3,000–6,000", "USD 900–2,500"],
                ["Full-mouth rehabilitation", "USD 30,000–90,000", "USD 8,000–25,000"],
              ].map(([proc, west, china]) => (
                <tr
                  key={proc}
                  className="border-b border-[color-mix(in_srgb,var(--color-bronze)_18%,transparent)] bg-[var(--color-porcelain)] last:border-b-0"
                >
                  <td className="font-card-title px-[22px] py-3 text-[var(--color-ink-umber)]">
                    {proc}
                  </td>
                  <td className="px-[22px] py-3 text-[var(--color-ink-soft)]">{west}</td>
                  <td className="px-[22px] py-3 text-[var(--color-ink-soft)]">{china}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Callout tone="ionian" title="Compliance" className="mt-8">
          We arrange appointments, translation and logistics. All dental
          treatment decisions rest with the licensed dental facility.
        </Callout>

        <EmailCTA
          className="mt-8"
          email="concierge@forthasiahealth.com"
          body="To request a preliminary cost estimate for digital implantology or full-mouth rehabilitation in Hainan, contact our concierge desk."
        />
      </Section>

      {/* Anti-Aging & Longevity pathway — V-9 §1 */}
      <Section tone="dim">
        <span className="data-tag text-[var(--color-olympic-gold)]">
          Pathway · Anti-Aging & Longevity
        </span>
        <h2 className="font-monument text-h2 mt-4 max-w-3xl text-[var(--color-ink-umber)]">
          Longevity Here Is Not a Promise. It&rsquo;s a Protocol.
        </h2>
        <p className="mt-5 max-w-2xl text-[var(--color-ink-soft)]">
          The zone turns longevity from marketing into medicine: comprehensive
          biomarker diagnostics, advanced imaging and genomic screening on
          arrival — then zone-legal regenerative, metabolic and cellular
          therapies under physician supervision — then a home-continuum plan
          that keeps the protocol alive after you fly.
        </p>

        <div className="mt-8">
          <FactsBand
            label="What's available — zone-legal framing, illustrative pricing"
            facts={[
              "Executive health screening & longevity diagnostics (packages ~500–30,000 CNY)",
              "Regenerative medicine, including zone-approved stem-cell therapies (e.g., umbilical-cord mesenchymal stem cells for knee osteoarthritis, ~36,000 CNY/session)",
              "NAD+ and metabolic protocols, physician-supervised",
              "Predictive AI health monitoring (the zone's “Super AI Hospital” model)",
              "BNCT and advanced oncology hardware where clinically indicated (see the oncology pathway above)",
            ]}
          />
        </div>

        <Callout tone="gold" title="Readiness — your visit" className="mt-8">
          Our founder has personally inspected longevity facilities in the
          zone — they are ready to receive international patients today.
          Every facility is independently verified under the TEKMERIS GLOBAL
          protocol before it appears in your proposal.
        </Callout>

        <Callout tone="ionian" title="Compliance" className="mt-6">
          The 30-day visa-free window is sufficient for diagnostic
          confirmation. No outcomes are promised or guaranteed; the
          cross-border regulatory notice applies.
        </Callout>

        <EmailCTA
          className="mt-8"
          email="longevity@forthasiahealth.com"
          body="Ready to explore zone-legal regenerative protocols and DNA-guided nutrition? Initiate a confidential longevity assessment."
        />
      </Section>

      {/* TCM & Rehabilitation pathway — Addendum §2, unchanged */}
      <Section>
        <div className="rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-6">
          <span className="data-tag text-[var(--color-olympic-gold)]">
            Pathway · TCM & Rehabilitation
          </span>
          <p className="mt-3 max-w-2xl copy-sm text-[var(--color-ink-soft)]">
            Acupuncture, tuina, cupping, and herbal rehabilitation — the
            same disciplines our founder trained in — delivered at
            institutions we audit before we introduce you.
          </p>
          <div className="mt-5">
            <FactsBand
              label="Illustrative public data — hospital-published"
              facts={[
                "Sanya Hospital of TCM — Grade A Level 3",
                "China's first National TCM Service Export Base, in Hainan",
                "~7,000 international patients in 2024",
                "International clinic — English & Russian",
                "Acupuncture 198 CNY / 30 min (one side)",
                "Massage 150 CNY / 30 min · cupping 198 CNY",
                "7-Day Wellness Plan · 14-Day Chronic Disease Rehabilitation",
                "Visa / Mastercard / WeChat / Alipay accepted",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* The ecosystem we navigate — Addendum §2 */}
      <Section tone="dim">
        <SectionHeading
          eyebrow="The network"
          title="The ecosystem we navigate"
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            "Boao Lecheng Pilot Zone — 35+ international medical-tourism routes",
            "Boao Super Digital Intelligence ('AI') Hospital — the three-stage model",
            "Pengbo (Hainan) Boron Neutron Hospital — BNCT; first beam extraction Nov 2025",
            "Boao Evergrande International Hospital — proton-therapy centre (approved)",
            "Yiling Life Care Center",
            "LECZCORE / Mellsser — oncology & longevity",
            "Sanya Hospital of TCM — National TCM Service Export Base",
            "Hainan International Travel Health Care Center — sole authorized issuer of the International Travel Health Examination Certificate",
            "International Medical Center, Hainan Medical University 2nd Affiliated",
            "Sanya Central Hospital International Medical Clinic (2025)",
          ].map((item) => (
            <li
              key={item}
              className="rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-4 copy-sm text-[var(--color-ink-soft)]"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="data-tag mt-6 text-[var(--color-bronze)]">
          Named institutions are public facilities we facilitate access to.
          The FORTHASIA NETWORK badge applies only after independent audit.
        </p>
      </Section>

      {/* Market facts band — Addendum §2 */}
      <Section>
        <FactsBand
          label="Illustrative public data — zone- and hospital-published; confirm at consultation"
          facts={[
            "86-country visa-free entry with medical purpose written into law (1 Dec 2025)",
            "Check-ups: 500–30,000 CNY",
            "Advanced therapies zone-published from 16,000 CNY (3rd batch, Sept 2025)",
            "Zone-linked special-medicine insurance: ~49 CNY premium, cover up to ~2M CNY",
            "Zone works with international insurers (e.g. AXA, HSBC)",
            "Average international patient spend: >12,000 CNY",
          ]}
        />
      </Section>

      {/* Beyond the Island — mainland China (V-14 §1) */}
      <Section>
        <SectionHeading
          eyebrow="Beyond Hainan"
          title="Hainan Is the Gateway. China Is the Network."
          lede="The visa-free island is where most journeys begin — but not where they must end. Mainland China operates one of the most experienced hospital systems on earth: Grade A tertiary institutions in Beijing, Shanghai, Guangzhou and Chengdu, whose surgeons perform in a year what many Western centres perform in a decade. Case volume is its own kind of expertise."
        />
        <div className="mt-6 max-w-2xl space-y-5 copy-sm text-[var(--color-ink-soft)]">
          <p>
            Dental is the clearest example. China&rsquo;s stomatology hospitals
            and university dental departments deliver digital implantology,
            CAD/CAM same-day crowns and full-arch rehabilitation on imported
            implant systems — at a fraction of Western cost — and the
            mainland&rsquo;s dental hubs rank among Asia&rsquo;s most advanced.
          </p>
          <p>
            Where Hainan offers visa-free speed, the mainland offers depth:
            complex oncology and cardiac surgery, orthopaedics at extraordinary
            case volumes, and integrated TCM programmes inside the same
            institutions. Mainland journeys follow the standard visa pathway —
            and we coordinate every document, from invitation letter to
            discharge summary.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            "Beijing — national cardiac and oncology centres of global standing",
            "Shanghai — leading stomatology and dental hospitals; mature international departments",
            "Guangzhou — university hospital networks with exceptional dental and oncology depth",
            "Chengdu — among the largest surgical case volumes in Asia",
          ].map((item) => (
            <li
              key={item}
              className="rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-4 copy-sm text-[var(--color-ink-soft)]"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="data-tag mt-6 text-[var(--color-bronze)]">
          The mainland ecosystems we navigate — examples only. The FORTHASIA
          NETWORK badge applies only after independent audit.
        </p>

        <Callout tone="gold" className="mt-8">
          One country, two pathways: visa-free speed in Hainan, unmatched case
          volume on the mainland. We facilitate both.
        </Callout>
      </Section>

      <Section tone="dim">
        <SectionHeading
          eyebrow="Secondary destinations"
          title="Bangkok and Mumbai, where the pathway favours them"
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {secondary.map((s) => (
            <div
              key={s.place}
              className="overflow-hidden rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)]"
            >
              <ImageSlot asset={s.asset} tone="cool" className="[&>div]:rounded-none" />
              <div className="px-[22px] py-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-card-title text-[var(--color-ink-umber)]">
                    {s.place}
                  </p>
                  <span className="data-tag shrink-0 text-[var(--color-bronze)]">
                    Partner network — build phase
                  </span>
                </div>
                <p className="mt-3 copy-sm text-[var(--color-ink-soft)]">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Callout tone="ionian" title="On claims">
            We describe access to advanced therapies and the outcome of a
            viability assessment. We never guarantee a clinical outcome, and we
            are not the medical provider.
          </Callout>
        </div>
      </Section>
    </>
  );
}
