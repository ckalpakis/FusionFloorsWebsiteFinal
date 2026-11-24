import type { Metadata } from "next";
import { siteConfig, ServiceEntry } from "@/config/site.config";
import { canonicalUrl } from "@/lib/urls";

export function pageMetadata({ title, description, path, image = siteConfig.hero.posterSrc, index = true }: {
  title: string; description: string; path: string; image?: string; index?: boolean;
}): Metadata {
  const fullTitle = `${title} | ${siteConfig.business.name}`;
  const url = canonicalUrl(path);
  return {
    // All URLs are absolute. A null base preserves the homepage trailing slash
    // instead of Next.js normalizing its canonical/OG URL to the bare origin.
    metadataBase: null,
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    robots: { index, follow: true },
    openGraph: {
      type: "website", siteName: siteConfig.business.name,
      title: fullTitle, description, url,
      images: [{ url: `${siteConfig.siteUrl}${image}` }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [`${siteConfig.siteUrl}${image}`] },
  };
}

// Describe the subject without assigning an unverified project location.
export function serviceAlt(service: ServiceEntry) {
  return service.title;
}

export function galleryAlt(item: { category: string; caption: string }) {
  return `${item.category} — ${item.caption}`;
}
