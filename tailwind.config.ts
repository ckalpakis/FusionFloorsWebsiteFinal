import type { Config } from "tailwindcss";

// FUSION FLOORS — Sparta, WI. Epoxy flooring.
//
// The palette is built around the one fixed point: accent #00B8FF, the
// electric cyan of a fresh polyaspartic topcoat under shop lights. Every
// other token is a cool, blue-shifted concrete gray chosen to sit under
// that cyan — the previous neutrals were warm (#0a0a0a / #fafaf9), which
// made the accent read like a sticker pasted onto a beige page. Cool
// neutrals make it read like light on a wet gloss floor, which is the
// actual product.
//
// Regional note: this is western Wisconsin, not the desert southwest —
// the reference points are ground concrete, road salt, and gray winter
// light, so the grays stay cold and slightly blue rather than taupe.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Cured epoxy in shadow — near-black with a blue cast, never warm.
        ink: "#0B1014",
        // A step lighter than ink — used to alternate consecutive dark
        // sections (ServicesGrid / VideoGallery / WorkGallery) so they
        // read as distinct blocks instead of one undifferentiated slab
        // of black. Not meant to be dramatic — just enough separation
        // that a section boundary is visible without a hard white gap.
        surface: "#161D23",
        // Polished concrete, not paper white. Cool enough that the cyan
        // accent sitting on it doesn't look artificially bright.
        paper: "#F1F4F6",
        accent: {
          // Fixed brand accent — do not change.
          DEFAULT: "#00B8FF",
          // Same hue driven dark enough to be legible as TEXT on paper.
          // #00B8FF on #F1F4F6 is ~2.1:1 — it fails WCAG badly for copy,
          // so accent-colored text on light sections uses this (~6:1)
          // instead. On dark sections plain `accent` is ~8.5:1 and is
          // the right choice. Rule of thumb: accent on dark, accent-ink
          // on light, and text sitting on a solid accent fill is `ink`.
          ink: "#0A6588",
        },
      },
      fontFamily: {
        // Barlow Condensed — a condensed grotesk drawn from American
        // industrial/manufacturing signage. Condensed matters here for a
        // practical reason, not just a stylistic one: the local-SEO
        // headlines are long ("Patio & Outdoor Coatings in
        // Sparta, WI") and have to survive at text-6xl on one or two
        // lines.
        display: ["var(--font-display)"],
        // IBM Plex Sans — engineered, slightly technical, with strong
        // numerals for phone numbers, stats, and process steps. Reads
        // like a spec sheet next to the signage headlines.
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
export default config;
