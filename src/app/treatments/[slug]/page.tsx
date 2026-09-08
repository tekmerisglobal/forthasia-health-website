import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SpokePage } from "@/components/seo/SpokePage";
import { treatments } from "@/content/treatments";
import { SITE_URL } from "@/lib/site";

/** schema.org type per intent (see the intent → landing-page map). */
const SCHEMA_TYPE: Record<string, string> = {
  oncology: "MedicalTherapy",
  orthopaedics: "MedicalProcedure",
  dental: "MedicalProcedure",
  regenerative: "MedicalTherapy",
  "executive-screening": "MedicalProcedure",
  tcm: "MedicalTherapy",
};

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = treatments.find((x) => x.slug === slug);
  if (!t) return {};
  const url = `${SITE_URL}/treatments/${slug}`;
  return {
    title: t.title,
    description: t.metaDescription,
    keywords: t.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: t.title,
      description: t.metaDescription,
      url,
      type: "article",
      siteName: "Forthasia Health",
    },
    robots: { index: true, follow: true },
  };
}

export default async function TreatmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = treatments.find((x) => x.slug === slug);
  if (!entry) notFound();

  const related = [
    ...treatments
      .filter((t) => t.slug !== slug)
      .slice(0, 3)
      .map((t) => ({ label: t.h1, href: `/treatments/${t.slug}` })),
    { label: "Where these pathways run — Hainan & Boao Lecheng", href: "/destinations/hainan" },
    { label: "How every facility is verified — The Standard", href: "/standard" },
  ];

  return (
    <SpokePage
      hub="treatments"
      entry={entry}
      schemaType={SCHEMA_TYPE[slug] ?? "MedicalProcedure"}
      related={related}
    />
  );
}
