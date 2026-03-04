"use client";

import styles from "./Contact.module.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contactData } from "./contactData";

export default function ContactClient() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    setStatus("Sending...");

    try {

      await emailjs.send(
        "service_p661vj8",
        "template_j09mtgn",
        {
          name: form.name,
          email: form.email,
          project: form.project,
          message: form.message,
        },
        "sPur7hzafPZCDowIx"
      );

      setStatus("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        project: "",
        message: "",
      });

    } catch (error) {

      setStatus("Something went wrong. Try again.");

    }
  };

  return (
    <section className="section">
      <div className={styles.wrapper}>

        <h1 className={styles.title}>
          {contactData.heading}
        </h1>

        <p className={styles.subtitle}>
          {contactData.subtitle}
        </p>

        {/* CONTACT CARDS */}

        <div className={styles.grid}>

          <div className={styles.card}>
            <h3>Email</h3>
            <a href={`mailto:${contactData.email}`}>
              {contactData.email}
            </a>
          </div>

          <div className={styles.card}>
            <h3>Phone</h3>
            <a href={`tel:${contactData.phone}`}>
              {contactData.phone}
            </a>
          </div>

          <div className={styles.card}>
            <h3>WhatsApp</h3>
            <a
              href={contactData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Conversation →
            </a>
          </div>

        </div>

        {/* SOCIAL LINKS */}

        <div className={styles.socials}>
          {contactData.socials.map((social) => (
            <a key={social.name} href={social.url} target="_blank">
              {social.name}
            </a>
          ))}
        </div>

        {/* CONTACT FORM */}

        <div className={styles.formSection}>

          <div className={styles.formHeader}>
            <h2>Start a Project</h2>
            <p>
              Tell me about your project and I’ll get back to you shortly.
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>

            <div className={styles.row}>

              <input
                className={styles.input}
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />

            </div>

            <input
              className={styles.input}
              name="project"
              placeholder="Project Type"
              value={form.project}
              onChange={handleChange}
            />

            <textarea
              className={styles.textarea}
              name="message"
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
              required
            />

            <button className={styles.button} type="submit">
              Send Project Inquiry
            </button>

          </form>

          {status && (
            <p className={styles.status}>{status}</p>
          )}

        </div>

      </div>
    </section>
  );
}