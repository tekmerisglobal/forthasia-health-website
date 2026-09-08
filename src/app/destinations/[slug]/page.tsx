import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SpokePage } from "@/components/seo/SpokePage";
import { destinations } from "@/content/destinations";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = destinations.find((x) => x.slug === slug);
  if (!d) return {};
  const url = `${SITE_URL}/destinations/${slug}`;
  return {
    title: d.title,
    description: d.metaDescription,
    keywords: d.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: d.title,
      description: d.metaDescription,
      url,
      type: "article",
      siteName: "Forthasia Health",
    },
    robots: { index: true, follow: true },
  };
}

export default async function DestinationSpokePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = destinations.find((x) => x.slug === slug);
  if (!entry) notFound();

  const related = [
    ...destinations
      .filter((d) => d.slug !== slug)
      .map((d) => ({ label: d.h1, href: `/destinations/${d.slug}` })),
    { label: "All destinations & treatments — overview", href: "/destinations" },
    { label: "Treatments we facilitate", href: "/treatments" },
    { label: "Visa & entry for Hainan", href: "/visa-guide" },
  ];

  return (
    <SpokePage
      hub="destinations"
      entry={entry}
      schemaType="Place"
      related={related}
    />
  );
}
