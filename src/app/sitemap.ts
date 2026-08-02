import type { MetadataRoute } from "next";

export const dynamic = "force-static";

type Freq = "monthly" | "always" | "hourly" | "daily" | "weekly" | "yearly" | "never";

const FREQ: Freq = "monthly";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ekky-czteam6868.github.io/hw-team-website";
  const services = [
    "sales-pages",
    "websites",
    "ecommerce",
    "lms",
    "platforms",
    "ai-data",
  ];
  const work = [
    "dr-jade",
    "barbestro",
    "bossnoi",
    "camellia",
    "networkz",
    "z-intelligence",
    "lms",
  ];
  const page = (url: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url,
    lastModified: new Date(),
    changeFrequency: FREQ,
    priority,
  });
  return [
    page(base, 1),
    page(`${base}/services`, 0.9),
    ...services.map((s) => page(`${base}/services/${s}`, 0.8)),
    page(`${base}/work`, 0.9),
    ...work.map((w) => page(`${base}/work/${w}`, 0.7)),
    page(`${base}/process`, 0.7),
    page(`${base}/pricing`, 0.9),
    page(`${base}/about`, 0.6),
    page(`${base}/contact`, 0.9),
  ];
}
