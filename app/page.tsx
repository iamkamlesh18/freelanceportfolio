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
    <>
      {/* HERO */}
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

      {/* SHAPE SECTION */}
      <section className={styles.shapesSection}>
        <div className={styles.snakeWrapper}>
          <svg
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
            className={styles.snake}
          >
            <path
              d="M0 100 Q250 0 500 100 T1000 100"
              className={styles.snakePath}
            />
          </svg>
        </div>

        <div className={styles.revealBlock}>
          <h2>Structured Systems. Fluid Motion.</h2>
          <p>
            Architecture is rigid. Experience is fluid.
            The balance creates products that feel alive.
          </p>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className={styles.valueSection}>
        <h2 className={styles.valueTitle}>
          Core Strengths
        </h2>

        <div className={styles.valueGrid}>
          <div className={styles.valueCard}>
            <h3>Architecture First</h3>
            <p>
              Clean structure, separation of concerns,
              scalable foundations.
            </p>
          </div>

          <div className={styles.valueCard}>
            <h3>Performance Focused</h3>
            <p>
              Optimized rendering, fast load time,
              production-ready builds.
            </p>
          </div>

          <div className={styles.valueCard}>
            <h3>System Thinking</h3>
            <p>
              Not just features — cohesive systems
              designed for growth.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className={styles.skillsSection}>
        <div className={styles.skillsBackground}></div>

        <h2 className={styles.skillsTitle}>
          Technical Expertise
        </h2>

        <div className={styles.skillsGrid}>
          <Skill name="Frontend Architecture" level={90} />
          <Skill name="Next.js / React" level={85} />
          <Skill name="System Design" level={80} />
          <Skill name="Performance Optimization" level={88} />
        </div>
      </section>

            {/* FLOW DIVIDER SECTION */}
      <section className={styles.flowSection}>
        <svg
          viewBox="0 0 1440 200"
          className={styles.wave}
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C300,200 1100,0 1440,100 L1440,200 L0,200 Z"
            className={styles.wavePath}
          />
        </svg>

        <div className={styles.flowContent}>
          <h2>Fluid Interfaces. Structured Thinking.</h2>
          <p>
            Design should feel effortless.
            Engineering should feel invisible.
          </p>
        </div>
      </section>

      
    </>
    
  );

  function Skill({ name, level }: { name: string; level: number }) {
  return (
    <div className={styles.skillCard}>
      <div className={styles.skillHeader}>
        <span>{name}</span>
        <span>{level}%</span>
      </div>

      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
}