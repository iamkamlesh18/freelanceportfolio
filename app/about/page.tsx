import styles from "./About.module.css";
import { aboutData } from "./data";

export default function About() {
  return (
    <main className={styles.container}>
      <h1>{aboutData.heading}</h1>
      <p>{aboutData.content}</p>
    </main>
  );
}