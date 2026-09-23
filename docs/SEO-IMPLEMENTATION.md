# Fusion Floors SEO implementation — September 23, 2026

## Architecture and audit evidence

Next.js 15 App Router, React 19, TypeScript and Tailwind; deployed on Vercel (existing `.vercel/project.json`). Working tree was clean before this task. Existing forms, GHL integration, attribution, navigation and interactive galleries are retained.

Before changes, live requests showed:

- `http://fusionfloorswi.com/services/garage-floor-epoxy` → 308 to HTTPS non-WWW → 308 to HTTPS WWW → 200.
- `http://www.fusionfloorswi.com/services/garage-floor-epoxy` → 308 to HTTPS WWW.
- `https://fusionfloorswi.com/services/garage-floor-epoxy` → 308 to HTTPS WWW.
- All eight inspected historical paths returned 404, including the three old service pages, `/gallery-Flooring`, `/gallery`, `/showcases`, `/reviews`, and `/service-sunrooms`.

## Implemented URL policy

Canonical origin: `https://www.fusionfloorswi.com`; root `/`; lowercase page paths with no trailing slash. `lib/urls.ts` owns canonical URLs, indexable routes and redirect destinations. `middleware.ts` resolves origin, legacy route and known-page normalization together with an explicit 301, preserving query parameters and attribution. API calls and non-GET/HEAD requests are not redirected. Local/preview path redirects stay on the local/preview origin.

Vercel performs HTTP upgrades before middleware. Application code cannot override that upstream response. HTTPS non-WWW must reach this deployment for combined host/path redirects to work in one hop. No wildcard redirect sends unknown pages to the homepage. `/service-sunrooms` remains a real 404 because there is no legitimate replacement for sunroom additions.

## Service/city consolidation decision

All 24 service/city pages used the same template, service paragraphs, process, FAQs, price factors and photos. Their only local section reused the city's existing conditions, with no independently verified service/city project or testimonial. Some also fell back to a project from another city/service. These were not independent resources. Each now redirects to its main service, which retains the service details, finish catalogue, FAQs, quote form and links to all six existing city pages. City pages link directly to the four service parents. The 24 duplicate routes are excluded from the sitemap.

The sitemap now has 16 indexable pages and does not publish synthetic last-modified dates. The existing robots route correctly allows pages and rendering resources, excludes `/api/`, and advertises the canonical sitemap.

## Content accuracy

Removed four explicitly demo project stories, the explicitly demo Sparta testimonial, unverified neighborhood coverage and drive times, invented map coordinates/price range/address schema, and unconfirmed insurance/warranty/lifespan promises. Reframed assumed local housing and job patterns as practical project-planning guidance. No new cities, ratings, reviews, addresses, industries or projects were added. Existing separately configured customer reviews are retained, without aggregate-rating schema.

The six published city pages remain useful service/estimate entry points. Genuine owner-confirmed projects, photos and customer permission are still needed for stronger local evidence; no substitute proof was invented. Existing service-area coverage beyond the confirmed Sparta base should be confirmed by the owner.

## External deployment/domain configuration

1. Deploy this commit/worktree through the existing Vercel production project (no production deployment was performed by this task).
2. In Vercel Project → Settings → Domains, ensure `www.fusionfloorswi.com` is assigned to Production. Assign `fusionfloorswi.com` to the same deployment **without a separate dashboard redirect** so middleware can combine host and historical-path changes. If a dashboard redirect must be retained, choose 301 to HTTPS WWW and recognize that a legacy path may then require a second redirect.
3. Both domain DNS records already resolve to Vercel in the observed production requests. No DNS change is established as necessary. Retain valid DNS and certificates; use the exact per-domain records displayed by Vercel if correcting configuration, rather than assuming a generic IP.
4. Vercel's built-in HTTP → HTTPS 308 occurs before application routing. For a strict single-hop **301** from HTTP non-WWW, configure a redirect-capable edge in front of Vercel (or obtain a provider-supported override). The edge must resolve the same legacy/case/slash map and target the final HTTPS WWW URL in one rule evaluation while retaining query strings; a simple scheme-only rule would recreate chains. There is no repository setting here that can guarantee removal of Vercel's upstream HTTP hop. Existing 308s are permanent, not temporary.
5. After deployment, re-run all four host/scheme checks on the homepage, a current service path and a historical path. Confirm `Location`, status and hop count at the public edge.
6. In Search Console's existing domain property, submit `https://www.fusionfloorswi.com/sitemap.xml`, inspect/request indexing of the homepage and priority services/cities, and monitor Google-selected canonicals and retired-URL redirects. Keep the redirects long term. This host/protocol cleanup does not require creating a new site domain.

Vercel documents its upstream HTTPS behavior at https://vercel.com/docs/security/encryption and domain configuration at https://vercel.com/docs/domains/working-with-domains/deploying-and-redirecting.

## Reproducible checks

```sh
npm ci
npm run build
npm run lint
npm run typecheck
npm run start -- --port 3000
# In a second terminal:
npm run test:seo -- http://localhost:3000
```

The HTTP crawl validates all 16 sitemap pages, unique titles/descriptions, one H1/canonical, matching Open Graph metadata, parseable JSON-LD, linked business identity, image alt/sizing attributes, direct internal links and fragments, all 31 redirect mappings (case/slash/query variants), simulated production-host/protocol cases and real 404s. It never submits a lead.

## Migration risks

The 24 service/city consolidations and title/H1 changes can temporarily shift rankings while Google recrawls and combines signals. They preserve the inspected service content through relevant 301s, but rankings are not guaranteed. Actual single-hop behavior depends on the public edge and domain settings above. Schema intentionally omits an unverified street address; it does not assert eligibility for Google's address-dependent local business rich results.

## Final verification results

Production build, ESLint (zero warnings/errors), TypeScript, and the HTTP crawl all passed. Checks ran in `/tmp/fusion-seo-validation` because the original cloud-backed dependency tree stalled on file reads; all 48 application/configuration source files were compared byte for byte with the repository. All 25 public assets were also compared byte for byte and are unchanged. The live site was only inspected, not deployed or modified.

- 16 pages: HTTP 200, exactly one correct canonical/H1, unique title/description, matching Open Graph URL/title/description, indexable robots.
- Sitemap: exactly the 16 canonical pages, no duplicate, query, retired or combo URLs.
- Schema: JSON parsed on every page; one business identity, WebSite, appropriate Service and BreadcrumbList; no fabricated address/geo/rating/price attributes.
- Internal page links and fragments: every rendered link leads directly to a valid destination.
- 31 redirect mappings tested with original/case/trailing-slash variants and campaign parameters; destinations return 200 without a second app redirect.
- 16 production host/protocol/path simulations: correct 301 or canonical 200, no loops.
- 6 missing/discontinued page cases: real HTTP 404, noindex, no canonical.
- Desktop homepage visually inspected. Automated browser access became unavailable before completing mobile inspection; existing responsive CSS was preserved. This was a code/performance audit, not a field Core Web Vitals measurement.
- No live quote submission or GHL write was performed. Form and attribution code is unchanged.

Dependency maintenance: Next.js was patched from 15.5.23 to 15.5.26 after npm identified a critical image-optimization advisory (https://github.com/advisories/GHSA-2xp9-vwfh-vxw4). The compatible patch removes that critical finding. `npm audit` still reports three transitive findings (one moderate and two high, involving Next's bundled PostCSS and Sharp). These remain a separate dependency-security risk; no forced Next.js 16 upgrade or unverified dependency overrides were applied.

## Complete redirect map

All application redirects below use 301. Query strings are preserved. Path matching accepts case and trailing-slash variants, including the historical mixed-case `/gallery-Flooring`.

| Old path | Final canonical destination |
| --- | --- |
| `/service-garage-floors` | `https://www.fusionfloorswi.com/services/garage-floor-epoxy` |
| `/service-basement-floors` | `https://www.fusionfloorswi.com/services/basement-epoxy` |
| `/service-deck-patios` | `https://www.fusionfloorswi.com/services/patio-outdoor-coatings` |
| `/gallery-Flooring` | `https://www.fusionfloorswi.com/work` |
| `/showcases` | `https://www.fusionfloorswi.com/work` |
| `/gallery` | `https://www.fusionfloorswi.com/work` |
| `/reviews` | `https://www.fusionfloorswi.com/work#reviews` |
| `/services/garage-floor-epoxy/sparta` | `https://www.fusionfloorswi.com/services/garage-floor-epoxy` |
| `/services/garage-floor-epoxy/la-crosse` | `https://www.fusionfloorswi.com/services/garage-floor-epoxy` |
| `/services/garage-floor-epoxy/onalaska` | `https://www.fusionfloorswi.com/services/garage-floor-epoxy` |
| `/services/garage-floor-epoxy/west-salem` | `https://www.fusionfloorswi.com/services/garage-floor-epoxy` |
| `/services/garage-floor-epoxy/holmen` | `https://www.fusionfloorswi.com/services/garage-floor-epoxy` |
| `/services/garage-floor-epoxy/tomah` | `https://www.fusionfloorswi.com/services/garage-floor-epoxy` |
| `/services/basement-epoxy/sparta` | `https://www.fusionfloorswi.com/services/basement-epoxy` |
| `/services/basement-epoxy/la-crosse` | `https://www.fusionfloorswi.com/services/basement-epoxy` |
| `/services/basement-epoxy/onalaska` | `https://www.fusionfloorswi.com/services/basement-epoxy` |
| `/services/basement-epoxy/west-salem` | `https://www.fusionfloorswi.com/services/basement-epoxy` |
| `/services/basement-epoxy/holmen` | `https://www.fusionfloorswi.com/services/basement-epoxy` |
| `/services/basement-epoxy/tomah` | `https://www.fusionfloorswi.com/services/basement-epoxy` |
| `/services/commercial-epoxy/sparta` | `https://www.fusionfloorswi.com/services/commercial-epoxy` |
| `/services/commercial-epoxy/la-crosse` | `https://www.fusionfloorswi.com/services/commercial-epoxy` |
| `/services/commercial-epoxy/onalaska` | `https://www.fusionfloorswi.com/services/commercial-epoxy` |
| `/services/commercial-epoxy/west-salem` | `https://www.fusionfloorswi.com/services/commercial-epoxy` |
| `/services/commercial-epoxy/holmen` | `https://www.fusionfloorswi.com/services/commercial-epoxy` |
| `/services/commercial-epoxy/tomah` | `https://www.fusionfloorswi.com/services/commercial-epoxy` |
| `/services/patio-outdoor-coatings/sparta` | `https://www.fusionfloorswi.com/services/patio-outdoor-coatings` |
| `/services/patio-outdoor-coatings/la-crosse` | `https://www.fusionfloorswi.com/services/patio-outdoor-coatings` |
| `/services/patio-outdoor-coatings/onalaska` | `https://www.fusionfloorswi.com/services/patio-outdoor-coatings` |
| `/services/patio-outdoor-coatings/west-salem` | `https://www.fusionfloorswi.com/services/patio-outdoor-coatings` |
| `/services/patio-outdoor-coatings/holmen` | `https://www.fusionfloorswi.com/services/patio-outdoor-coatings` |
| `/services/patio-outdoor-coatings/tomah` | `https://www.fusionfloorswi.com/services/patio-outdoor-coatings` |

Host rules for requests reaching the app:

- `http://fusionfloorswi.com/<path>` → `https://www.fusionfloorswi.com/<final-path>`
- `http://www.fusionfloorswi.com/<path>` → `https://www.fusionfloorswi.com/<final-path>`
- `https://fusionfloorswi.com/<path>` → `https://www.fusionfloorswi.com/<final-path>`
- Mixed-case/trailing-slash variants of current pages → their lowercase, no-trailing-slash canonical path (root retains `/`).

`<final-path>` resolves the table above in the same hop. Vercel's upstream behavior is documented separately above. `/about` and `/contact` stay live; `/service-sunrooms` and unrecognized routes return 404.

## Rendered metadata map

The following was extracted from the final production HTTP responses, not inferred from source configuration.

| URL | Title | H1 | Canonical |
| --- | --- | --- | --- |
| `/` | Epoxy Flooring & Garage Floor Coatings in Sparta, WI \| Fusion Floors | Epoxy Flooring & Garage Floor Coatings in Sparta, WI | `https://www.fusionfloorswi.com/` |
| `/about` | About Fusion Floors in Sparta, WI \| Fusion Floors | Fusion Floors | `https://www.fusionfloorswi.com/about` |
| `/contact` | Free Estimate for Epoxy Flooring & Concrete Coatings \| Fusion Floors | Tell us about your floor. | `https://www.fusionfloorswi.com/contact` |
| `/work` | Epoxy & Concrete Coating Projects and Reviews \| Fusion Floors | Our work. | `https://www.fusionfloorswi.com/work` |
| `/services` | Epoxy Flooring & Concrete Coating Services \| Fusion Floors | What we do. | `https://www.fusionfloorswi.com/services` |
| `/locations` | Epoxy Flooring Service Areas in Western Wisconsin \| Fusion Floors | Where we work. | `https://www.fusionfloorswi.com/locations` |
| `/services/garage-floor-epoxy` | Garage Floor Epoxy & Concrete Coatings \| Fusion Floors | Garage Floor Epoxy & Concrete Coatings | `https://www.fusionfloorswi.com/services/garage-floor-epoxy` |
| `/services/basement-epoxy` | Basement Epoxy Flooring in Western Wisconsin \| Fusion Floors | Basement Epoxy Flooring & Concrete Coatings | `https://www.fusionfloorswi.com/services/basement-epoxy` |
| `/services/commercial-epoxy` | Commercial Epoxy Flooring in Western Wisconsin \| Fusion Floors | Commercial Epoxy Flooring & Concrete Coatings | `https://www.fusionfloorswi.com/services/commercial-epoxy` |
| `/services/patio-outdoor-coatings` | Patio & Outdoor Concrete Coatings in Western Wisconsin \| Fusion Floors | Patio & Outdoor Concrete Coatings | `https://www.fusionfloorswi.com/services/patio-outdoor-coatings` |
| `/locations/sparta` | Epoxy Flooring & Garage Floor Coating Services in Sparta, WI \| Fusion Floors | Epoxy Flooring & Garage Floor Coating Services in Sparta, WI | `https://www.fusionfloorswi.com/locations/sparta` |
| `/locations/la-crosse` | Epoxy Flooring & Garage Floor Coatings in La Crosse, WI \| Fusion Floors | Epoxy Flooring & Garage Floor Coatings in La Crosse, WI | `https://www.fusionfloorswi.com/locations/la-crosse` |
| `/locations/onalaska` | Epoxy Flooring & Garage Floor Coatings in Onalaska, WI \| Fusion Floors | Epoxy Flooring & Garage Floor Coatings in Onalaska, WI | `https://www.fusionfloorswi.com/locations/onalaska` |
| `/locations/west-salem` | Epoxy Flooring & Garage Floor Coatings in West Salem, WI \| Fusion Floors | Epoxy Flooring & Garage Floor Coatings in West Salem, WI | `https://www.fusionfloorswi.com/locations/west-salem` |
| `/locations/holmen` | Epoxy Flooring & Garage Floor Coatings in Holmen, WI \| Fusion Floors | Epoxy Flooring & Garage Floor Coatings in Holmen, WI | `https://www.fusionfloorswi.com/locations/holmen` |
| `/locations/tomah` | Epoxy Flooring & Garage Floor Coatings in Tomah, WI \| Fusion Floors | Epoxy Flooring & Garage Floor Coatings in Tomah, WI | `https://www.fusionfloorswi.com/locations/tomah` |
