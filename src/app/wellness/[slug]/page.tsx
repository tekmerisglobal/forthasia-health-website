import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SpokePage } from "@/components/seo/SpokePage";
import { wellness } from "@/content/wellness";
import { SITE_URL } from "@/lib/site";

const SCHEMA_TYPE: Record<string, string> = {
  longevity: "MedicalTherapy",
  "medi-spa": "Service",
  retreats: "Service",
};

export function generateStaticParams() {
  return wellness.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const w = wellness.find((x) => x.slug === slug);
  if (!w) return {};
  const url = `${SITE_URL}/wellness/${slug}`;
  return {
    title: w.title,
    description: w.metaDescription,
    keywords: w.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: w.title,
      description: w.metaDescription,
      url,
      type: "article",
      siteName: "Forthasia Health",
    },
    robots: { index: true, follow: true },
  };
}

export default async function WellnessSpokePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = wellness.find((x) => x.slug === slug);
  if (!entry) notFound();

  const related = [
    ...wellness
      .filter((w) => w.slug !== slug)
      .map((w) => ({ label: w.h1, href: `/wellness/${w.slug}` })),
    { label: "The Wellness Continuum — overview", href: "/wellness" },
    { label: "Executive health screening", href: "/treatments/executive-screening" },
    { label: "Recovery routes & tourism", href: "/recovery" },
  ];

  return (
    <SpokePage
      hub="wellness"
      entry={entry}
      schemaType={SCHEMA_TYPE[slug] ?? "Service"}
      related={related}
    />
  );
}
