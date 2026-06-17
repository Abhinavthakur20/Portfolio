"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        <div className={styles.container}>
          <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            ABHINAV
          </div>
          
          <nav className={styles.nav}>
            <a href="#hero" onClick={(e) => handleNavClick(e, "hero")} className={styles.navLink}>Home</a>
            <a href="#about" onClick={(e) => handleNavClick(e, "about")} className={styles.navLink}>About</a>
            <a href="#skills" onClick={(e) => handleNavClick(e, "skills")} className={styles.navLink}>Skills</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, "projects")} className={styles.navLink}>Projects</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className={styles.contactBtn}>Get in Touch</a>
          </nav>

          <button 
            className={styles.menuToggle} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile navigation menu */}
      <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.mobileNavActive : ""}`}>
        <a href="#hero" onClick={(e) => handleNavClick(e, "hero")} className={styles.navLink}>Home</a>
        <a href="#about" onClick={(e) => handleNavClick(e, "about")} className={styles.navLink}>About</a>
        <a href="#skills" onClick={(e) => handleNavClick(e, "skills")} className={styles.navLink}>Skills</a>
        <a href="#projects" onClick={(e) => handleNavClick(e, "projects")} className={styles.navLink}>Projects</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className={styles.contactBtn} style={{ textAlign: "center" }}>Get in Touch</a>
      </div>
    </>
  );
}
