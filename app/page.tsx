"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    setLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div
          className={`${styles.content} ${loaded ? styles.show : ""}`}
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
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

      {/* INTERACTIVE SNAKE */}
      <section className={styles.snakeSection}>
        <svg viewBox="0 0 1000 200" className={styles.snake}>
          <path
            d="M0 100 Q250 0 500 100 T1000 100"
            className={styles.snakePath}
            style={{
              strokeDashoffset: 1000 - scrollY * 1.5,
            }}
          />
        </svg>
      </section>

      {/* CORE */}
      <section className={styles.valueSection}>
        <h2 className={styles.valueTitle}>Core Strengths</h2>

        <div className={styles.valueGrid}>
          <InteractiveCard
            title="Architecture First"
            desc="Scalable structure. Clean separation."
          />
          <InteractiveCard
            title="Performance Focused"
            desc="Optimized rendering and fast delivery."
          />
          <InteractiveCard
            title="System Thinking"
            desc="Cohesive systems designed for growth."
          />
        </div>
      </section>

      {/* SKILLS */}
      <section className={styles.skillsSection} ref={skillsRef}>
        <h2 className={styles.skillsTitle}>Technical Expertise</h2>

        <div className={styles.skillsGrid}>
          <Skill name="Frontend Architecture" level={90} active={skillsVisible} />
          <Skill name="Next.js / React" level={85} active={skillsVisible} />
          <Skill name="System Design" level={80} active={skillsVisible} />
          <Skill name="Performance Optimization" level={88} active={skillsVisible} />
        </div>
      </section>
    </>
  );
}

function InteractiveCard({ title, desc }: { title: string; desc: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * 10;
    const rotateY = (x / rect.width - 0.5) * -10;

    ref.current!.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <div
      ref={ref}
      className={styles.valueCard}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function Skill({
  name,
  level,
  active,
}: {
  name: string;
  level: number;
  active: boolean;
}) {
  return (
    <div className={styles.skillCard}>
      <div className={styles.skillHeader}>
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{
            width: active ? `${level}%` : "0%",
          }}
        />
      </div>
    </div>
  );
}