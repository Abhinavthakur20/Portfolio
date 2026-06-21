"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 14,
    },
  },
};

export default function About() {
  return (
    <section id="about" className={`${styles.about} section`}>
      <div className={`${styles.inner} container`}>
        <div className={styles.layout}>
          <motion.div 
            className={styles.left}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className={styles.title}>Behind the code</h2>
            <p className={styles.subtitle}>
              A quick peek into my world.
            </p>

            <div className={styles.bio}>
              <p>
                I&apos;m <strong>Abhinav Thakur</strong>, a Computer Science student at 
                Guru Nanak Dev University, currently working as a Web Developer Trainee 
                at O7 Services, Jalandhar.
              </p>
              <p>
                I specialize in building full-stack applications — from real-time chat 
                systems and payment flows to AI-powered tools with vector search and 
                LLM streaming. I care deeply about clean architecture and shipping 
                products that actually work.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new tech, reading 
                about distributed systems, or sketching out product ideas.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.right}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className={styles.timeline}>
              {/* Event 1: Work Experience (Most Recent) */}
              <motion.div className={styles.timelineItem} variants={cardVariants}>
                <div className={`${styles.timelineDot} ${styles.timelineDotExp}`} />
                <div className={styles.timelineContent}>
                  <span className={`${styles.cardTypeBadge} ${styles.cardTypeBadgeExp}`}>Work Experience</span>
                  <div className={styles.timelineHeader}>
                    <h4 className={styles.cardMainTitle}>Web Developer Trainee</h4>
                    <span className={styles.metaPeriod}>Dec 2025 — Present</span>
                  </div>
                  <p className={styles.cardSubTitle}>O7 Services • Jalandhar</p>
                  <div className={styles.cardMeta}>
                    <span className={styles.metaBadge}>Traineeship</span>
                    <span className={styles.metaBadge} style={{ background: "rgba(230, 57, 70, 0.05)", color: "var(--accent-red)", border: "none" }}>Full-Stack MERN</span>
                  </div>
                </div>
              </motion.div>

              {/* Event 2: Education */}
              <motion.div className={styles.timelineItem} variants={cardVariants}>
                <div className={`${styles.timelineDot} ${styles.timelineDotEdu}`} />
                <div className={styles.timelineContent}>
                  <span className={`${styles.cardTypeBadge} ${styles.cardTypeBadgeEdu}`}>Education</span>
                  <div className={styles.timelineHeader}>
                    <h4 className={styles.cardMainTitle}>B.Tech in Computer Science & Engineering</h4>
                    <span className={styles.metaPeriod}>2022 — 2026</span>
                  </div>
                  <p className={styles.cardSubTitle}>Guru Nanak Dev University, Amritsar</p>
                  <div className={styles.cardMeta}>
                    <span className={styles.metaBadge}>CGPA: 7.58 / 10</span>
                    <span className={styles.metaBadge} style={{ background: "rgba(2, 132, 199, 0.05)", color: "#0284c7", border: "none" }}>B.Tech CSE</span>
                  </div>
                </div>
              </motion.div>

              {/* Highlight Event: Shipped Projects */}
              <motion.div className={styles.timelineItem} variants={cardVariants}>
                <div className={`${styles.timelineDot}`} style={{ border: "3px solid #f39c12" }} />
                <div className={styles.timelineContent} style={{ padding: "1rem 1.25rem" }}>
                  <div className={styles.timelineHeader} style={{ alignItems: "center" }}>
                    <div>
                      <h4 className={styles.cardMainTitle} style={{ fontSize: "1rem" }}>4+ High-impact projects</h4>
                      <p className={styles.cardSubTitle} style={{ fontSize: "0.8rem", marginTop: "0.15rem" }}>Shipped using modern AI & Full-Stack Tech</p>
                    </div>
                    <span className={styles.metaBadge} style={{ background: "rgba(26,26,26,0.05)", border: "none", fontSize: "0.95rem", padding: "0.3rem 0.5rem" }}>🚀</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
