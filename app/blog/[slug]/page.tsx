import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site.config";
import { BlogPosts } from "@/lib/blog";

// Posts are plain paragraphs. A [label](/path) span becomes an internal link.
function Paragraph({ text }: { text: string }) {
  const pattern = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > cursor) nodes.push(text.slice(cursor, match.index));
    const href = match[2];
    nodes.push(
      <Link
        key={`${match.index}-${href}`}
        href={href}
        className="text-accent-ink underline underline-offset-2 hover:text-ink"
      >
        {match[1]}
      </Link>,
    );
    cursor = match.index + match[0].length;
  }
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return <p>{nodes}</p>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return BlogPosts.all().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BlogPosts.bySlug(slug);
  if (!post) notFound();
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BlogPosts.bySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.siteUrl },
          { name: "Blog", url: `${siteConfig.siteUrl}/blog` },
          { name: post.title, url: `${siteConfig.siteUrl}/blog/${post.slug}` },
        ])}
      />
      <article className="px-6 py-20 max-w-4xl mx-auto">
        <nav aria-label="Breadcrumb" className="text-xs text-ink/50 mb-6">
          <Link href="/" className="hover:text-accent-ink">Home</Link> /{" "}
          <Link href="/blog" className="hover:text-accent-ink">Blog</Link> /{" "}
          <span className="text-ink">{post.title}</span>
        </nav>
        <p className="text-xs uppercase tracking-widest text-ink/50">
          {BlogPosts.publishedLabel(post.publishedAt)}
        </p>
        <h1 className="font-display uppercase text-4xl md:text-5xl mt-3 leading-none max-w-3xl">
          {post.title}
        </h1>
        <div className="mt-8 max-w-2xl space-y-4 text-ink/80">
          {post.paragraphs.map((paragraph) => (
            <Paragraph key={paragraph} text={paragraph} />
          ))}
        </div>
      </article>
    </>
  );
}
