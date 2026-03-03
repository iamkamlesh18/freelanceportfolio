"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const links = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={styles.wrapper}>
      <div className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          Kamlesh
        </Link>

        <div className={styles.links}>
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${styles.link} ${
                pathname === link.path ? styles.active : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className={styles.themeToggle}
          onClick={() => setDark(!dark)}
        >
          {dark ? "☀" : "🌙"}
        </button>
      </div>
    </nav>
  );
}