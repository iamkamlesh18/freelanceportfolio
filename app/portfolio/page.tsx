import styles from "./Portfolio.module.css";
import { portfolioData } from "./data";

export default function Portfolio() {
  return (
    <main className={styles.container}>
      <h1>Portfolio</h1>
      <div className={styles.grid}>
        {portfolioData.map((item, index) => (
          <div key={index} className={styles.card}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}