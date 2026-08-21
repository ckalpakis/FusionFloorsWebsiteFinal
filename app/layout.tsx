import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import AttributionCapture from "@/components/AttributionCapture";
import GhlChatWidget from "@/components/GhlChatWidget";
import PageMain from "@/components/PageMain";
import { siteConfig } from "@/config/site.config";
import { localBusinessSchema } from "@/lib/schema";

// Type pairing for Fusion Floors — see tailwind.config.ts for the why.
// Barlow Condensed carries the headlines (industrial signage, condensed
// enough for long "[service] in [town]" H1s); IBM Plex Sans carries body
// copy (technical, strong numerals for phone/stats/process steps).
//
// Unlike the single-weight face this replaced, both are multi-weight, so
// the `font-semibold` classes already scattered through the components
// finally do something. `.font-display` defaults to 800 in globals.css —
// any explicit weight utility still overrides it.
const displayFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-display",
});
const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.business.name} | ${siteConfig.hero.headline}`,
    template: `%s | ${siteConfig.business.name}`,
  },
  description: siteConfig.business.tagline,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.business.name,
    title: siteConfig.business.name,
    description: siteConfig.business.tagline,
    url: siteConfig.siteUrl,
    images: [{ url: siteConfig.hero.posterSrc }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.business.name,
    description: siteConfig.business.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable} bg-paper text-ink font-body antialiased`}>
        <JsonLd data={localBusinessSchema()} />
        <AttributionCapture />
        <a href="#main" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <Header />
        <PageMain>{children}</PageMain>
        <Footer />
        <GhlChatWidget />
      </body>
    </html>
  );
}
