"use client";

import { Award, Briefcase } from "lucide-react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={`${styles.about} section container`}>
      <div className={styles.titleSection}>
        <span className={styles.subtitle}>Discover</span>
        <h2 className={styles.title}>About Me</h2>
      </div>

      <div className={styles.content}>
        {/* Left Column: Biography & Stats */}
        <div className={`${styles.bioCard} glass-card`}>
          <h3 className={styles.timelineTitle}>
            <Award size={22} className="gradient-text" style={{ stroke: "url(#blue-purple-gradient)" }} />
            My Journey
          </h3>
          <p className={styles.bioText}>
            Hello! I am a software engineer dedicated to building immersive, high-fidelity digital systems. I specialize in merging advanced web development patterns with interactive WebGL rendering.
          </p>
          <p className={styles.highlightText}>
            I bridge the gap between creative visual artistry and complex technical engineering.
          </p>
          <p className={styles.bioText}>
            Over the years, I have honed my skills in frameworks like Next.js and React, pairing them with Three.js/WebGL pipelines to craft experiences that wow visitors while maintaining perfect performance and accessibility.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNum}>5+</span>
              <span className={styles.statLabel}>Years Exp</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNum}>40+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNum}>99%</span>
              <span className={styles.statLabel}>Success</span>
            </div>
          </div>
        </div>

        {/* Right Column: Timeline */}
        <div className={`${styles.timelineCard} glass-card`}>
          <h3 className={styles.timelineTitle}>
            <Briefcase size={22} style={{ color: "var(--accent-blue)" }} />
            Experience & Education
          </h3>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <span className={styles.timelineDot}></span>
              <span className={styles.timelineDate}>2024 - Present</span>
              <h4 className={styles.timelineRole}>Lead Creative Developer</h4>
              <div className={styles.timelineCompany}>Nexus3D Lab | Freelance</div>
              <p className={styles.timelineDesc}>
                Architecting next-gen 3D dashboards and WebGL applications for global tech companies.
              </p>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.timelineDot}></span>
              <span className={styles.timelineDate}>2021 - 2024</span>
              <h4 className={styles.timelineRole}>Senior React Engineer</h4>
              <div className={styles.timelineCompany}>Prism Technologies</div>
              <p className={styles.timelineDesc}>
                Developed scalable SaaS interfaces, driving transition to Next.js App Router and design systems.
              </p>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.timelineDot}></span>
              <span className={styles.timelineDate}>2017 - 2021</span>
              <h4 className={styles.timelineRole}>B.S. in Computer Science</h4>
              <div className={styles.timelineCompany}>Global Tech University</div>
              <p className={styles.timelineDesc}>
                Focused study in Computer Graphics, Algorithms, and Human-Computer Interaction (HCI).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
