import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Building Digital <span>Experiences</span>
          <br />
          That Feel Alive.
        </h1>

        <p className={styles.subtitle}>
          Developer. Architect. Problem Solver.
          Creating scalable systems with elegance and clarity.
        </p>

        <div className={styles.actions}>
          <a href="/portfolio" className={styles.primary}>
            View Work
          </a>
          <a href="/contact" className={styles.secondary}>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}