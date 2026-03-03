"use client";

import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917770000347"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
    >
      💬
    </a>
  );
}