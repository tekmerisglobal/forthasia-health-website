import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PageHero, Section, SectionHeading } from "@/components/ui";
import { journal } from "@/content/journal";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Founder's Journal",
  description:
    "First-person dispatches from Forthasia Health's founder — a foreigner who has lived in Hainan for years, writing as a patient, not a marketer.",
  alternates: { canonical: `${SITE_URL}/journal` },
};

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="The Founder's Journal"
        title="Written by the patient, not the marketer."
        lede="Our founder is a foreigner who has lived on this island for years — not a local platform describing a country from the outside. These are first-person, unfiltered accounts of using the same hospitals we facilitate for you, written before we knew the outcome."
      />

      <Section>
        <SectionHeading eyebrow="Dispatches" title="Latest entries" />
        <ul className="mt-10 grid list-none gap-6 md:grid-cols-2">
          {journal
            .slice()
            .sort((a, b) => (a.date < b.date ? 1 : -1))
            .map((post) => (
              <Reveal as="li" key={post.slug}>
                <Link
                  href={`/journal/${post.slug}`}
                  className="flex h-full flex-col rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-6 transition-colors hover:border-[var(--color-olympic-gold)]"
                >
                  <span className="data-tag text-[var(--color-bronze)]">
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <p className="font-card-title mt-3 text-[var(--color-ink-umber)]">
                    {post.title}
                  </p>
                  <p className="mt-2 copy-sm text-[var(--color-ink-soft)]">
                    {post.dek}
                  </p>
                  <span
                    aria-hidden
                    className="mt-4 text-[var(--color-olympic-gold)]"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
        </ul>
        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-[var(--color-bronze)]">
          These are personal accounts, not medical advice, and not a
          guarantee of any outcome — individual experiences vary. Forthasia
          Health does not diagnose, treat, or prescribe.
        </p>
      </Section>
    </>
  );
}
