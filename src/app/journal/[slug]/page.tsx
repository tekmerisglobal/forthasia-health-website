import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero, Section } from "@/components/ui";
import { journal } from "@/content/journal";
import { ORG_NAME, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return journal.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = journal.find((p) => p.slug === slug);
  if (!post) return {};
  const url = `${SITE_URL}/journal/${slug}`;
  return {
    title: post.title,
    description: post.dek,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.dek,
      url,
      type: "article",
      siteName: "Forthasia Health",
    },
  };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = journal.find((p) => p.slug === slug);
  if (!post) notFound();

  const url = `${SITE_URL}/journal/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.dek,
    datePublished: post.date,
    url,
    author: { "@type": "Person", name: "The Forthasia Health Founder" },
    publisher: { "@type": "Organization", name: ORG_NAME, url: SITE_URL },
  };

  const others = journal.filter((p) => p.slug !== slug);

  return (
    <>
      <JsonLd data={schema} />

      <PageHero eyebrow="The Founder's Journal" title={post.title}>
        <nav aria-label="Breadcrumb" className="data-tag text-[var(--color-bronze)]">
          <Link href="/journal" className="hover:text-[var(--color-ionian)]">
            The Founder's Journal
          </Link>
          <span aria-hidden> / </span>
          <span className="text-[var(--color-ink-soft)]">
            {new Date(post.date).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </nav>
      </PageHero>

      <Section>
        <article className="mx-auto max-w-2xl space-y-8">
          {post.blocks.map((b, i) => (
            <Reveal key={b.h2 ?? `p-${i}`}>
              {b.h2 ? (
                <h2 className="font-monument text-h3 mb-3 text-[var(--color-ink-umber)]">
                  {b.h2}
                </h2>
              ) : null}
              <div className="space-y-4 text-[var(--color-ink-soft)]">
                {b.body.split("\n\n").map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </article>

        <p className="mx-auto mt-12 max-w-2xl text-xs leading-relaxed text-[var(--color-bronze)]">
          This is a personal account from Forthasia Health's founder.
          Individual experiences vary; nothing here is medical advice or a
          guarantee of outcome. Forthasia Health does not diagnose, treat, or
          prescribe.
        </p>
      </Section>

      {others.length > 0 ? (
        <Section tone="dim">
          <p className="eyebrow">More from the journal</p>
          <ul className="mt-6 grid list-none gap-3 sm:grid-cols-2">
            {others.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/journal/${p.slug}`}
                  className="flex items-center justify-between gap-3 rounded-lg border border-[color-mix(in_srgb,var(--color-bronze)_28%,transparent)] bg-[var(--color-porcelain)] px-[22px] py-4 copy-sm text-[var(--color-ink-soft)] transition-colors hover:border-[var(--color-olympic-gold)] hover:text-[var(--color-ionian)]"
                >
                  {p.title}
                  <span aria-hidden className="shrink-0 text-[var(--color-olympic-gold)]">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}
    </>
  );
}
