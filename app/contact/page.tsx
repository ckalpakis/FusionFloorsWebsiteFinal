import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import Reviews from "@/components/Reviews";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/config/site.config";

export const metadata = pageMetadata({
  title: "Free Estimate for Epoxy Flooring & Concrete Coatings",
  description: "Request a free estimate from Fusion Floors for garage, basement, commercial or patio coatings in Western Wisconsin. Call (608) 633-4920 or send project details.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.siteUrl },
          { name: "Contact", url: `${siteConfig.siteUrl}/contact` },
        ])}
      />
      {/* max-w-6xl to line up with the quote form below, which is now a
          two-column block at the same width as every other section. The
          trust badges that used to sit here were removed rather than
          restyled — the form's own left column renders the same list, and
          showing it twice on one short page just looked like a bug. */}
      <div className="px-6 pt-8 max-w-6xl mx-auto">
        <nav aria-label="Breadcrumb" className="text-xs text-ink/50">
          <Link href="/" className="hover:text-accent-ink">Home</Link> /{" "}
          <span className="text-ink">Contact</span>
        </nav>
      </div>
      <QuoteForm headingLevel="h1" />
      <Reviews />
    </>
  );
}
