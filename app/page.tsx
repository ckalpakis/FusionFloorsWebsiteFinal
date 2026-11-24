import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesGrid from "@/components/ServicesGrid";
import VideoGallery from "@/components/VideoGallery";
import WorkGallery from "@/components/WorkGallery";
import Reviews from "@/components/Reviews";
import FAQAccordion from "@/components/FAQAccordion";
import QuoteForm from "@/components/QuoteForm";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { siteConfig } from "@/config/site.config";

export const metadata = pageMetadata({
  title: siteConfig.hero.headline,
  description:
    "Epoxy and concrete floor coatings for garages, basements, patios, and commercial spaces across Western Wisconsin and the La Crosse area. Free estimates from Fusion Floors.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* FAQPage schema is emitted only where the same questions are visible. */}
      <JsonLd data={faqSchema(siteConfig.faq)} />
      <Hero />
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto border-t border-accent-ink/30 pt-6">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-ink">
            <span className="inline-block h-px w-6 bg-accent-ink" aria-hidden />
            Service areas
          </p>
          <h2 className="font-display uppercase text-4xl md:text-5xl leading-none mt-3">
            Cities we <span className="text-accent-ink">serve.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-ink/70">
            Based in Sparta, Fusion Floors coats garage, basement, patio, and commercial floors across Western Wisconsin and the La Crosse area.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {siteConfig.locations.map((location) => (
              <li key={location.slug}>
                <Link
                  href={`/locations/${location.slug}`}
                  className="inline-block border border-ink/15 rounded-full px-4 py-2 text-sm hover:border-accent-ink hover:text-accent-ink transition-colors"
                >
                  Epoxy floor coatings in {location.name}, {location.state}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <About />
      <ServicesGrid />
      <VideoGallery />
      <WorkGallery />
      <Reviews />
      <FAQAccordion />
      <QuoteForm />
    </>
  );
}
