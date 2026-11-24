import { siteConfig } from "@/config/site.config";
import { BlogPosts } from "@/lib/blog";

export const SITE_URL = siteConfig.siteUrl;

/** Page URLs use lowercase paths without a trailing slash; the root keeps /. */
export function canonicalUrl(path = "/") {
  const pathname = path.split(/[?#]/, 1)[0];
  return `${SITE_URL}${pathname === "/" ? "/" : `/${pathname.replace(/^\/+|\/+$/g, "").toLowerCase()}`}`;
}

export const indexablePaths = [
  "/", "/about", "/services", "/locations", "/work", "/contact",
  ...siteConfig.services.map((s) => `/services/${s.slug}`),
  ...siteConfig.locations.map((l) => `/locations/${l.slug}`),
  ...BlogPosts.indexablePaths(),
];

/** Routes that exist even when noindex, so case and trailing slashes still collapse. */
const routablePaths = new Set([...indexablePaths, "/blog"]);

// The retired combo pages repeated the service copy and the city's generic
// conditions. Their service parent contains the same information and CTAs.
export const redirectMap: Record<string, string> = {
  "/service-garage-floors": "/services/garage-floor-epoxy",
  "/service-basement-floors": "/services/basement-epoxy",
  "/service-deck-patios": "/services/patio-outdoor-coatings",
  "/gallery-flooring": "/work",
  "/showcases": "/work",
  "/gallery": "/work",
  "/reviews": "/work#reviews",
  ...Object.fromEntries(siteConfig.services.flatMap((s) =>
    siteConfig.locations.map((l) => [`/services/${s.slug}/${l.slug}`, `/services/${s.slug}`])
  )),
};

/** Resolve host, protocol, legacy path, casing and slash in a single hop. */
export function seoRedirect(url: URL, host: string, protocol: string): URL | null {
  const normalized = url.pathname.toLowerCase().replace(/\/+$/, "") || "/";
  const replacement = redirectMap[normalized];
  const knownPath = routablePaths.has(normalized) || normalized === "/sitemap.xml" || normalized === "/robots.txt";
  const target = replacement ?? (knownPath ? normalized : url.pathname);
  const productionHost = /^(www\.)?fusionfloorswi\.com$/i.test(host);
  const wrongOrigin = productionHost && (host !== "www.fusionfloorswi.com" || protocol !== "https");

  if (!wrongOrigin && target === url.pathname) return null;
  // Local and preview path redirects stay on their own origin for testing.
  const destination = new URL(target, productionHost ? SITE_URL : url.origin);
  destination.search = url.search; // Preserve campaign attribution and click IDs.
  return destination;
}
