import Image from "next/image";
import { siteConfig } from "@/config/site.config";

export default function ColorCatalogue() {
  return (
    <section className="border-y border-ink/10 bg-paper px-6 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-ink">
              <span className="inline-block h-px w-6 bg-accent-ink" aria-hidden />
              Color catalogue
            </p>
            <h2 className="mt-3 font-display text-3xl uppercase leading-none md:text-5xl">
              Choose your <span className="text-accent-ink">flake blend.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink/65 md:text-right">
            Nine proven blends, available across every coating service.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {siteConfig.flakeColors.map((color) => (
            <li key={color.name} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-ink/15 bg-surface shadow-sm">
                <Image
                  src={siteConfig.flakeColorSprite}
                  alt={`${color.name} decorative flake blend`}
                  width={1254}
                  height={1254}
                  sizes="(min-width: 768px) 100vw, 150vw"
                  className="absolute max-w-none transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{
                    width: "300%",
                    height: "auto",
                    left: `${color.column * -100}%`,
                    top: `${color.row * -133.333 - 16.667}%`,
                  }}
                />
              </div>
              <p className="mt-2 font-display text-lg uppercase tracking-wide text-ink">
                {color.name}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-8 border-l-2 border-accent-ink pl-4 text-xs leading-relaxed text-ink/60">
          Colors can vary by screen, lighting, broadcast density, and topcoat.
          View a physical sample before making your final selection.
        </p>
      </div>
    </section>
  );
}
