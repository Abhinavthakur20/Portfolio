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
        {/* Project 1: Featured Platform (Vivid Prompt Forge) - Full Width Banner */}
        <div className={`${styles.featuredCard} glass-card glow-effect`}>
          <div className={styles.featuredDetails}>
            <div className={styles.cardHeaderInfo}>
              <span className={styles.projectIndex}>01</span>
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

        {/* Second Row: Supporting Grid Projects (Side-by-side) */}
        <div className={styles.subGrid}>
          {/* Project 2: LiteEmbed NLP Engine */}
          <div className={`${styles.gridCard} glass-card glow-effect`}>
            <div className={styles.cardInfo}>
              <div className={styles.cardHeaderInfo}>
                <span className={styles.projectIndex}>02</span>
                <span className={styles.gridBadge}>NLP & VECTOR EMBED</span>
              </div>
              
              <h3 className={styles.projectTitle}>LiteEmbed NLP Engine</h3>
              
              <p className={styles.projectDesc}>
                A high-performance Node.js unigram/bigram token-hashing text embedding algorithm generating 768-dimensional vector embeddings offline, eliminating external API usage costs.
              </p>

              <div className={styles.tagContainer}>
                {["Node.js", "NLP Algorithms", "Vector Math", "L2 Normalization", "TypeScript"].map(tag => (
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
                  <span className={styles.terminalTitle}>embedder.ts</span>
                </div>
                <div className={styles.terminalCode}>
                  <code>
                    <span className={styles.keyword}>const</span> tokens = tokenize(text); <span className={styles.comment}>// unigrams/bigrams</span><br />
                    <span className={styles.keyword}>const</span> vector = hashToVector(tokens, 768);<br />
                    <span className={styles.keyword}>const</span> normVec = l2Normalize(vector); <span className={styles.comment}>// zero latency</span>
                  </code>
                </div>
              </div>
              
              <div className={styles.imageFrame}>
                <Image
                  src="/linear_editor.png"
                  alt="LiteEmbed NLP Engine vector visualization"
                  className={styles.cardImg}
                  width={400}
                  height={225}
                  priority={false}
                />
              </div>
            </div>
          </div>

          {/* Project 3: Cascade Failover Router */}
          <div className={`${styles.gridCard} glass-card glow-effect`}>
            <div className={styles.cardInfo}>
              <div className={styles.cardHeaderInfo}>
                <span className={styles.projectIndex}>03</span>
                <span className={styles.gridBadge}>HIGH-AVAILABILITY ROUTER</span>
              </div>
              
              <h3 className={styles.projectTitle}>Cascade Failover Router</h3>
              
              <p className={styles.projectDesc}>
                A resilient Next.js API routing middleware featuring automated retry mechanisms, dynamic LLM provider cascading (xAI/Groq), and fallbacks to in-memory local backup databases.
              </p>

              <div className={styles.tagContainer}>
                {["Next.js API", "xAI (Grok-3)", "Groq (Llama 3.3)", "In-Memory Store"].map(tag => (
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
                  <span className={styles.terminalTitle}>failover_cascade.log</span>
                </div>
                <div className={styles.terminalCode}>
                  <code>
                    <span className={styles.logTag}>[DB_CONN]</span> pgvector offline; engaging fallback<br />
                    <span className={styles.logTag}>[MEMORY]</span> retrieved in-memory backup store<br />
                    <span className={styles.logTag}>[LLM_API]</span> xAI timed out; fallback to Groq Llama 3.3
                  </code>
                </div>
              </div>

              <div className={styles.imageFrame}>
                <Image
                  src="/studio_portal.png"
                  alt="API cascading logs portal"
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
