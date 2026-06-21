"use client";

import { Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import styles from "./Projects.module.css";

const projects = [
  {
    id: "01",
    title: "BagPacker",
    desc: "Full-stack travel platform with companion matching, Razorpay payments, Socket.IO messaging, and AI copilot.",
    tags: ["React 19", "Node.js", "MongoDB", "Socket.IO", "Razorpay"],
    image: "/bagpacker.png",
    github: "https://github.com/Abhinavthakur20/Portfolio",
    live: "https://github.com/Abhinavthakur20/Portfolio",
    color: "#89CFF0",
    featured: true,
  },
  {
    id: "02",
    title: "Drawza",
    desc: "Collaborative whiteboard with real-time drawing sync, WebRTC voice chat, and persistent board state.",
    tags: ["React", "Zustand", "Socket.IO", "WebRTC", "MongoDB"],
    image: "/drawza.png",
    github: "https://github.com/Abhinavthakur20/Portfolio",
    live: "https://github.com/Abhinavthakur20/Portfolio",
    color: "#e63946",
  },
  {
    id: "03",
    title: "Eco-Route",
    desc: "Carbon journey planner comparing transit emissions with interactive Leaflet maps and savings tracker.",
    tags: ["React", "Leaflet", "OSRM", "Nominatim"],
    image: "/linear_editor.png",
    github: "https://github.com/Abhinavthakur20/eco-route",
    live: "https://github.com/Abhinavthakur20/eco-route",
    color: "#2d936c",
  },
  {
    id: "04",
    title: "Vivid Prompt Forge",
    desc: "AI app for generating policy-compliant ad prompts with vector embeddings and LLM streaming.",
    tags: ["Next.js 14", "Supabase", "pgvector", "Groq / xAI"],
    image: "/glass_analytics.png",
    github: "https://github.com/Abhinavthakur20/Portfolio",
    live: "https://github.com/Abhinavthakur20/Portfolio",
    color: "#7c3aed",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={`${styles.projects} section`}>
      <div className={`${styles.inner} container`}>
        <h2 className={styles.sectionTitle}>Tiny fraction of my work</h2>
        <p className={styles.sectionDesc}>
          Building products that solve real problems — from payments to 
          real-time collaboration to AI-powered workflows.
        </p>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${styles.card} ${project.featured ? styles.cardFeatured : ""}`}
            >
              <div className={styles.cardImage}>
                <div
                  className={styles.cardImageBg}
                  style={{ backgroundColor: project.color + "18" }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className={styles.img}
                  />
                </div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <div className={styles.cardLinks}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                      <Github size={16} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
                <p className={styles.cardDesc}>{project.desc}</p>
                <div className={styles.cardTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
