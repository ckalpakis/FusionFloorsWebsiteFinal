import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/config/site.config";
import { BlogPosts } from "@/lib/blog";

export const metadata = pageMetadata({
  title: "Epoxy Flooring Notes",
  description:
    "Notes from Fusion Floors on epoxy and concrete coatings in Western Wisconsin. New posts will be listed on this page.",
  path: "/blog",
  index: BlogPosts.isIndexIndexable(),
});

export default function BlogIndexPage() {
  const posts = BlogPosts.all();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.siteUrl },
          { name: "Blog", url: `${siteConfig.siteUrl}/blog` },
        ])}
      />
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <nav aria-label="Breadcrumb" className="text-xs text-ink/50 mb-6">
          <Link href="/" className="hover:text-accent-ink">Home</Link> /{" "}
          <span className="text-ink">Blog</span>
        </nav>

        <p className="flex items-center gap-2 text-sm uppercase tracking-widest text-accent-ink">
          <span className="inline-block h-px w-6 bg-accent-ink" aria-hidden />
          Blog
        </p>
        <h1 className="font-display uppercase text-4xl md:text-5xl mt-3 leading-none">
          Epoxy flooring <span className="text-accent-ink">notes.</span>
        </h1>

        {posts.length > 0 ? (
          <ul className="mt-10 divide-y divide-ink/10 border-t border-ink/10">
            {posts.map((post) => (
              <li key={post.slug} className="py-6">
                <p className="text-xs uppercase tracking-widest text-ink/50">
                  {BlogPosts.publishedLabel(post.publishedAt)}
                </p>
                <h2 className="font-display uppercase text-2xl mt-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-accent-ink">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-ink/70 max-w-2xl">{post.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10 max-w-2xl border-t border-accent-ink/30 pt-6">
            <p className="text-ink/80">No posts yet.</p>
            <p className="mt-3 text-ink/70">
              When Fusion Floors publishes a note, it will be listed here. Until then, the service pages and city pages cover the coatings we install across Western Wisconsin and the La Crosse area.
            </p>
            <p className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link
                href="/services"
                className="inline-block border border-ink/15 rounded-full px-4 py-2 hover:border-accent-ink hover:text-accent-ink transition-colors"
              >
                Epoxy flooring services
              </Link>
              <Link
                href="/locations"
                className="inline-block border border-ink/15 rounded-full px-4 py-2 hover:border-accent-ink hover:text-accent-ink transition-colors"
              >
                Western Wisconsin service areas
              </Link>
            </p>
          </div>
        )}
      </section>
    </>
  );
}
