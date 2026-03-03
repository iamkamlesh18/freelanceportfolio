import styles from "./Blog.module.css";
import Link from "next/link";
import { blogs } from "@/data/blogs";

export const metadata = {
  title: "Blog",
  description: "Insights on Digital Marketing & Architecture.",
};

export default function Blog() {
  return (
    <section className="section">
      <h1>Blog</h1>

      <div className={styles.grid}>
        {blogs.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={styles.card}
          >
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}