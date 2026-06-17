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
          Full-Stack MERN Trainee
        </div>
        
        <h1 className={styles.title}>
          Architecting Scalable <br />
          <span className="gradient-text">Real-Time Systems</span>
        </h1>
        
        <p className={styles.description}>
          Computer Science student & MERN engineer experienced in building group travel portals, collaborative whiteboards, WebSocket communication layers, and secure Razorpay pipelines.
        </p>

        {/* Center Competencies Spec Grid */}
        <div className={styles.focusGrid}>
          <div className={styles.focusCard}>
            <Zap size={16} className={styles.focusIcon} />
            <span className={styles.focusTitle}>Real-Time Sync</span>
          </div>

          <div className={styles.focusCard}>
            <Cpu size={16} className={styles.focusIcon} />
            <span className={styles.focusTitle}>Optimistic State</span>
          </div>

          <div className={styles.focusCard}>
            <ShieldCheck size={16} className={styles.focusIcon} />
            <span className={styles.focusTitle}>Secure Billing</span>
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
                <span className={styles.mockupAddress}>localhost:3000/bagpacker</span>
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
                <span className={styles.terminalTitle}>socket-server.ts</span>
              </div>
              <div className={styles.terminalBody}>
                <pre>
                  <code>
                    <span className={styles.keyword}>const</span> io = <span className={styles.keyword}>new</span> <span className={styles.class}>Server</span>(<span className={styles.number}>3001</span>);<br />
                    io.<span className={styles.function}>on</span>(<span className={styles.string}>&quot;connection&quot;</span>, (socket) =&gt; &#123;<br />
                    &nbsp;&nbsp;socket.<span className={styles.function}>on</span>(<span className={styles.string}>&quot;draw&quot;</span>, (vector) =&gt; &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;socket.<span className={styles.property}>broadcast</span>.<span className={styles.function}>emit</span>(<span className={styles.string}>&quot;draw&quot;</span>, vector);<br />
                    &nbsp;&nbsp;&#125;);<br />
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
