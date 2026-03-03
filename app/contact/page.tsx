import styles from "./Contact.module.css";
import { contactData } from "./data";

export default function Contact() {
  return (
    <main className={styles.container}>
      <h1>{contactData.heading}</h1>
      <p>{contactData.message}</p>
      <a href={`mailto:${contactData.email}`}>
        {contactData.email}
      </a>
    </main>
  );
}