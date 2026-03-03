import styles from "./Portfolio.module.css";
import { portfolioData } from "./data";
import Link from "next/link";

export default function Portfolio() {
  return (
    <section className="section">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Selected Work</h1>

        <p className={styles.subtitle}>
          Systems built with clarity, modularity and scale in mind.
        </p>

        <div className={styles.grid}>
          {portfolioData.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.content}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>

                <Link href="/contact" className={styles.link}>
                  Discuss Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}