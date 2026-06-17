"use client";

import { Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import styles from "./Projects.module.css";
export default function Projects() {
  return (
    <section id="projects" className={`${styles.projects} section container`}>
      <div className={styles.titleSection}>
        <span className={styles.subtitle}>Selected Works</span>
        <h2 className={styles.title}>Project Showcases</h2>
      </div>

      <div className={styles.asymmetricGrid}>
        {/* Project 1: Featured Platform (BagPacker) - Full Width Banner */}
        <div className={`${styles.featuredCard} glass-card glow-effect`}>
          <div className={styles.featuredDetails}>
            <div className={styles.cardHeaderInfo}>
              <span className={styles.projectIndex}>01</span>
              <span className={styles.featuredBadge}>FEATURED WORK</span>
            </div>
            
            <h3 className={styles.projectTitle}>BagPacker</h3>
            
            <p className={styles.projectDesc}>
              A full-stack travel platform for companion matching, seat-managed group bookings, secure Razorpay pipelines, Socket.io messaging, and an AI travel copilot.
            </p>

            <div className={styles.featuredMetrics}>
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>40+</span>
                <span className={styles.metricLbl}>REST Endpoints</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>Low-Latency</span>
                <span className={styles.metricLbl}>Chat & Logs</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>RBAC</span>
                <span className={styles.metricLbl}>Secured Routes</span>
              </div>
            </div>

            <div className={styles.tagContainer}>
              {["React.js", "Node.js", "Socket.io", "Razorpay", "MongoDB"].map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>

            <div className={styles.linkGroup}>
              <a
                href="https://github.com/Abhinavthakur20/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryLink}
              >
                <Github size={16} /> Code Repository
              </a>
              <a
                href="https://github.com/Abhinavthakur20/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryLink}
              >
                Live Demo <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className={styles.featuredVisual}>
            <div className={styles.browserFrame}>
              <div className={styles.browserHeader}>
                <span className={styles.dotRed}></span>
                <span className={styles.dotYellow}></span>
                <span className={styles.dotGreen}></span>
                <span className={styles.browserAddress}>localhost:3000/travel-match</span>
              </div>
              <div className={styles.browserBody}>
                <Image
                  src="/bagpacker.png"
                  alt="BagPacker travel planner workspace"
                  className={styles.browserImg}
                  width={640}
                  height={360}
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second Row: Supporting Grid Projects (Side-by-side) */}
        <div className={styles.subGrid}>
          {/* Project 2: Drawza */}
          <div className={`${styles.gridCard} glass-card glow-effect`}>
            <div className={styles.cardInfo}>
              <div className={styles.cardHeaderInfo}>
                <span className={styles.projectIndex}>02</span>
                <span className={styles.gridBadge}>REAL-TIME COLLAB</span>
              </div>
              
              <h3 className={styles.projectTitle}>Drawza</h3>
              
              <p className={styles.projectDesc}>
                A collaborative whiteboard supporting live cursor sync, drawing broadcasts, WebRTC voice channels, optimistic Zustand updates, and canvas state recovery.
              </p>

              <div className={styles.tagContainer}>
                {["React.js", "Socket.io", "WebRTC", "Zustand", "MongoDB"].map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>

              <div className={styles.linkGroup}>
                <a
                  href="https://github.com/Abhinavthakur20/Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconLink}
                >
                  <Github size={15} /> Code
                </a>
                <a
                  href="https://github.com/Abhinavthakur20/Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconLink}
                >
                  Live <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            <div className={styles.gridVisual}>
              <div className={styles.terminalOverlay}>
                <div className={styles.terminalHeader}>
                  <span className={styles.termDotRed}></span>
                  <span className={styles.termDotYellow}></span>
                  <span className={styles.termDotGreen}></span>
                  <span className={styles.terminalTitle}>canvas-stream.log</span>
                </div>
                <div className={styles.terminalCode}>
                  <code>
                    <span className={styles.logTag}>[SOCKET]</span> active connection established<br />
                    <span className={styles.logTag}>[WEBRTC]</span> audio payload broadcasting<br />
                    <span className={styles.logTag}>[ZUSTAND]</span> state synced (latency: 14ms)
                  </code>
                </div>
              </div>
              
              <div className={styles.imageFrame}>
                <Image
                  src="/drawza.png"
                  alt="Drawza whiteboard interface"
                  className={styles.cardImg}
                  width={400}
                  height={225}
                  priority={false}
                />
              </div>
            </div>
          </div>

          {/* Project 3: Java & ML Systems */}
          <div className={`${styles.gridCard} glass-card glow-effect`}>
            <div className={styles.cardInfo}>
              <div className={styles.cardHeaderInfo}>
                <span className={styles.projectIndex}>03</span>
                <span className={styles.gridBadge}>SYSTEMS & DATA</span>
              </div>
              
              <h3 className={styles.projectTitle}>Java & ML Systems</h3>
              
              <p className={styles.projectDesc}>
                Object-oriented Java systems and Machine Learning validation models implementing core data structures, OOP principles, and ML algorithms.
              </p>

              <div className={styles.tagContainer}>
                {["Java", "OOP", "Python", "ML Algorithms"].map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>

              <div className={styles.linkGroup}>
                <a
                  href="https://github.com/Abhinavthakur20/Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconLink}
                >
                  <Github size={15} /> Code
                </a>
                <a
                  href="https://github.com/Abhinavthakur20/Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconLink}
                >
                  Model Docs <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            <div className={styles.gridVisual}>
              <div className={styles.terminalOverlay}>
                <div className={styles.terminalHeader}>
                  <span className={styles.termDotRed}></span>
                  <span className={styles.termDotYellow}></span>
                  <span className={styles.termDotGreen}></span>
                  <span className={styles.terminalTitle}>ModelValidation.java</span>
                </div>
                <div className={styles.terminalCode}>
                  <code>
                    <span className={styles.keyword}>double</span> accuracy = validate(model);<br />
                    System.out.printf(<span className={styles.string}>&quot;Accuracy: %.3f&quot;</span>, accuracy);<br />
                    <span className={styles.comment}>{"// Validation Result: 94.2%"}</span>
                  </code>
                </div>
              </div>

              <div className={styles.imageFrame}>
                <Image
                  src="/linear_editor.png"
                  alt="Java system console"
                  className={styles.cardImg}
                  width={400}
                  height={225}
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
