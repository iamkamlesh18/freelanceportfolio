"use client";

import styles from "./Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { homeData } from "./data";

export default function Homepage() {
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setLoaded(true);

    const interval = setInterval(() => {
      setActive((prev) =>
        prev === homeData.testimonials.items.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.glow}></div>

        <div className={`${styles.content} ${loaded ? styles.show : ""}`}>
          <h1 className={styles.title}>
            {homeData.hero.titleLine1}{" "}
            <span>{homeData.hero.highlight}</span>
            <br />
            {homeData.hero.titleLine2}
          </h1>

          <p className={styles.subtitle}>
            {homeData.hero.subtitle}
          </p>

          <div className={styles.actions}>
            <Link href={homeData.hero.primaryCta.link} className={styles.primary}>
              {homeData.hero.primaryCta.label}
            </Link>

            <Link href={homeData.hero.secondaryCta.link} className={styles.secondary}>
              {homeData.hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className={styles.trustSection}>
        <p className={styles.trustTitle}>{homeData.trust.title}</p>
        <div className={styles.trustGrid}>
          {homeData.trust.logos.map((logo, i) => (
            <div key={i} className={styles.logo}>
              {logo}
            </div>
          ))}
        </div>
      </section>

      {/* CORE */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{homeData.core.title}</h2>
        <div className={styles.grid}>
          {homeData.core.items.map((item, i) => (
            <div key={i} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GROWTH */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{homeData.growth.title}</h2>
        <div className={styles.grid}>
          {homeData.growth.items.map((item, i) => (
            <div key={i} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{homeData.process.title}</h2>
        <div className={styles.timeline}>
          {homeData.process.steps.map((step, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.circle}>{i + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          {homeData.testimonials.title}
        </h2>

        <div className={styles.testimonialWrapper}>
          {homeData.testimonials.items.map((item, i) => (
            <div
              key={i}
              className={`${styles.testimonialCard} ${
                active === i ? styles.active : ""
              }`}
            >
              <p>"{item.quote}"</p>
              <span>- {item.author}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}