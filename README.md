# Local Service Site Starter

A config-driven Next.js template for local-trade business sites (concrete,
roofing, landscaping, junk removal, etc.) — the pattern agencies like
SiteRabbits use to produce many client sites fast from one component set.

## How it's structured

- `config/site.config.ts` — every piece of business-specific content: name,
  phone, services, FAQ, gallery, form options. **This is the only file you
  should need to edit to stand up a new client.**
- `components/` — the reusable sections (Hero, About, ServicesGrid,
  VideoGallery, WorkGallery, FAQAccordion, QuoteForm, Header, Footer). They
  read from `site.config.ts`, never hardcode copy.
- `app/` — thin pages (`/`, `/about`, `/services`, `/work`, `/contact`) that
  assemble the components. Add real routing/anchors as the site grows.
- `app/api/quote/route.ts` — quote form handler, syncs every submission to
  GoHighLevel (contact + note + opportunity). Rate-limited and
  honeypot-protected. See "GHL setup" below.
- `lib/ghl.ts` — server-only GHL v2 API client (contact upsert, opportunity
  upsert, notes). Never imported into client components — `server-only`
  enforces that at build time.
- `lib/attribution.ts` + `components/AttributionCapture.tsx` — captures
  UTM params and Google/Meta click IDs on landing, persists them through
  the visit, and attaches them to the lead so GHL shows real ad
  attribution instead of every lead saying "direct."
- `app/api/ghl-webhook/route.ts` — receives events GHL sends back (e.g. a
  workflow posting "appointment booked"), so the integration is two-way.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in GHL credentials, see below
npm run dev
```

Then drop real assets into `public/images` and `public/videos`, and fill in
`config/site.config.ts` with the client's actual content.

## GHL setup

This template pushes every quote-form submission into GoHighLevel as a
contact + note + opportunity, with UTM attribution attached. To wire it up
for a client's sub-account:

1. **Create a Private Integration API key.** In the client's GHL
   sub-account: Settings > Private Integrations > Create. Scopes needed:
   `contacts.write`, `contacts.readonly`, `opportunities.write`,
   `locations/customFields.readonly`. Put the key in `.env.local` as
   `GHL_API_KEY`.
2. **Get the location ID.** Settings > Business Profile (or the URL when
   you're in the sub-account — it's the ID after `/location/`). Set
   `GHL_LOCATION_ID`.
3. **Create a pipeline for website leads** (or reuse an existing one) under
   Opportunities > Pipelines. Set `GHL_PIPELINE_ID` and
   `GHL_PIPELINE_STAGE_ID` to the stage new leads should land in — e.g.
   "New Lead" or "Needs Quote."
4. **Create the required contact custom fields.** Under Settings > Custom
   Fields, create `Service Requested` (single line or dropdown) and
   `Project Details` (multi line). Copy their IDs into `.env.local` as
   `GHL_CUSTOM_FIELD_SERVICE_ID` and
   `GHL_CUSTOM_FIELD_PROJECT_DETAILS_ID`. Quote submissions fail instead
   of displaying a false success message if either ID is missing or the
   GHL sync fails.
5. **(Optional) Chat widget.** Sites > Chat Widget in GHL gives you a
   widget ID — drop it into `config/site.config.ts` under `ghl.chatWidgetId`
   and it loads sitewide automatically.
6. **(Optional) Booking calendar.** Create a calendar under Calendars, copy
   its ID into `config/site.config.ts` under `ghl.calendarId` — it renders
   as an embedded booking widget under the quote form on `/contact`.
7. **(Optional) Two-way sync.** In a GHL workflow, add a Webhook action
   pointed at `https://yourdomain.com/api/ghl-webhook`, with a header
   `x-webhook-secret` matching `GHL_WEBHOOK_SECRET` in `.env.local`. Useful
   for e.g. notifying the site when an appointment is booked or an
   opportunity is marked Won.

**What does NOT get pushed to GHL automatically:** the "project photos"
upload in the quote form. GHL's media upload endpoint takes multipart form
data, which is a slightly bigger lift than the JSON endpoints above — for
now those files aren't wired up. The straightforward path is uploading
them to your own storage (S3, Cloudflare R2, Vercel Blob) and including
the resulting URLs in the GHL note (`lib/ghl.ts` -> `addGhlNote`).

## Using this with Claude Code

1. **Clone this folder per client.** Point Claude Code at it and say
   "update site.config.ts for [business name], a [trade] in [city], with
   these services: ...". That alone gets you 80% of a working site.
2. **Do a real design pass — don't ship the placeholder look.** Ask Claude
   Code to pick a palette and typeface pairing specific to this trade and
   region — a roofer in Phoenix and a landscaper in Maine shouldn't end up
   with the same accent color. Otherwise every site you make will look
   like a reskin of the last one, which is the exact trap agencies like
   this fall into.

   This copy of the template has already had that pass done for Fusion
   Floors: `accent: #00B8FF` (fixed brand cyan), cool concrete neutrals
   built to sit under it, and Barlow Condensed / IBM Plex Sans in place
   of the stock Anton / Inter. See the comments in `tailwind.config.ts`.

   One rule that came out of it and should carry to any client whose
   accent is a bright mid-tone: **a bright accent is not a text color on
   light backgrounds.** `#00B8FF` on the light section background is
   ~2.1:1 — well under WCAG AA. So there's a second token,
   `accent-ink`, that's the same hue driven dark enough to read as copy
   (~6:1). Accent on dark sections, `accent-ink` on light ones, and text
   sitting on a solid accent fill is `ink`, not `paper`.
3. **Ask for real photo/video assets** or generate/source placeholders —
   the layout is built assuming a hero video and 3–8 jobsite photos.
4. **Wire up GHL** — walk through the "GHL setup" section above with
   Claude Code once you have the client's sub-account credentials.
5. **Deploy** — `vercel deploy` or connect the repo to Cloudflare Pages.
   Set the same env vars from `.env.local` in your hosting provider's
   dashboard — they won't come along automatically.

## What's deliberately NOT included

- A CMS. For a handful of client sites, editing `site.config.ts` directly
  is faster than standing up a headless CMS. Add one only once you're
  managing dozens of these and need non-developers editing content.
- Real design tokens. See point 2 above — that's the one step you
  shouldn't skip per client.
- GHL media upload for the quote form's photo attachments — see the note
  in "GHL setup."
