"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

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

        <div className={styles.links}>
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={isActive ? styles.active : ""}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <Link href="/contact" className={styles.cta}>
          Let’s Talk
        </Link>
      </div>
    </nav>
  );
}