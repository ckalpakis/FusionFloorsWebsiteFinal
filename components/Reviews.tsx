import { siteConfig } from "@/config/site.config";

export default function Reviews({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const { reviews } = siteConfig;
  const Heading = headingLevel;
  const words = reviews.heading.trim().split(" ");
  const headingTail = words[words.length - 1];
  const headingLead = words.slice(0, -1).join(" ");

  if (reviews.items.length === 0) return null;

  return (
    <section className="bg-paper px-6 py-20 text-ink md:py-28">
      <div className="mx-auto max-w-6xl border-t border-accent-ink/30 pt-6">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(260px,420px)] md:items-end">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-ink">
              <span className="inline-block h-px w-6 bg-accent-ink" aria-hidden />
              {reviews.eyebrow}
            </p>
            <Heading className="mt-3 font-display text-4xl uppercase leading-none md:text-6xl">
              {headingLead}{" "}
              <span className="text-accent-ink">{headingTail}</span>
            </Heading>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink/65 md:justify-self-end">
            {reviews.subhead}
          </p>
        </div>

        <div className="mt-10 grid gap-px bg-ink/15 md:grid-cols-3">
          {reviews.items.map((review, index) => {
            const rating = Math.min(5, Math.max(1, review.rating));

            return (
              <figure
                key={`${review.author}-${review.project}`}
                className="relative flex min-h-80 flex-col bg-paper p-6 md:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-xs uppercase tracking-[0.18em] text-ink/45">
                    Field report {String(index + 1).padStart(2, "0")}
                  </span>
                  <div
                    className="flex gap-1"
                    role="img"
                    aria-label={`${rating} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }, (_, mark) => (
                      <span
                        key={mark}
                        className={`h-1 w-4 ${mark < rating ? "bg-accent-ink" : "bg-ink/15"}`}
                        aria-hidden
                      />
                    ))}
                  </div>
                </div>

                <blockquote className="mt-10 flex-1 font-display text-2xl font-medium leading-tight md:text-[1.7rem]">
                  <span className="text-accent-ink" aria-hidden>“</span>
                  {review.quote}
                  <span className="text-accent-ink" aria-hidden>”</span>
                </blockquote>

                <figcaption className="mt-10 border-t border-ink/15 pt-4">
                  <p className="font-semibold">{review.author}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-ink/55">
                    {review.project} · {review.location}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
