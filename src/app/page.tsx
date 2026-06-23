"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
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
        {/* Ambient background glow blobs */}
        <motion.div 
          className={`${styles.bgBlob} ${styles.blobPurple}`}
          style={{ top: "22%", right: "-10%" }}
          animate={{
            x: [0, 20, -15, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.08, 0.92, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className={`${styles.bgBlob} ${styles.blobBlue}`}
          style={{ top: "45%", left: "-12%" }}
          animate={{
            x: [0, -25, 20, 0],
            y: [0, 20, -25, 0],
            scale: [1, 0.92, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className={`${styles.bgBlob} ${styles.blobGreen}`}
          style={{ top: "68%", right: "-8%" }}
          animate={{
            x: [0, 15, -20, 0],
            y: [0, -20, 15, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className={`${styles.bgBlob} ${styles.blobRed}`}
          style={{ top: "85%", left: "-10%" }}
          animate={{
            x: [0, -20, 15, 0],
            y: [0, 25, -20, 0],
            scale: [1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
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
