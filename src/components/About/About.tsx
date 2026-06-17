"use client";

import { Award, Briefcase, GraduationCap, ShieldCheck } from "lucide-react";
import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={`${styles.about} section container`}>
      <div className={styles.titleSection}>
        <span className={styles.subtitle}>Discover</span>
        <h2 className={styles.title}>About Me</h2>
      </div>

      <div className={styles.bentoGrid}>
        {/* Block 1: Biography Card (Spans 2 columns) */}
        <div className={`${styles.bioItem} glass-card`}>
          <div className={styles.bioHeader}>
            <div className={styles.profileWrapper}>
              <Image
                src="/profile.png"
                alt="Abhinav Thakur Profile"
                className={styles.profileImage}
                width={70}
                height={70}
                priority
              />
            </div>
            <div>
              <h3 className={styles.bentoTitle}>
                <Award size={20} className="gradient-text" style={{ marginRight: "0.5rem" }} />
                My Journey
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>Abhinav Thakur | MERN Trainee</p>
            </div>
          </div>
          
          <p className={styles.bioText} style={{ marginTop: "1rem" }}>
            I am a Full-Stack MERN developer with hands-on internship experience building real-time collaborative whiteboards, group travel planners, WebSocket communication layers, and secure payment integrations.
          </p>
          <p className={styles.highlightText}>
            I bridge the gap between backend API architecture and high-performance frontend interfaces.
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

        {/* Block 2: Experience Card (Tall, Spans 1 column) */}
        <div className={`${styles.experienceItem} glass-card`}>
          <h3 className={styles.bentoTitle}>
            <Briefcase size={20} style={{ color: "var(--accent-orange)", marginRight: "0.5rem" }} />
            Work Internship
          </h3>

          <div className={styles.experienceDetails}>
            <span className={styles.dateBadge}>Dec 2025 - May 2026</span>
            <h4 className={styles.roleTitle}>Web Developer Trainee</h4>
            <div className={styles.companyTitle}>O7 Services | Jalandhar</div>
            <ul className={styles.bulletsList}>
              <li>Built and shipped <b>BagPacker</b>, a travel tech system handling group bookings.</li>
              <li>Integrated Razorpay payment pipeline with email ticket confirmations.</li>
              <li>Designed low-latency chat hubs and direct messaging with Socket.io.</li>
              <li>Deployed 40+ endpoints securing authentication with JWT & RBAC levels.</li>
            </ul>
          </div>
        </div>

        {/* Block 3: Education Card (Row 2, Column 1) */}
        <div className={`${styles.educationItem} glass-card`}>
          <h3 className={styles.bentoTitle}>
            <GraduationCap size={20} style={{ color: "var(--text-secondary)", marginRight: "0.5rem" }} />
            Education
          </h3>
          <div style={{ marginTop: "1rem" }}>
            <span className={styles.dateBadge}>2022 - 2026</span>
            <h4 className={styles.roleTitle} style={{ fontSize: "1.05rem" }}>B.Tech in Computer Science</h4>
            <div className={styles.companyTitle} style={{ marginBottom: "0.5rem" }}>Guru Nanak Dev University</div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              Focused on DSA, Database Management, Systems, OOP and Web Development architectures.
            </p>
          </div>
        </div>

        {/* Block 4: Credentials Card (Row 2, Column 2) */}
        <div className={`${styles.certsItem} glass-card`}>
          <h3 className={styles.bentoTitle}>
            <ShieldCheck size={20} style={{ color: "var(--text-muted)", marginRight: "0.5rem" }} />
            Certifications
          </h3>
          <div className={styles.certsList} style={{ marginTop: "1rem" }}>
            <div className={styles.certItem}>
              <h5 style={{ fontWeight: 600, color: "var(--text-primary)" }}>Java Programming</h5>
              <p style={{ fontSize: "0.825rem", color: "var(--text-muted)" }}>Crio.Do - Core OOP, collections, multithreading.</p>
            </div>
            <div className={styles.certItem} style={{ marginTop: "0.75rem" }}>
              <h5 style={{ fontWeight: 600, color: "var(--text-primary)" }}>Demystifying AI/ML</h5>
              <p style={{ fontSize: "0.825rem", color: "var(--text-muted)" }}>TalentSprint - ML algorithms, models evaluation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
