"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const handleClose = () => setOpen(false);

  return (
    <nav className={styles.wrapper}>
      <div className={styles.navbar}>
        <Link href="/" className={styles.logo} onClick={handleClose}>
          Kamlesh
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
  );
}