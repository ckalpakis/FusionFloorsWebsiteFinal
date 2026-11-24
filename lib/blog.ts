import { siteConfig, type BlogPost } from "@/config/site.config";

/** Config-backed blog. Posts live on siteConfig; this class only reads them. */
export class BlogPosts {
  static all(): readonly BlogPost[] {
    return siteConfig.posts;
  }

  static bySlug(slug: string): BlogPost | undefined {
    return siteConfig.posts.find((post) => post.slug === slug);
  }

  /**
   * An empty archive is thin, so /blog stays out of the sitemap until a post exists.
   * Post URLs are indexable as soon as they are published.
   */
  static isIndexIndexable(): boolean {
    return siteConfig.posts.length > 0;
  }

  static indexablePaths(): string[] {
    const posts = siteConfig.posts.map((post) => `/blog/${post.slug}`);
    return this.isIndexIndexable() ? ["/blog", ...posts] : posts;
  }

  static publishedLabel(iso: string): string {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: "UTC",
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(iso));
  }
}
