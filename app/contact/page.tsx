import styles from "./Contact.module.css";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Kamlesh.",
};

export default function Contact() {
  return (
    <section className="section">
      <h1>Contact Me</h1>

      <div className={styles.card}>
        <p>Email: patilkamlesh1811@gmail.com</p>
        <p>Phone: +91-7770000347</p>

        <div className={styles.links}>
          <a href="https://linkedin.com/in/iamkamlesh18" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/iamkamlesh18" target="_blank">
            GitHub
          </a>
          <a href="https://iamkamlesh18.github.io/iamkamlesh18/" target="_blank">
            CV Website
          </a>
          <a href="https://iamkamlesh18.github.io/my-portfolio/" target="_blank">
            Salesforce Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}