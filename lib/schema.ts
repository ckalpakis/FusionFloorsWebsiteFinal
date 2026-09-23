// JSON-LD builders. Kept as plain functions returning objects — render them
// with <JsonLd data={...} /> (components/JsonLd.tsx). Centralizing this
// means every page gets consistent, valid schema instead of hand-rolled
// script tags copy-pasted per page.

import { siteConfig, ServiceEntry, LocationEntry } from "@/config/site.config";

import { canonicalUrl } from "@/lib/urls";

const { business, siteUrl } = siteConfig;

// Sitewide LocalBusiness — render once, in the root layout.
// Swap "LocalBusiness" for a more specific type where one exists
// (GeneralContractor, RoofingContractor, Electrician, Plumber, etc.)
// — a more specific @type is stronger signal than the generic one.
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": business.schemaType,
    "@id": `${siteUrl}/#business`,
    name: business.name,
    legalName: business.legalName,
    url: `${siteUrl}/`,
    telephone: business.phoneHref.replace("tel:", ""),
    email: business.email,
    image: `${siteUrl}${business.logoSrc}`,
    logo: `${siteUrl}${business.logoSrc}`,
    areaServed: siteConfig.locations.map((l) => ({
      "@type": "City",
      name: `${l.name}, ${l.state}`,
    })),
    sameAs: business.sameAs,
  };
}

export function serviceSchema(service: ServiceEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.metaDescription,
    url: `${siteUrl}/services/${service.slug}`,
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: siteConfig.locations.map((l) => ({
      "@type": "City",
      name: `${l.name}, ${l.state}`,
    })),
  };
}

export function locationServiceSchema(location: LocationEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${business.name} — ${location.name}, ${location.state}`,
    description: location.metaDescription,
    url: `${siteUrl}/locations/${location.slug}`,
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: {
      "@type": "City",
      name: `${location.name}, ${location.state}`,
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: canonicalUrl(new URL(item.url).pathname),
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: `${siteUrl}/`,
    name: business.name,
    publisher: { "@id": `${siteUrl}/#business` },
  };
}
