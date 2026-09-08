import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import {
  CTAButton,
  Diptych,
  ImageSlot,
  PageHero,
  PullQuote,
  Section,
  SectionHeading,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Philosophy",
  description:
    "The Land That Taught the World to Heal — the Greek lineage of Elis, Olympia, Sparta, and Epidaurus, the Eastern integration of 30 years in integrated medicine, and the creed that binds them.",
};

/** One diptych per stanza — Imagery & Content Manifest, Philosophy. */
const stanzas = [
  {
    eyebrow: "The Greek Lineage · I",
    title: "Elis, and the Hellanodikai",
    body: "In Ilia stood Ancient Elis, home of the Hellanodikai — the judges who guarded the purity of the Games. They could not be bought. They measured what was, not what was claimed. That instinct — to verify before we celebrate — is the oldest part of our work.",
    diptych: {
      ancient: {
        label: "Elis",
        note: "The Hellanodikai judged the athletes and guarded the standard.",
        alt: "The ruins of Ancient Elis",
        tag: "STOCK" as const,
      },
      modern: {
        label: "A modern ward",
        note: "Clean corridors — the same standard, applied to medicine.",
        alt: "Hospital corridor, clean and modern",
        tag: "STOCK" as const,
      },
      caption: "The judge's eye, then and now.",
    },
  },
  {
    eyebrow: "The Greek Lineage · II",
    title: "Olympia, the sanctuary of healing",
    body: "Olympia was not only a stadium. It was a sanctuary — a place people travelled to in order to be made well. The journey was part of the cure. We hold the same view: the body is a sacred vessel, and the passage toward care deserves the same seriousness as the care itself.",
    diptych: {
      ancient: {
        label: "Olympia",
        note: "The stadium where the Games were held.",
        alt: "Ancient Olympia stadium",
        tag: "STOCK" as const,
      },
      modern: {
        label: "A training floor",
        note: "Where the body is rebuilt, without an audience.",
        alt: "Modern gym or training floor, no faces",
        tag: "STOCK" as const,
      },
    },
  },
  {
    eyebrow: "The Greek Lineage · III",
    title: "Sparta, and the name Forthasia",
    body: "From Sparta comes the upright stance — and the name Forthasia. The Greek root is tekmerion: proof, sure sign, evidence. To stand upright is to be verified: tested until the structure holds under load.",
    diptych: {
      ancient: {
        label: "Taygetos",
        note: "The mountains above Sparta — the Λ still marks the line.",
        alt: "Taygetos mountains with a Lambda line-art overlay",
        tag: "STOCK" as const,
      },
      modern: {
        label: "A walk at the shoreline",
        note: "The upright stance, still practiced.",
        alt: "Beach walk",
        tag: "OWN" as const,
      },
    },
  },
  {
    eyebrow: "The Greek Lineage · IV",
    title: "Epidaurus, and the oldest sanctuary",
    body: "Before Olympia crowned athletes, Epidaurus healed the sick. Its sanctuary to Asclepius drew patients from across the ancient world — people who came not for a diagnosis alone, but for rest, ritual, and time. We borrow the instinct, not the ritual: healing takes the time it takes.",
    diptych: {
      ancient: {
        label: "Epidaurus",
        note: "The Sanctuary of Asclepius — the archetype we still work from.",
        alt: "The theatre of Epidaurus",
        tag: "STOCK" as const,
      },
      modern: {
        label: "A modern clinic interior",
        note: "Unhurried, precise — the same intention, current tools.",
        alt: "Modern clinic interior",
        tag: "STOCK" as const,
      },
    },
  },
  {
    eyebrow: "The Eastern Integration",
    title: "Thirty years across Asian health systems",
    body: "The founder's lineage runs through three decades of integrated medicine: training under WHO initiatives in Sri Lanka, years inside Chinese hospitals — traditional Chinese medicine learned at the bedside, not from a book — and study at Wudang Shan. Modern China matters just as much: the accredited tertiary hospitals, the regulatory standards, and the infrastructure the country has built are what make the Hainan pilot zone possible today. The East was not a detour. It was half the education.",
    diptych: {
      ancient: {
        label: "Wudang Shan",
        note: "Study in the internal traditions — breath, structure, patience.",
        alt: "Wudang Shan",
        tag: "STOCK" as const,
      },
      modern: {
        label: "Boao Lecheng",
        note: "Real-world-data pathways, gene therapy, tertiary oncology.",
        alt: "Boao Lecheng medical architecture",
        tag: "OWN/STOCK" as const,
      },
      caption: "Two halves of one training.",
    },
  },
];

export default function PhilosophyPage() {
  return (
    <>
      <PageHero
        eyebrow="Philosophy"
        title="The Land That Taught the World to Heal"
        lede="The brand bridges the ancient legacy of Greek healing with the regulatory environment of Hainan. What follows is read slowly."
      />

      {stanzas.map((s, i) => (
        <Section key={s.title} tone={i % 2 === 0 ? "porcelain" : "dim"}>
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
              <div>
                <SectionHeading eyebrow={s.eyebrow} title={s.title} />
                <p className="mt-5 max-w-xl text-[var(--color-ink-soft)]">
                  {s.body}
                </p>
              </div>
              <Diptych
                ancient={s.diptych.ancient}
                modern={s.diptych.modern}
                caption={s.diptych.caption}
              />
            </div>
          </Reveal>
        </Section>
      ))}

      {/* The Matching Doctrine — the "why" of verification (V-13 §1). */}
      <Section tone="dim">
        <Reveal>
          <SectionHeading
            eyebrow="The Matching Doctrine"
            title="The Condition Chooses The Hospital. We Only Refuse To Guess."
          />
          <div className="mt-6 max-w-2xl space-y-5 text-[var(--color-ink-soft)]">
            <p>
              Every journey in medical tourism fails or succeeds at one
              moment: the match. Not the flight, not the visa, not the lobby —
              the decision about which facility a patient&rsquo;s condition is
              entrusted to.
            </p>
            <p>
              Most of the industry answers that question commercially. We
              answer it clinically. A patient with a recurrent head-and-neck
              tumour does not need a beautiful atrium; they need a verified
              boron-neutron-capture programme and a team that has run it
              before. A patient seeking a knee replacement does not need a
              gene-therapy licence; they need an orthopaedic department with
              documented case volumes, honest outcome data, and
              English-speaking coordination at the door. The condition chooses
              the facility. Our only job is to refuse to introduce the two
              until we have stood in the room and checked.
            </p>
            <p>
              That checking is not ours alone. For verification we engage
              TEKMERIS GLOBAL, an independent verification partner operating on
              the ground in China, to inspect each hospital, healthcare centre,
              medi-spa and medical-device programme. They hold no affiliation
              with any facility, accept no commissions or referral fees, and
              are engaged solely by us — for a flat fee, per facility, per
              cycle. Hospitals do not pay to be listed. No facility can
              influence its own verification.
            </p>
            <p>
              So by the time we match you to a hospital, three things have
              already happened: the licence has been confirmed at source
              against official registries; the facility, its clinical
              processes and its documentation have been reviewed on site; and
              the specific capability your pathway requires — case volumes,
              specialist presence, translation, emergency readiness — has been
              verified for your condition, not in general.
            </p>
            <p>
              Only then does matching become what medicine has always intended
              it to be: the right patient, placed in the right hands, for the
              right reasons. The Hellanodikai of Ancient Elis measured what
              was, not what was claimed. Two and a half thousand years later,
              on a different coast, so do we.
            </p>
          </div>

          <p className="mt-6 max-w-2xl text-sm text-[var(--color-ink-soft)]">
            The full standard — what verification covers, what it never
            covers, and how independence is funded — lives on{" "}
            <Link
              href="/standard"
              className="text-[var(--color-ionian)] underline decoration-[var(--color-olympic-gold)] decoration-2 underline-offset-4 hover:text-[var(--color-ink-umber)]"
            >
              The FORTHASIA Standard
            </Link>
            .
          </p>

          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-[var(--color-bronze)]">
            Verification covers licensing, facility standards, and compliance
            processes as at the audit date; it is not a guarantee of
            individual clinical outcomes.
          </p>
        </Reveal>
      </Section>

      {/* Modern sanctuaries — imagery manifest closes the diptych sequence single-sided. */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Modern Sanctuaries"
            title="The sanctuaries are still here. They look different now."
          />
          <div className="mt-8">
            <ImageSlot
              asset={{
                tag: "OWN/STOCK",
                brief: "Boao architecture, paired or blended with a Hainan beach.",
                alt: "Boao Lecheng architecture and Hainan beach",
              }}
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="ionian">
        <PullQuote onDark emphasis="serif">
          The body does not distinguish between &lsquo;alternative&rsquo; and
          &lsquo;conventional&rsquo; — it only responds to what heals it. We
          honour all healing traditions that are evidence-based and
          patient-centred.
        </PullQuote>
        <p className="data-tag mt-6 text-center text-[color-mix(in_srgb,var(--color-porcelain)_65%,transparent)]">
          The Creed
        </p>
      </Section>

      <Section tone="ink">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading eyebrow="Closing" title="Two Oaths" onDark />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-[color-mix(in_srgb,var(--color-olympic-gold)_40%,transparent)] p-6 text-left">
              <p className="eyebrow text-[color-mix(in_srgb,var(--color-olympic-gold)_92%,white)]">
                Olympia
              </p>
              <p className="font-editorial mt-2 text-lg text-[var(--color-porcelain)]">
                We honour the body as a sacred vessel.
              </p>
            </div>
            <div className="rounded-lg border border-[color-mix(in_srgb,var(--color-olympic-gold)_40%,transparent)] p-6 text-left">
              <p className="eyebrow text-[color-mix(in_srgb,var(--color-olympic-gold)_92%,white)]">
                Sparta
              </p>
              <p className="font-editorial mt-2 text-lg text-[var(--color-porcelain)]">
                We verify until it stands upright.
              </p>
            </div>
          </div>
          <p className="font-card-title mt-8 text-[var(--color-porcelain)]">
            Forth from Greece. Forth to Health. Forthasia.
          </p>
          <div className="mt-10">
            <CTAButton href="/standard" variant="outline">
              See how we verify
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
