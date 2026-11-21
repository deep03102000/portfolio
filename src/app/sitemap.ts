import type { MetadataRoute } from "next";
import { navLinks } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map((l) => ({
    url: `${siteUrl}${l.href === "/" ? "" : l.href}`,
    changeFrequency: "monthly",
    priority: l.href === "/" ? 1 : 0.7,
  }));
}
