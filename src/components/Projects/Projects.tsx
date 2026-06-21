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
              A full-stack travel platform for companion matching, seat-managed group bookings, secure Razorpay payments, Socket.IO messaging, and an AI-assisted travel copilot.
            </p>

            <div className={styles.featuredMetrics}>
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>40+</span>
                <span className={styles.metricLbl}>REST Endpoints</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>Low-Latency</span>
                <span className={styles.metricLbl}>Chat & Sockets</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>Razorpay</span>
                <span className={styles.metricLbl}>Secured Payments</span>
              </div>
            </div>

            <div className={styles.tagContainer}>
              {["React 19", "Vite", "Node.js / Express", "MongoDB", "Socket.IO", "Razorpay", "Nodemailer", "Groq API"].map(tag => (
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
                <span className={styles.browserAddress}>localhost:5173</span>
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
                A collaborative whiteboard application supporting room-based drawing sync, real-time cursor presence, WebRTC voice chat signaling, and board state auto-saving.
              </p>

              <div className={styles.tagContainer}>
                {["React", "Vite", "Zustand", "Node.js", "Socket.IO", "WebRTC", "MongoDB"].map(tag => (
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
                    <span className={styles.logTag}>[SOCKET]</span> joined room: room_102<br />
                    <span className={styles.logTag}>[WEBRTC]</span> voice signal broadcasting<br />
                    <span className={styles.logTag}>[ZUSTAND]</span> board state auto-saved (MongoDB)
                  </code>
                </div>
              </div>

              <div className={styles.imageFrame}>
                <Image
                  src="/drawza.png"
                  alt="Drawza collaborative whiteboard workspace"
                  className={styles.cardImg}
                  width={400}
                  height={225}
                  priority={false}
                />
              </div>
            </div>
          </div>

          {/* Project 3: Eco-Route */}
          <div className={`${styles.gridCard} glass-card glow-effect`}>
            <div className={styles.cardInfo}>
              <div className={styles.cardHeaderInfo}>
                <span className={styles.projectIndex}>03</span>
                <span className={styles.gridBadge}>SUSTAINABLE TRANSIT</span>
              </div>
              
              <h3 className={styles.projectTitle}>Eco-Route</h3>
              
              <p className={styles.projectDesc}>
                A carbon journey planner comparing real-time transit emissions, mapping OSRM-computed paths using Leaflet, and logging user savings in local storage.
              </p>

              <div className={styles.tagContainer}>
                {["React", "Vite", "Leaflet Maps", "OSRM API", "Nominatim", "Tailwind CSS", "LocalStorage"].map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>

              <div className={styles.linkGroup}>
                <a
                  href="https://github.com/Abhinavthakur20/eco-route"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconLink}
                >
                  <Github size={15} /> Code
                </a>
                <a
                  href="https://github.com/Abhinavthakur20/eco-route"
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
                  <span className={styles.terminalTitle}>osrm-router.ts</span>
                </div>
                <div className={styles.terminalCode}>
                  <code>
                    <span className={styles.keyword}>const</span> route = <span className={styles.keyword}>await</span> fetchRoute(start, end);<br />
                    <span className={styles.keyword}>const</span> co2Saved = calcSavings(distance, mode);<br />
                    updateLocalStats(co2Saved); <span className={styles.comment}>// localStorage tracker</span>
                  </code>
                </div>
              </div>

              <div className={styles.imageFrame}>
                <Image
                  src="/linear_editor.png"
                  alt="Eco-Route map layout dashboard"
                  className={styles.cardImg}
                  width={400}
                  height={225}
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project 4: Featured Platform (Vivid Prompt Forge) - Full Width Banner */}
        <div className={`${styles.featuredCard} glass-card glow-effect`}>
          <div className={styles.featuredDetails}>
            <div className={styles.cardHeaderInfo}>
              <span className={styles.projectIndex}>04</span>
              <span className={styles.featuredBadge}>FEATURED WORK</span>
            </div>
            
            <h3 className={styles.projectTitle}>Vivid Prompt Forge</h3>
            
            <p className={styles.projectDesc}>
              A full-stack AI application designed for creative directors to generate, refine, and stream high-conversion, policy-compliant ad prompts for image/video generative AI models.
            </p>

            <div className={styles.featuredMetrics}>
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>768-D</span>
                <span className={styles.metricLbl}>Vector Embed</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>Real-Time</span>
                <span className={styles.metricLbl}>Streaming SSE</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>Fail-Safe</span>
                <span className={styles.metricLbl}>In-Memory Fallback</span>
              </div>
            </div>

            <div className={styles.tagContainer}>
              {["Next.js 14", "React 18", "Supabase", "pgvector", "Groq / xAI", "Tailwind CSS"].map(tag => (
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
                <span className={styles.browserAddress}>localhost:3000/prompt-forge</span>
              </div>
              <div className={styles.browserBody}>
                <Image
                  src="/glass_analytics.png"
                  alt="Vivid Prompt Forge dashboard workspace"
                  className={styles.browserImg}
                  width={640}
                  height={360}
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
