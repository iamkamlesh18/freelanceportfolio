import styles from "./About.module.css";
import { aboutData } from "./data";
import type { Metadata } from "next";

const siteUrl =
  "https://iamkamlesh18.github.io/freelanceportfolio";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Kamlesh — Developer, Architect, and Digital Systems Builder.",
  alternates: {
    canonical: `${siteUrl}/about/`,
  },
};

export default function About() {
  return (
    <section className="section">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{aboutData.heading}</h1>

        <div className={styles.card}>
          <p>{aboutData.content}</p>
        </div>

        <div className={styles.highlights}>
          <div className={styles.block}>
            <h3>Architecture First</h3>
            <p>
              I design systems with long-term scalability in mind.
            </p>
          </div>

          <div className={styles.block}>
            <h3>Performance Focused</h3>
            <p>
              Clean builds, optimized rendering and structured code.
            </p>
          </div>

          <div className={styles.block}>
            <h3>Modular Thinking</h3>
            <p>
              Every component isolated. No CSS collisions. No chaos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}