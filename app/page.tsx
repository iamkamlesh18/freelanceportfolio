"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className={styles.hero}>

      <div className={`${styles.content} ${loaded ? styles.show : ""}`}>
        <h1 className={styles.title}>
          Building Digital <span>Experiences</span>
          <br />
          That Feel Alive.
        </h1>

        <p className={styles.subtitle}>
          Developer. Architect. Problem Solver.
        </p>

        <div className={styles.actions}>
          <Link href="/portfolio" className={styles.primary}>
            View Work
          </Link>
          <Link href="/contact" className={styles.secondary}>
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}