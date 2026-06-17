"use client";

import dynamic from "next/dynamic";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

// Dynamic import of the 3D canvas (SSR disabled) to prevent hydration mismatches
const ThreeCanvas = dynamic(() => import("@/components/ThreeCanvas/ThreeCanvas"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      {/* 3D WebGL Background Scene */}
      <ThreeCanvas />
      
      {/* Scrollable layout content overlays */}
      <div className={styles.pageContainer}>
        <div className={styles.contentSection}>
          <Header />
        </div>
        
        <main className={styles.mainContent}>
          <div className={styles.contentSection}>
            <Hero />
          </div>
          
          <div className={styles.contentSection}>
            <About />
          </div>
          
          <div className={styles.contentSection}>
            <Skills />
          </div>
          
          <div className={styles.contentSection}>
            <Projects />
          </div>
          
          <div className={styles.contentSection}>
            <Contact />
          </div>
        </main>

        <footer className={styles.footer}>
          <div className={`${styles.footerContainer} container`}>
            <div className={styles.footerLogo}>ABHINAV</div>
            <p>© {new Date().getFullYear()} Abhinav Thakur. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
