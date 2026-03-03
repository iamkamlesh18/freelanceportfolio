import styles from "./Services.module.css";
import { servicesData } from "./data";
import ServiceCard from "@/components/ServiceCard/ServiceCard";

export default function Services() {
  return (
    <main className={styles.container}>
      <h1>Services</h1>
      <div className={styles.grid}>
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </main>
  );
}