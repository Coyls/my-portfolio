import { SiteConfig } from "@/site-config";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const { prodUrl } = SiteConfig;
  return [
    {
      url: prodUrl,
      lastModified: new Date(),
      alternates: {
        languages: {
          fr: `${prodUrl}/fr`,
          en: `${prodUrl}/en`,
        },
      },
    },
  ];
}
