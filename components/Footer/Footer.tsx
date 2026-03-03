import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.tagline}>
          Built with clarity, performance and intention.
        </p>

        <p className={styles.copy}>
          © {new Date().getFullYear()} Kamlesh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}