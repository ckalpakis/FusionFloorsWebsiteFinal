"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/config/site.config";
import { getStoredAttribution } from "@/lib/attribution";
import GhlBookingWidget from "@/components/GhlBookingWidget";

type Status = "idle" | "sending" | "success" | "error";

// Pulled out because they're repeated across a dozen inputs — one place
// to change the field treatment instead of a dozen near-identical class
// strings that drift apart. Squared corners and a cyan focus ring keep
// the form in the same visual language as the rest of the site rather
// than looking like unstyled browser defaults.
const fieldClass =
  "w-full rounded-sm border border-ink/20 bg-white px-4 py-3 text-ink placeholder:text-ink/40 transition-colors focus:border-accent-ink focus:outline-none focus:ring-1 focus:ring-accent-ink";
const labelClass =
  "block text-xs font-semibold uppercase tracking-widest text-ink/60 mb-1.5";

export default function QuoteForm({
  headingLevel = "h2",
  // The homepage, /work and /contact run their sections at max-w-6xl, so
  // the form matches. Service and location pages are max-w-4xl the whole
  // way down (a deliberate reading measure for long copy) — "narrow"
  // keeps the form from overhanging the column it sits under there.
  width = "wide",
}: {
  headingLevel?: "h1" | "h2";
  width?: "wide" | "narrow";
}) {
  const [status, setStatus] = useState<Status>("idle");
  const { quoteForm, business, hero } = siteConfig;
  const Heading = headingLevel;
  const container = width === "wide" ? "max-w-6xl" : "max-w-4xl";

  // Same last-word-in-accent treatment as every other section header.
  const words = quoteForm.heading.trim().split(" ");
  const headingTail = words[words.length - 1];
  const headingLead = words.slice(0, -1).join(" ");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot: a field named "website" that's hidden from real visitors
    // via CSS but visible to most bots that blindly fill every input.
    // If it's non-empty, silently drop the submission instead of sending
    // spam leads into the CRM.
    const form = e.currentTarget;
    if ((form.elements.namedItem("website") as HTMLInputElement)?.value) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    const formData = new FormData(form);

    // Attach attribution captured on landing (see lib/attribution.ts) and
    // the page the form was actually submitted from, so GHL can see which
    // ad/campaign/page drove the lead even if they browsed for a while
    // before converting.
    formData.set("attribution", JSON.stringify(getStoredAttribution()));
    formData.set("pageUrl", window.location.href);

    try {
      const res = await fetch("/api/quote", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section id="contact" className="px-6 py-20 md:py-28">
        <div className={`${container} mx-auto border-t border-accent-ink/30 pt-6`}>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-ink">
            <span className="inline-block h-px w-6 bg-accent-ink" aria-hidden />
            Request received
          </p>
          <Heading className="font-display uppercase text-4xl md:text-6xl leading-none mt-3">
            Thanks — we'll{" "}
            <span className="text-accent-ink">be in touch.</span>
          </Heading>
          <p className="mt-5 max-w-xl text-ink/70">
            We got your request and will follow up shortly. If it's urgent,
            call us directly at{" "}
            <a
              href={business.phoneHref}
              className="font-medium text-accent-ink underline underline-offset-4"
            >
              {business.phone}
            </a>
            .
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="px-6 py-20 md:py-28">
      {/* Two-column like the FAQ section: the pitch and the phone number
          stay visible alongside the form instead of the form floating
          alone in a narrow centered column. Someone who doesn't want to
          fill out eleven fields can still see the call option. */}
      <div className={`${container} mx-auto border-t border-accent-ink/30 pt-6 grid grid-cols-1 md:grid-cols-[minmax(0,340px)_1fr] gap-12 md:gap-16`}>
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-ink">
            <span className="inline-block h-px w-6 bg-accent-ink" aria-hidden />
            Free quote
          </p>
          <Heading className="font-display uppercase text-4xl md:text-5xl leading-none mt-3">
            {headingLead} <span className="text-accent-ink">{headingTail}</span>
          </Heading>
          <p className="mt-4 text-ink/70 text-sm max-w-xs">
            {quoteForm.subhead}
          </p>

          <a
            href={business.phoneHref}
            className="mt-6 inline-flex items-center gap-2 bg-accent text-ink px-6 py-3 text-xs font-semibold uppercase tracking-widest rounded-sm hover:opacity-90 transition-opacity"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {business.phone}
          </a>

          <ul className="mt-8 space-y-2">
            {hero.badges.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-ink/60"
              >
                <span className="h-1.5 w-1.5 bg-accent-ink inline-block shrink-0" aria-hidden />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot — real users never see or fill this. */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="website">Leave this field empty</label>
              <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            {/* Visible labels rather than placeholder-only fields: the
                placeholder disappears the moment someone starts typing,
                which is exactly when they're checking whether they're in
                the right box. autoComplete/inputMode are here so mobile
                autofill and the right keyboard do the typing instead. */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="qf-name" className={labelClass}>
                  Name <span className="text-accent-ink">*</span>
                </label>
                <input id="qf-name" name="name" required autoComplete="name" placeholder="Jane Smith" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="qf-phone" className={labelClass}>
                  Phone <span className="text-accent-ink">*</span>
                </label>
                <input id="qf-phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" placeholder="(608) 555-0123" className={fieldClass} />
              </div>
            </div>

            <div>
              <label htmlFor="qf-email" className={labelClass}>
                Email <span className="text-accent-ink">*</span>
              </label>
              <input id="qf-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={fieldClass} />
            </div>

            <div>
              <label htmlFor="qf-service" className={labelClass}>
                Service <span className="text-accent-ink">*</span>
              </label>
              <select id="qf-service" name="service" required defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  Pick a service
                </option>
                {quoteForm.serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="qf-details" className={labelClass}>
                Project details
              </label>
              <textarea
                id="qf-details"
                name="details"
                rows={4}
                placeholder="Rough square footage, condition of the concrete, what you want the space to do."
                className={fieldClass}
              />
            </div>

            <fieldset className="rounded-sm border border-ink/20 p-4">
              <legend className="px-2 text-xs font-semibold uppercase tracking-widest text-ink/60">
                Project address
              </legend>
              <div className="space-y-4">
                <div>
                  <label htmlFor="qf-street" className="sr-only">Street address</label>
                  <input id="qf-street" name="street" autoComplete="street-address" placeholder="Street address" className={fieldClass} />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="col-span-2">
                    <label htmlFor="qf-city" className="sr-only">City</label>
                    <input id="qf-city" name="city" autoComplete="address-level2" placeholder="City" className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="qf-state" className="sr-only">State</label>
                    <input id="qf-state" name="state" autoComplete="address-level1" defaultValue={business.state} placeholder="State" className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="qf-zip" className="sr-only">ZIP</label>
                    <input id="qf-zip" name="zip" autoComplete="postal-code" inputMode="numeric" placeholder="ZIP" className={fieldClass} />
                  </div>
                </div>
              </div>
            </fieldset>

            <div>
              <label htmlFor="qf-source" className={labelClass}>
                How did you hear about us?
              </label>
              <select id="qf-source" name="source" defaultValue="" className={fieldClass}>
                <option value="">Select one</option>
                {quoteForm.sourceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="qf-photos" className={labelClass}>
                Project photos
              </label>
              <input
                id="qf-photos"
                type="file"
                name="photos"
                accept="image/*"
                multiple
                className="w-full text-sm text-ink/60 file:mr-4 file:rounded-sm file:border-0 file:bg-ink file:px-4 file:py-2.5 file:text-xs file:font-semibold file:uppercase file:tracking-widest file:text-paper hover:file:bg-surface file:cursor-pointer"
              />
              <p className="mt-1.5 text-xs text-ink/50">
                A couple of photos of the existing floor gets you a far more
                accurate number.
              </p>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-accent text-ink rounded-sm px-6 py-4 text-xs font-semibold uppercase tracking-widest disabled:opacity-60 hover:opacity-90 transition-opacity"
            >
              {status === "sending" ? "Sending..." : "Send Request"}
            </button>

            {status === "error" && (
              <p className="text-sm text-red-700" role="alert">
                Something went wrong. Please try again or call us directly at{" "}
                {business.phone}.
              </p>
            )}
          </form>

          <GhlBookingWidget />
        </div>
      </div>
    </section>
  );
}
