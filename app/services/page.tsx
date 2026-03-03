"use client";

import styles from "./Services.module.css";
import { useReveal } from "@/hooks/useReveal";

export default function Services() {
  const { ref, visible } = useReveal();

  const services = [
    {
      title: "Frontend Architecture",
      desc: "Modern UI systems built with scalability and performance in mind.",
    },
    {
      title: "Backend Engineering",
      desc: "Secure, scalable APIs and automation-driven systems.",
    },
    {
      title: "DevOps & CI/CD",
      desc: "Streamlined deployment pipelines and release management.",
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>What I Build</h2>

      <div
        ref={ref}
        className={`${styles.grid} ${
          visible ? styles.show : styles.hidden
        }`}
      >
        {services.map((service, i) => (
          <div key={i} className={styles.card}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}