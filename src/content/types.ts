import type { Faq } from "@/components/seo/FaqBlock";

/**
 * One search intent per entry. The query phrasing is repeated in `h1`,
 * `answerFirst` (the 40–60-word paragraph AI engines quote) and the FAQ.
 */
export type PageEntry = {
  slug: string;
  /** <title> */
  title: string;
  /** on-page H1 */
  h1: string;
  metaDescription: string;
  keywords: string[];
  /** 40–60 words, repeats the query phrasing, answer-first */
  answerFirst: string;
  blocks: { h2: string; body: string }[];
  bullets?: string[];
  faqs: Faq[];
  /** ISO date — surfaced on-page and in schema */
  lastReviewed: string;
};

export type Hub = "treatments" | "wellness" | "destinations";

export const HUB_LABEL: Record<Hub, string> = {
  treatments: "Treatments",
  wellness: "Wellness",
  destinations: "Destinations",
};
