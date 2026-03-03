import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const siteUrl =
  "https://iamkamlesh18.github.io/freelanceportfolio";

/* 🔥 REQUIRED FOR STATIC EXPORT */
export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

/* 🔥 SEO PER BLOG */
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogs.find((b) => b.slug === params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}/`,
      type: "article",
    },
  };
}

export default function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogs.find((b) => b.slug === params.slug);

  if (!post) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: "Kamlesh",
    },
    url: `${siteUrl}/blog/${post.slug}/`,
  };

  return (
    <>
      <section className="section">
        <h1>{post.title}</h1>
        <p style={{ marginTop: "30px" }}>{post.content}</p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </>
  );
}