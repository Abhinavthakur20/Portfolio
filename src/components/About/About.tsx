"use client";

import { Award, Briefcase } from "lucide-react";
import Image from "next/image";
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
            <Award size={22} className="gradient-text" />
            My Journey
          </h3>
          <div className={styles.profileWrapper}>
            <Image
              src="/profile.png"
              alt="Abhinav Thakur Profile"
              className={styles.profileImage}
              width={90}
              height={90}
              priority
            />
          </div>
          <p className={styles.bioText}>
            Hello! I am a Full-Stack MERN developer and computer science student with hands-on internship experience building real-time systems, secure payment integrations, and AI-powered web applications.
          </p>
          <p className={styles.highlightText}>
            I focus on designing and contributing to scalable, impactful products that solve real-world problems.
          </p>
          <p className={styles.bioText}>
            From schema architectures handling extensive relational collections to frontends with reusable components, I love building low-latency, secure collaborative systems that people enjoy using.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNum}>7.58</span>
              <span className={styles.statLabel}>B.Tech CGPA</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNum}>40+</span>
              <span className={styles.statLabel}>REST Endpoints</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNum}>14+</span>
              <span className={styles.statLabel}>DB Collections</span>
            </div>
          </div>
        </div>

        {/* Right Column: Timeline */}
        <div className={`${styles.timelineCard} glass-card`}>
          <h3 className={styles.timelineTitle}>
            <Briefcase size={22} style={{ color: "var(--accent-orange)" }} />
            Experience & Education
          </h3>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <span className={styles.timelineDot}></span>
              <span className={styles.timelineDate}>Dec 2025 - May 2026</span>
              <h4 className={styles.timelineRole}>Web Developer Trainee</h4>
              <div className={styles.timelineCompany}>O7 Services | Jalandhar, Punjab</div>
              <p className={styles.timelineDesc}>
                Built BagPacker trip planner, integrated Razorpay payment pipeline, implemented role-based access, and deployed 40+ REST API endpoints.
              </p>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.timelineDot}></span>
              <span className={styles.timelineDate}>Aug 2022 - May 2026</span>
              <h4 className={styles.timelineRole}>B.Tech in Computer Science</h4>
              <div className={styles.timelineCompany}>Guru Nanak Dev University | Punjab, India</div>
              <p className={styles.timelineDesc}>
                Studied Data Structures & Algorithms, DBMS, Operating Systems, OOP, and Web Development. (CGPA: 7.58/10)
              </p>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.timelineDot}></span>
              <span className={styles.timelineDate}>Certifications</span>
              <h4 className={styles.timelineRole}>Professional Credentials</h4>
              <div className={styles.timelineCompany}>Crio.Do & TalentSprint</div>
              <p className={styles.timelineDesc}>
                Core Java & OOP principles (Crio.Do) and ML algorithms with practical AI applications (TalentSprint).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
