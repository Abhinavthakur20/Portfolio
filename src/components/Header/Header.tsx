"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const pos = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        <div className={styles.container}>
          <a href="#projects" onClick={(e) => handleNavClick(e, "projects")} className={styles.navLink}>works</a>

          <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span className={styles.logoText}>abhinav</span>
          </div>

          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className={styles.navLink}>contact</a>

          <button
            className={styles.menuToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.mobileNavActive : ""}`}>
        <a href="#projects" onClick={(e) => handleNavClick(e, "projects")} className={styles.mobileLink}>Works</a>
        <a href="#skills" onClick={(e) => handleNavClick(e, "skills")} className={styles.mobileLink}>Skills</a>
        <a href="#about" onClick={(e) => handleNavClick(e, "about")} className={styles.mobileLink}>About</a>
        <a href="/Resume_Abhinav.pdf" target="_blank" rel="noopener noreferrer" className={styles.mobileLink}>Resume</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className={styles.mobileCta}>Get in Touch</a>
      </div>
    </>
  );
}
