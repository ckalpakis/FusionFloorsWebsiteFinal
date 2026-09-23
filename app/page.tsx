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
  title: "Epoxy Flooring & Garage Floor Coatings in Sparta, WI",
  description: "Professional epoxy and concrete floor coatings for garages, basements, patios and commercial spaces in Sparta and Western Wisconsin. Get a free estimate from Fusion Floors.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* FAQPage schema lives on the homepage only — duplicating it across
          every page is a common spam pattern search engines discount. */}
      <JsonLd data={faqSchema(siteConfig.faq)} />
      <Hero />
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
