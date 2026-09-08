import type { MetadataRoute } from "next";
import { primaryNav } from "@/lib/nav";
import { SITE_URL } from "@/lib/site";
import { treatments } from "@/content/treatments";
import { wellness } from "@/content/wellness";
import { destinations } from "@/content/destinations";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const statics = [
    "/",
    "/consultation",
    "/partners",
    "/treatments",
    "/peptides",
    ...primaryNav.map((n) => n.href),
    "/privacy",
    "/terms",
  ];
  const legal = new Set(["/privacy", "/terms"]);

  const staticEntries: MetadataRoute.Sitemap = statics.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : legal.has(route) ? 0.3 : 0.7,
  }));

  const spoke = (
    base: string,
    items: { slug: string; lastReviewed: string }[],
    priority: number,
  ): MetadataRoute.Sitemap =>
    items.map((i) => ({
      url: `${SITE_URL}${base}/${i.slug}`,
      lastModified: new Date(i.lastReviewed),
      changeFrequency: "monthly",
      priority,
    }));

  return [
    ...staticEntries,
    ...spoke("/treatments", treatments, 0.9),
    ...spoke("/wellness", wellness, 0.8),
    ...spoke("/destinations", destinations, 0.8),
  ];
}
