"use client";

import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={`${styles.about} section`}>
      <div className={`${styles.inner} container`}>
        <div className={styles.layout}>
          <div className={styles.left}>
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
          </div>

          <div className={styles.right}>
            <div className={styles.profileCard}>
              <Image
                src="/profile.png"
                alt="Abhinav Thakur"
                width={200}
                height={200}
                className={styles.profileImg}
                priority
              />
            </div>

            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span className={styles.statVal}>7.58</span>
                <span className={styles.statLabel}>B.Tech CGPA</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statVal}>4+</span>
                <span className={styles.statLabel}>Projects Shipped</span>
              </div>
            </div>

            <div className={styles.experience}>
              <div className={styles.expBadge}>Dec 2025 — Present</div>
              <h4 className={styles.expTitle}>Web Developer Trainee</h4>
              <p className={styles.expPlace}>O7 Services • Jalandhar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
