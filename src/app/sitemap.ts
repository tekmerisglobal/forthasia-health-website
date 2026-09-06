import type { MetadataRoute } from "next";
import { primaryNav } from "@/lib/nav";

const BASE = "https://forthasiahealth.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/consultation",
    ...primaryNav.map((n) => n.href),
    "/privacy",
    "/terms",
  ];
  const legal = new Set(["/privacy", "/terms"]);
  const now = new Date();
  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : legal.has(route) ? 0.3 : 0.7,
  }));
}
