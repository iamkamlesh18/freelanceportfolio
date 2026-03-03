import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = blogs.find((b) => b.slug === params.slug);
  if (!post) return notFound();

  return (
    <section className="section">
      <h1>{post.title}</h1>
      <p style={{ marginTop: "20px" }}>{post.content}</p>
    </section>
  );
}