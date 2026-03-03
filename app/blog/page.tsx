import Link from "next/link";
import { blogs } from "@/data/blogs";

export default function Blog() {
  return (
    <section className="section">
      <h1>Blog</h1>
      {blogs.map((post) => (
        <div key={post.slug} style={{ marginTop: "30px" }}>
          <Link href={`/blog/${post.slug}`}>
            <h2>{post.title}</h2>
          </Link>
        </div>
      ))}
    </section>
  );
}