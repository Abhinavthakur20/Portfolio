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
      {/* Giant layout backdrop text */}
      <div className={styles.giantBackgroundText}>ABHINAV</div>
      
      <div className={styles.content}>
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
