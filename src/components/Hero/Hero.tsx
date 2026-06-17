"use client";

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
      <div className={styles.content}>
        <div className={styles.welcome}>
          <span className={styles.welcomeDot}></span>
          Full-Stack MERN Developer
        </div>
        
        <h1 className={styles.title}>
          Hi, I&apos;m Abhinav Thakur <br />
          <span className="gradient-text">MERN & Real-Time Systems</span>
        </h1>
        
        <p className={styles.description}>
          I build scalable real-time systems, secure payment pipelines, and AI-powered web applications using React, Node.js, Express, MongoDB, Socket.io, and WebRTC.
        </p>
        
        <div className={styles.btnGroup}>
          <button 
            onClick={() => handleScrollToSection("projects")} 
            className={styles.primaryBtn}
          >
            Explore Projects
          </button>
          
          <button 
            onClick={() => handleScrollToSection("contact")} 
            className={styles.secondaryBtn}
          >
            Let&apos;s Connect
          </button>
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
