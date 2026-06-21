"use client";

import { Download, Send, ArrowRight, Zap, Cpu, ShieldCheck } from "lucide-react";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const handleScrollToSection = (id: string) => {
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
    <section id="hero" className={`${styles.hero} container`}>
      {/* Giant layout backdrop text */}
      <div className={styles.giantBackgroundText}>ABHINAV</div>
      
      <div className={styles.content}>
        {/* Active Status Pill */}
        <div className={styles.welcome}>
          <span className={styles.welcomeDot}></span>
          Full-Stack AI Developer
        </div>
        
        <h1 className={styles.title}>
          Architecting Scalable <br />
          <span className="gradient-text">AI & RAG Platforms</span>
        </h1>
        
        <p className={styles.description}>
          Computer Science student & AI engineer experienced in building vector retrieval databases, real-time LLM streaming architectures, resilient fail-safe backends, and offline NLP embedding engines.
        </p>

        {/* Center Competencies Spec Grid */}
        <div className={styles.focusGrid}>
          <div className={styles.focusCard}>
            <Zap size={16} className={styles.focusIcon} />
            <span className={styles.focusTitle}>RAG Architecture</span>
          </div>

          <div className={styles.focusCard}>
            <Cpu size={16} className={styles.focusIcon} />
            <span className={styles.focusTitle}>Local Vector Math</span>
          </div>

          <div className={styles.focusCard}>
            <ShieldCheck size={16} className={styles.focusIcon} />
            <span className={styles.focusTitle}>Fail-Safe Routing</span>
          </div>
        </div>
        
        {/* Buttons Row */}
        <div className={styles.btnGroup}>
          <button 
            onClick={() => handleScrollToSection("projects")} 
            className={styles.primaryBtn}
          >
            Explore Projects
            <ArrowRight size={14} style={{ marginLeft: "0.5rem" }} />
          </button>

          <a 
            href="/Resume_Abhinav.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.secondaryBtn}
          >
            <Download size={14} style={{ marginRight: "0.5rem" }} />
            Download CV
          </a>
          
          <button 
            onClick={() => handleScrollToSection("contact")} 
            className={styles.tertiaryBtn}
          >
            <Send size={13} style={{ marginRight: "0.5rem" }} />
            Let&apos;s Connect
          </button>
        </div>

        {/* Centered 3D Stack Developer Workbench Centerpiece */}
        <div className={styles.workbenchContainer}>
          <div className={styles.workbench}>
            {/* Background Guideline Matrix */}
            <div className={styles.workbenchBlueprint}></div>

            {/* Mockup Browser Window */}
            <div className={styles.workbenchMockupCard}>
              <div className={styles.mockupHeader}>
                <span className={styles.mockupCircle}></span>
                <span className={styles.mockupCircle}></span>
                <span className={styles.mockupCircle}></span>
                <span className={styles.mockupAddress}>localhost:3000/prompt-forge</span>
              </div>
              <div className={styles.mockupImageWrapper}>
                <Image
                  src="/studio_portal.png"
                  alt="Developer portal mockup"
                  width={380}
                  height={220}
                  className={styles.mockupImg}
                  priority
                />
              </div>
            </div>

            {/* Floating Terminal Block */}
            <div className={styles.codeTerminal}>
              <div className={styles.terminalHeader}>
                <span className={styles.dotRed}></span>
                <span className={styles.dotYellow}></span>
                <span className={styles.dotGreen}></span>
                <span className={styles.terminalTitle}>stream-route.ts</span>
              </div>
              <div className={styles.terminalBody}>
                <pre>
                  <code>
                    <span className={styles.keyword}>const</span> stream = <span className={styles.keyword}>new</span> <span className={styles.class}>ReadableStream</span>(&#123;<br />
                    &nbsp;&nbsp;start(controller) &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.keyword}>const</span> reader = response.body.getReader();<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;pushChunks(reader, controller);<br />
                    &nbsp;&nbsp;&#125;<br />
                    &#125;);
                  </code>
                </pre>
              </div>
            </div>

            {/* Floating Profile Tag */}
            <div className={styles.avatarCard}>
              <div className={styles.avatarWrapper}>
                <Image
                  src="/profile.png"
                  alt="Abhinav Profile avatar"
                  width={38}
                  height={38}
                  className={styles.avatarImg}
                />
              </div>
              <div className={styles.avatarLabel}>
                <span className={styles.avatarName}>Abhinav Thakur</span>
                <span className={styles.avatarStatus}>Available for roles</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        className={styles.scrollIndicator} 
        onClick={() => handleScrollToSection("about")}
      >
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
}
