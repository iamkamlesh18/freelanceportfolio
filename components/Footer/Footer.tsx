import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h3>Kamlesh</h3>
          <p>
            Building scalable digital systems with clarity,
            performance and intention.
          </p>
        </div>

        <div className={styles.connect}>
          <h4>Let’s Connect</h4>

          <div className={styles.links}>
            <a
              href="mailto:patilkamlesh1811@gmail.com"
              className={styles.link}
            >
              patilkamlesh1811@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/iamkamlesh18"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/iamkamlesh18"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} Kamlesh. All rights reserved.
      </div>
    </footer>
  );
}