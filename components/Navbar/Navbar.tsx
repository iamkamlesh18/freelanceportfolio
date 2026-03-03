"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <nav className={styles.wrapper}>
      <div className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          Kamlesh
        </Link>

        <div className={`${styles.links} ${open ? styles.open : ""}`}>
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`${styles.link} ${
                  isActive ? styles.active : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className={styles.right}>
          <button
            className={styles.themeToggle}
            onClick={() => setDark(!dark)}
          >
            {dark ? "☀" : "🌙"}
          </button>

          <div
            className={`${styles.menuBtn} ${
              open ? styles.menuOpen : ""
            }`}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </nav>
  );
}