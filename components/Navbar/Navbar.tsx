"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Kamlesh</div>

      <div className={`${styles.links} ${open ? styles.open : ""}`}>
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.path}
              href={link.path}
              className={isActive ? styles.active : ""}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      <div
        className={`${styles.menuBtn} ${open ? styles.menuOpen : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
}