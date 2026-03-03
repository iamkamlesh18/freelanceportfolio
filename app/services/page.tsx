"use client";

import styles from "./Services.module.css";
import { servicesData } from "./data";
import { useReveal } from "@/hooks/useReveal";

export default function Services() {
  const { ref, visible } = useReveal();

  return (
    <section className="section">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Services</h1>

        <div
          ref={ref}
          className={`${styles.grid} ${
            visible ? styles.show : styles.hidden
          }`}
        >
          {servicesData.map((service, index) => (
            <div key={index} className={styles.card}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}