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
          Available for Freelance & Contract
        </div>
        
        <h1 className={styles.title}>
          Crafting Immersive <br />
          <span className="gradient-text">3D Web Systems</span>
        </h1>
        
        <p className={styles.description}>
          I build high-performance, aesthetically stunning web applications that combine modern frontend frameworks with WebGL animations and fluid interactive design.
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
