"use client";

import { ArrowRight, Download, Send, Zap, Cpu, ShieldCheck } from "lucide-react";
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
      
      <div className={styles.gridContainer}>
        {/* Left Side: Developer details and key strengths */}
        <div className={styles.heroDetails}>
          <div className={styles.welcome}>
            <span className={styles.welcomeDot}></span>
            Full-Stack MERN Trainee
          </div>
          
          <h1 className={styles.title}>
            Architecting <span className="gradient-text">Real-Time</span> <br />
            Systems & Collaborative Spaces
          </h1>
          
          <p className={styles.description}>
            Computer Science student & MERN engineer experienced in building group travel portals, collaborative whiteboards, WebSocket communication layers, and secure payment integrations.
          </p>

          {/* Micro-cards for core engineering focus areas */}
          <div className={styles.focusGrid}>
            <div className={styles.focusCard}>
              <div className={styles.focusIconWrapper}>
                <Zap size={18} className={styles.focusIconOrange} />
              </div>
              <div className={styles.focusInfo}>
                <span className={styles.focusTitle}>Real-Time Sync</span>
                <span className={styles.focusDesc}>Socket.io drawing broadcasts</span>
              </div>
            </div>

            <div className={styles.focusCard}>
              <div className={styles.focusIconWrapper}>
                <Cpu size={18} className={styles.focusIconOrange} />
              </div>
              <div className={styles.focusInfo}>
                <span className={styles.focusTitle}>Optimistic State</span>
                <span className={styles.focusDesc}>Zustand memory caches</span>
              </div>
            </div>

            <div className={styles.focusCard}>
              <div className={styles.focusIconWrapper}>
                <ShieldCheck size={18} className={styles.focusIconOrange} />
              </div>
              <div className={styles.focusInfo}>
                <span className={styles.focusTitle}>Secure Billing</span>
                <span className={styles.focusDesc}>Razorpay pipeline integration</span>
              </div>
            </div>
          </div>
          
          <div className={styles.btnGroup}>
            <button 
              onClick={() => handleScrollToSection("projects")} 
              className={styles.primaryBtn}
            >
              Selected Projects
              <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
            </button>

            <a 
              href="/Resume_Abhinav.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.secondaryBtn}
            >
              <Download size={16} style={{ marginRight: "0.5rem" }} />
              Download CV
            </a>
            
            <button 
              onClick={() => handleScrollToSection("contact")} 
              className={styles.tertiaryBtn}
            >
              <Send size={15} style={{ marginRight: "0.5rem" }} />
              Let&apos;s Connect
            </button>
          </div>
        </div>

        {/* Right Side: Interactive 3D Stack Developer Workbench */}
        <div className={styles.workbenchContainer}>
          <div className={styles.workbench}>
            {/* Layer 1: Technical Grid Blueprint in background */}
            <div className={styles.workbenchBlueprint}></div>

            {/* Layer 2: Graphic/Mockup Frame displaying Studio Portal */}
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
                  alt="Developer portal visualization"
                  width={380}
                  height={220}
                  className={styles.mockupImg}
                  priority
                />
              </div>
            </div>

            {/* Layer 3: Floating Terminal displaying live socket connection */}
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

            {/* Float profile avatar overlay */}
            <div className={styles.avatarCard}>
              <div className={styles.avatarWrapper}>
                <Image
                  src="/profile.png"
                  alt="Abhinav Profile Pic"
                  width={42}
                  height={42}
                  className={styles.avatarImg}
                />
              </div>
              <div className={styles.avatarLabel}>
                <span className={styles.avatarName}>Abhinav Thakur</span>
                <span className={styles.avatarStatus}>Available for Trainee roles</span>
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
