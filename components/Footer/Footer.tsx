import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h3>Kamlesh</h3>
          <p>
            Building scalable systems with clarity, performance
            and intention.
          </p>
        </div>

        <div className={styles.links}>
          <div>
            <h4>Navigate</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div>
            <h4>Connect</h4>
            <a
              href="https://github.com/iamkamlesh18"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/iamkamlesh18/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="mailto:patilkamlesh1811@gmail.com"
            >
              Email
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