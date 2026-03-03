"use client";

import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917770000347?text=Hi%20Kamlesh,%20I%20want%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label="Chat on WhatsApp"
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M20.52 3.48A11.79 11.79 0 0012.05 0C5.48 0 .12 5.36.12 11.93c0 2.1.55 4.16 1.6 5.97L0 24l6.25-1.63a11.87 11.87 0 005.8 1.48h.01c6.57 0 11.93-5.36 11.93-11.93 0-3.18-1.24-6.17-3.47-8.44z" />
      </svg>
    </a>
  );
}