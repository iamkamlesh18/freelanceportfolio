import styles from "./Contact.module.css";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Kamlesh.",
};

export default function Contact() {
  return (
    <section className="section">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Let’s Connect</h1>

        <p className={styles.subtitle}>
          Have a project in mind or just want to say hi?  
          I’m always open to meaningful conversations.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Email</h3>
            <a href="mailto:patilkamlesh1811@gmail.com">
              patilkamlesh1811@gmail.com
            </a>
          </div>

          <div className={styles.card}>
            <h3>Phone</h3>
            <a href="tel:+917770000347">
              +91 77700 00347
            </a>
          </div>

          <div className={styles.card}>
            <h3>WhatsApp</h3>
            <a
              href="https://wa.me/917770000347?text=Hi%20Kamlesh,%20I%20want%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Conversation →
            </a>
          </div>
        </div>

        <div className={styles.socials}>
          <a
            href="https://linkedin.com/in/iamkamlesh18"
            target="_blank"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/iamkamlesh18"
            target="_blank"
          >
            GitHub
          </a>

          <a
            href="https://iamkamlesh18.github.io/iamkamlesh18/"
            target="_blank"
          >
            CV Website
          </a>

          <a
            href="https://iamkamlesh18.github.io/my-portfolio/"
            target="_blank"
          >
            Salesforce Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}