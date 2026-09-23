import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import ServicesGrid from "@/components/ServicesGrid";
import MidPageCTA from "@/components/MidPageCTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/config/site.config";

export const metadata = pageMetadata({
  title: "Epoxy Flooring & Concrete Coating Services",
  description: "Explore garage, basement, commercial and outdoor concrete coatings from Fusion Floors in Sparta and Western Wisconsin. Request a free estimate.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.siteUrl },
          { name: "Services", url: `${siteConfig.siteUrl}/services` },
        ])}
      />
      <nav aria-label="Breadcrumb" className="bg-ink text-xs text-paper/60 px-6 pt-8">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="hover:text-accent">Home</Link> /{" "}
          <span className="text-paper">Services</span>
        </div>
      </nav>
      <ServicesGrid headingLevel="h1" />
      <MidPageCTA
        heading="Don't see exactly what you need?"
        subhead="Tell us about the project — free estimates, no pressure."
      />
    </>
  );
}
