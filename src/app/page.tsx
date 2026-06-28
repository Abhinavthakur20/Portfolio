"use client";

import dynamic from "next/dynamic";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { socials } from "@/config/socials";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ThreeCanvas = dynamic(() => import("@/components/ThreeCanvas/ThreeCanvas"), {
  ssr: false,
});

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <ThreeCanvas />
      <div className={styles.page}>
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <footer className={styles.footer}>
          <div className={`${styles.footerInner} container`}>
            <p className={styles.footerText}>
              Building practical web and AI products — <strong>Abhinav Thakur</strong>
            </p>
            <div className={styles.footerSocials}>
              <motion.a 
                href={socials.github} target="_blank" rel="noopener noreferrer" 
                className={styles.socialLink} aria-label="GitHub"
                style={{ "--social-hover-color": "#24292e" } as React.CSSProperties}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} />
              </motion.a>
              <motion.a 
                href={socials.linkedin} target="_blank" rel="noopener noreferrer" 
                className={styles.socialLink} aria-label="LinkedIn"
                style={{ "--social-hover-color": "#0077b5" } as React.CSSProperties}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a 
                href={socials.twitter} target="_blank" rel="noopener noreferrer" 
                className={styles.socialLink} aria-label="Twitter"
                style={{ "--social-hover-color": "#1da1f2" } as React.CSSProperties}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter size={18} />
              </motion.a>
              <motion.a 
                href={socials.email} 
                className={styles.socialLink} aria-label="Email"
                style={{ "--social-hover-color": "var(--accent-red)" } as React.CSSProperties}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
              </motion.a>
            </div>
            <p className={styles.footerCopy}>© {new Date().getFullYear()}</p>
          </div>
        </footer>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className={styles.scrollTopBtn}
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
