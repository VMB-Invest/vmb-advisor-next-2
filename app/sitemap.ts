import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const routes = ["/", "/sobre", "/equipes", "/local", "/carreiras"].map(
    (route) => ({
      url: new URL(route, siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "/" ? 1 : 0.7,
    })
  );

  return routes;
}
