import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const routes = ["/", "/projects", "/privacy", "/legal"]; 
  return routes.map((url) => ({ url: `${base}${url}`, changeFrequency: "monthly", priority: url === "/" ? 1 : 0.6 }));
}
