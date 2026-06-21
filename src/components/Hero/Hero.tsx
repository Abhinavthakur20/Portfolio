"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] },
    },
  };

  const blobVariants1 = {
    animate: {
      x: [0, 15, -10, 0],
      y: [0, -20, 15, 0],
      scale: [1, 1.05, 0.95, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const blobVariants2 = {
    animate: {
      x: [0, -20, 15, 0],
      y: [0, 15, -20, 0],
      scale: [1, 0.95, 1.05, 1],
      transition: {
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Decorative floating blobs */}
      <motion.div 
        className={`${styles.blob} ${styles.blobBlue}`}
        variants={blobVariants1}
        animate="animate"
      ></motion.div>
      <motion.div 
        className={`${styles.blob} ${styles.blobRed}`}
        variants={blobVariants2}
        animate="animate"
      ></motion.div>

      <motion.div 
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className={styles.greeting} variants={itemVariants}>
          Hi, I&apos;m Abhinav
        </motion.p>
        
        <motion.h1 className={styles.title} variants={itemVariants}>
          Full-Stack AI<br />
          Developer you<br />
          can count on
        </motion.h1>

        <motion.p className={styles.subtitle} variants={itemVariants}>
          I build scalable AI platforms, real-time collaborative apps, 
          and resilient backend architectures. I help startups ship 
          production-grade products fast.
        </motion.p>

        <motion.div variants={itemVariants}>
          <motion.button 
            className={styles.ctaBtn}
            onClick={() => handleScroll("contact")}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            Chat with me
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Step into section */}
      <motion.div 
        className={styles.stepInto}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div 
          className={styles.stepIcon}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          🚀
        </motion.div>
        <p className={styles.stepText}>Step into my digital home</p>
      </motion.div>
    </section>
  );
}
