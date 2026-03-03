import styles from "./Blog.module.css";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Insights on architecture, SEO, and digital systems.",
};

export default function Blog() {
  return (
    <section className="section">
      <div className={styles.wrapper}>
        <h1>Blog</h1>

        <div className={styles.grid}>
          <Link href="/blog/digital-marketing" className={styles.card}>
            <h2>Digital Marketing Strategy in 2026</h2>
            <p>Modern performance-driven strategy explained.</p>
          </Link>

          <Link href="/blog/seo-fundamentals" className={styles.card}>
            <h2>SEO Fundamentals That Still Work</h2>
            <p>Technical SEO principles that rank.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}