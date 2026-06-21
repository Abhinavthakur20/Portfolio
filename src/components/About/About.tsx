"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./About.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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
            <motion.div className={styles.profileCard} variants={cardVariants}>
              <Image
                src="/profile.png"
                alt="Abhinav Thakur"
                width={130}
                height={130}
                className={styles.profileImg}
                priority
              />
            </motion.div>

            <div className={styles.statsRow}>
              <motion.div className={styles.stat} variants={cardVariants}>
                <span className={styles.statVal}>7.58</span>
                <span className={styles.statLabel}>B.Tech CGPA</span>
              </motion.div>
              <motion.div className={styles.stat} variants={cardVariants}>
                <span className={styles.statVal}>4+</span>
                <span className={styles.statLabel}>Projects Shipped</span>
              </motion.div>
            </div>

            <motion.div className={styles.experience} variants={cardVariants}>
              <div className={styles.expBadge}>Dec 2025 — Present</div>
              <h4 className={styles.expTitle}>Web Developer Trainee</h4>
              <p className={styles.expPlace}>O7 Services • Jalandhar</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
