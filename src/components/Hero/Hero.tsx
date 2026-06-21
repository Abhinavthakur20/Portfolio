"use client";

import { Send } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Decorative blobs */}
      <div className={`${styles.blob} ${styles.blobBlue}`}></div>
      <div className={`${styles.blob} ${styles.blobRed}`}></div>

      <div className={styles.content}>
        <p className={styles.greeting}>Hi, I&apos;m Abhinav</p>
        
        <h1 className={styles.title}>
          Full-Stack AI<br />
          Developer you<br />
          can count on
        </h1>

        <p className={styles.subtitle}>
          I build scalable AI platforms, real-time collaborative apps, 
          and resilient backend architectures. I help startups ship 
          production-grade products fast.
        </p>

        <button 
          className={styles.ctaBtn}
          onClick={() => handleScroll("contact")}
        >
          Chat with me
        </button>
      </div>

      {/* Step into section */}
      <div className={styles.stepInto}>
        <div className={styles.stepIcon}>🚀</div>
        <p className={styles.stepText}>Step into my digital home</p>
      </div>
    </section>
  );
}
