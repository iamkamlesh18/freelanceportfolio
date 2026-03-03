import styles from "./Services.module.css";
import { servicesData } from "./data";

export default function Services() {
  return (
    <section className="section">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Services</h1>

        <div className={styles.grid}>
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