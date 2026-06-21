"use client";

import { Briefcase, GraduationCap, ShieldCheck } from "lucide-react";
import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.titleSection}>
        <span className={styles.subtitle}>Discover</span>
        <h2 className={styles.title}>About Me</h2>
      </div>

      {/* Biography Block */}
      <div className={styles.biographyCard}>
        <div className={styles.bioHeader}>
          <div className={styles.profileWrapper}>
            <Image
              src="/profile.png"
              alt="Abhinav Thakur Profile"
              className={styles.profileImage}
              width={64}
              height={64}
              priority
            />
          </div>
          <div>
            <h3 className={styles.bioName}>Abhinav Thakur</h3>
            <p className={styles.bioSub}>Software Engineer & Full-Stack AI Developer</p>
          </div>
        </div>
        
        <p className={styles.bioText}>
          I am a Full-Stack AI developer with hands-on experience building local unigram/bigram vector embedders, pgvector hybrid search databases, HTML5 streaming chat interfaces, and high-availability LLM failover cascades.
        </p>
        
        <p className={styles.highlightText}>
          I bridge the gap between backend vector/RAG architecture and high-performance, real-time AI client interfaces.
        </p>

        {/* LCD-Style Stats Row */}
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>7.58</span>
            <span className={styles.statLabel}>B.Tech CGPA</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>768-D</span>
            <span className={styles.statLabel}>Vector Embed</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Uptime Fallback</span>
          </div>
        </div>
      </div>

      {/* Timeline Grid (Experience / Education side-by-side) */}
      <div className={styles.timelineGrid}>
        {/* Experience Column */}
        <div className={styles.timelineColumn}>
          <h3 className={styles.columnHeader}>
            <Briefcase size={18} style={{ marginRight: "0.5rem", color: "var(--accent-orange)" }} />
            Work Internship
          </h3>
          
          <div className={styles.timelineItem}>
            <span className={styles.dateBadge}>Dec 2025 - May 2026</span>
            <h4 className={styles.roleTitle}>Web Developer Trainee</h4>
            <div className={styles.companyTitle}>O7 Services | Jalandhar</div>
            <ul className={styles.bulletsList}>
              <li>Built and shipped <b>BagPacker</b> (travel platform), <b>Drawza</b> (real-time whiteboard), and <b>Vivid Prompt Forge</b> (AI prompt manager).</li>
              <li>Integrated Razorpay payment systems, WebRTC voice chat signaling, and offline unigram/bigram token embeddings.</li>
              <li>Designed low-latency room-based socket networks (Socket.IO) and Supabase pgvector search with database fail-safe backends.</li>
              <li>Developed context-aware LLM provider routing (xAI, Groq) and auto-saving MongoDB board state pipelines.</li>
            </ul>
          </div>
        </div>

        {/* Education & Credentials Column */}
        <div className={styles.timelineColumn}>
          <h3 className={styles.columnHeader}>
            <GraduationCap size={18} style={{ marginRight: "0.5rem", color: "var(--text-primary)" }} />
            Education
          </h3>
          
          <div className={styles.timelineItem}>
            <span className={styles.dateBadge}>2022 - 2026</span>
            <h4 className={styles.roleTitle}>B.Tech in Computer Science</h4>
            <div className={styles.companyTitle}>Guru Nanak Dev University</div>
            <p className={styles.columnDesc}>
              Focused on DSA, Database Management, Systems, OOP and Web Development architectures.
            </p>
          </div>

          <h3 className={styles.columnHeader} style={{ marginTop: "2rem" }}>
            <ShieldCheck size={18} style={{ marginRight: "0.5rem", color: "var(--text-muted)" }} />
            Certifications
          </h3>

          <div className={styles.certsList}>
            <div className={styles.certItem}>
              <h5 className={styles.certTitle}>Java Programming</h5>
              <p className={styles.certDesc}>Crio.Do - Core OOP, collections, multithreading.</p>
            </div>
            <div className={styles.certItem}>
              <h5 className={styles.certTitle}>Demystifying AI/ML</h5>
              <p className={styles.certDesc}>TalentSprint - ML algorithms, models evaluation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
