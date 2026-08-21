import { siteConfig } from "@/config/site.config";

export default function About({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const { about, services } = siteConfig;
  const Heading = headingLevel;

  // "Core Services" is computed from the actual services array instead of
  // hardcoded in config, so it never goes stale when a service is added
  // or removed — the stat and the services page can't drift apart.
  const stats = [
    { value: String(services.length), label: "Core Services" },
    ...about.stats,
  ];

  // Every other section header on the site (VideoGallery, WorkGallery,
  // FAQ, the page heroes) sets its last word in the accent color. Doing
  // that here means splitting the config string rather than adding a
  // second "headingAccent" field, so site.config.ts keeps holding plain
  // copy and this stays a presentation decision. On "Epoxy flooring,
  // done right, in Sparta." the accented word lands on the town, which
  // is exactly where you'd want it on a local trade site.
  const words = about.heading.trim().split(" ");
  const headingTail = words[words.length - 1];
  const headingLead = words.slice(0, -1).join(" ");

  return (
    <section className="px-6 py-20 md:py-28">
      {/* max-w-6xl + the accent rule above the eyebrow are what make this
          line up with the dark gallery sections below it — at max-w-4xl
          the whole block sat inset from everything else on the page. */}
      <div className="max-w-6xl mx-auto border-t border-accent-ink/30 pt-6">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-ink">
          <span className="inline-block h-px w-6 bg-accent-ink" aria-hidden />
          {about.eyebrow}
        </p>
        <Heading className="font-display uppercase text-4xl md:text-6xl leading-none mt-3">
          {headingLead}{" "}
          <span className="text-accent-ink">{headingTail}</span>
        </Heading>

        <div className="mt-6 max-w-2xl space-y-4 text-ink/80">
          {about.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* 4-up on desktop: with a 3-column grid the fourth stat dropped
            onto its own row and read as an afterthought. */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="border-t border-accent-ink/50 pt-4">
              <div className="font-display uppercase text-3xl leading-none">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-ink/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
