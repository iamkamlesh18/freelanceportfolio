"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [animateLogo, setAnimateLogo] = useState(false);

  const links = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const handleClose = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // Trigger logo animation once on mount
  useEffect(() => {
    setAnimateLogo(true);
  }, []);

  return (
    <>
      <nav className={styles.wrapper}>
        <div className={styles.navbar}>
          <Link href="/" className={styles.logo} onClick={handleClose}>
            <div className={styles.logoContainer}>
              {/* Monogram Circle */}
              <svg
                className={`${styles.logoCircle} ${
                  animateLogo ? styles.draw : ""
                }`}
                width="40"
                height="40"
                viewBox="0 0 40 40"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>

              {/* Letter K */}
              <span
                className={`${styles.logoLetter} ${
                  animateLogo ? styles.fadeIn : ""
                }`}
              >
                K
              </span>

              {/* Wordmark */}
              <span
                className={`${styles.logoText} ${
                  animateLogo ? styles.fadeIn : ""
                }`}
              >
                Kamlesh
              </span>
            </div>
          </Link>

          <div
            className={`${styles.links} ${
              open ? styles.open : ""
            }`}
          >
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={handleClose}
                className={`${styles.link} ${
                  pathname === link.path ? styles.active : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            className={`${styles.menuBtn} ${
              open ? styles.menuOpen : ""
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div
        className={`${styles.overlay} ${
          open ? styles.overlayShow : ""
        }`}
        onClick={handleClose}
      />
    </>
  );
}