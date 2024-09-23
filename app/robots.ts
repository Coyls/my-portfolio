import { SiteConfig } from "@/site-config";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const { prodUrl } = SiteConfig;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "",
    },
    sitemap: `${prodUrl}/sitemap.xml`,
  };
}
