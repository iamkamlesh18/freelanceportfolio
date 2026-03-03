"use client";

import styles from "./About.module.css";
import { aboutData } from "./data";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>{aboutData.hero.title}</h1>
          <p>{aboutData.hero.subtitle}</p>
        </div>
      </section>

      {/* PILLARS - 3 INLINE */}
      <section className={styles.pillarSection}>
        <div className={styles.pillarGrid}>
          {aboutData.pillars.map((pillar, index) => (
            <div key={index} className={styles.pillarCard}>
              <h2>{pillar.title}</h2>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE - 3 INLINE */}
      <section className={styles.timelineSection}>
        <div className={styles.timelineGrid}>
          {aboutData.timeline.map((item, index) => (
            <div key={index} className={styles.timelineCard}>
              <span className={styles.year}>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <h2>{aboutData.cta.title}</h2>
          <Link href={aboutData.cta.link} className={styles.button}>
            {aboutData.cta.button}
          </Link>
        </div>
      </section>
    </div>
  );
}