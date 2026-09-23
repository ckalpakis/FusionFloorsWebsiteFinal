import type { MetadataRoute } from "next";
import { canonicalUrl, indexablePaths } from "@/lib/urls";

export default function sitemap(): MetadataRoute.Sitemap {
  // Do not invent lastModified dates on every build.
  return indexablePaths.map((path) => ({ url: canonicalUrl(path) }));
}
