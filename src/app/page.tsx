"use client";

import dynamic from "next/dynamic";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { socials } from "@/config/socials";

const ThreeCanvas = dynamic(() => import("@/components/ThreeCanvas/ThreeCanvas"), {
  ssr: false,
});

export default function Home() {
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
              Crafted with care by <strong>Abhinav Thakur</strong>
            </p>
            <div className={styles.footerSocials}>
              <a href={socials.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href={socials.email} className={styles.socialLink} aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
            <p className={styles.footerCopy}>© {new Date().getFullYear()}</p>
          </div>
        </footer>
      </div>
    </>
  );
}
