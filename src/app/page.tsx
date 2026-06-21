"use client";

import dynamic from "next/dynamic";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

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
          <Projects />
          <Skills />
          <About />
          <Contact />
        </main>
        <footer className={styles.footer}>
          <div className={`${styles.footerInner} container`}>
            <p className={styles.footerText}>
              Crafted with care by <strong>Abhinav Thakur</strong>
            </p>
            <p className={styles.footerCopy}>© {new Date().getFullYear()}</p>
          </div>
        </footer>
      </div>
    </>
  );
}
