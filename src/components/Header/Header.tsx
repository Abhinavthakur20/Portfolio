"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["about", "projects", "skills", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -45% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const pos = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header 
        className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={styles.container}>
          {/* Left Navigation Group */}
          <div className={styles.navGroup}>
            <motion.a 
              href="#about" 
              onClick={(e) => handleNavClick(e, "about")} 
              className={`${styles.navLink} ${activeSection === "about" ? styles.active : ""}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>About</span>
              {activeSection === "about" && (
                <motion.div 
                  layoutId="activeNavIndicator"
                  className={styles.activeIndicator}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.a>
            <motion.a 
              href="#projects" 
              onClick={(e) => handleNavClick(e, "projects")} 
              className={`${styles.navLink} ${activeSection === "projects" ? styles.active : ""}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Works</span>
              {activeSection === "projects" && (
                <motion.div 
                  layoutId="activeNavIndicator"
                  className={styles.activeIndicator}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.a>
          </div>

          {/* Logo Center */}
          <motion.div 
            className={styles.logo} 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.logoText}>Abhinav</span>
          </motion.div>

          {/* Right Navigation Group */}
          <div className={styles.navGroup}>
            <motion.a 
              href="#skills" 
              onClick={(e) => handleNavClick(e, "skills")} 
              className={`${styles.navLink} ${activeSection === "skills" ? styles.active : ""}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Skills</span>
              {activeSection === "skills" && (
                <motion.div 
                  layoutId="activeNavIndicator"
                  className={styles.activeIndicator}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.a>
            <motion.a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, "contact")} 
              className={`${styles.navLink} ${activeSection === "contact" ? styles.active : ""}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Contact</span>
              {activeSection === "contact" && (
                <motion.div 
                  layoutId="activeNavIndicator"
                  className={styles.activeIndicator}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.a>
            <motion.a 
              href="/Resume_Abhinav.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.navLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Resume</span>
            </motion.a>
          </div>

          <button
            className={styles.menuToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className={styles.mobileNav}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, "about")} 
              className={`${styles.mobileLink} ${activeSection === "about" ? styles.mobileActive : ""}`}
            >
              About
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick(e, "projects")} 
              className={`${styles.mobileLink} ${activeSection === "projects" ? styles.mobileActive : ""}`}
            >
              Works
            </a>
            <a 
              href="#skills" 
              onClick={(e) => handleNavClick(e, "skills")} 
              className={`${styles.mobileLink} ${activeSection === "skills" ? styles.mobileActive : ""}`}
            >
              Skills
            </a>
            <a 
              href="/Resume_Abhinav.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.mobileLink}
            >
              Resume
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, "contact")} 
              className={`${styles.mobileCta} ${activeSection === "contact" ? styles.mobileActiveCta : ""}`}
            >
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
