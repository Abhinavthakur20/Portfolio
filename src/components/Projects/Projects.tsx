"use client";

import { Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";

const projects = [
  {
    id: "01",
    title: "BagPacker",
    desc: "Full-stack travel platform with companion matching, Razorpay payments, Socket.IO messaging, and AI copilot.",
    tags: ["React 19", "Node.js", "MongoDB", "Socket.IO", "Razorpay"],
    image: "/bagpacker_cover.png",
    github: "https://github.com/Abhinavthakur20/Portfolio",
    live: "https://github.com/Abhinavthakur20/Portfolio",
    color: "#89CFF0",
  },
  {
    id: "02",
    title: "Drawza",
    desc: "Collaborative whiteboard with real-time drawing sync, WebRTC voice chat, and persistent board state.",
    tags: ["React", "Zustand", "Socket.IO", "WebRTC", "MongoDB"],
    image: "/drawza_cover.png",
    github: "https://github.com/Abhinavthakur20/Portfolio",
    live: "https://github.com/Abhinavthakur20/Portfolio",
    color: "#e63946",
  },
  {
    id: "03",
    title: "Eco-Route",
    desc: "Carbon journey planner comparing transit emissions with interactive Leaflet maps and savings tracker.",
    tags: ["React", "Leaflet", "OSRM", "Nominatim"],
    image: "/ecoroute_cover.png",
    github: "https://github.com/Abhinavthakur20/eco-route",
    live: "https://github.com/Abhinavthakur20/eco-route",
    color: "#2d936c",
  },
  {
    id: "04",
    title: "Vivid Prompt Forge",
    desc: "AI app for generating policy-compliant ad prompts with vector embeddings and LLM streaming.",
    tags: ["Next.js 14", "Supabase", "pgvector", "Groq / xAI"],
    image: "/vivid_prompt_cover.png",
    github: "https://github.com/Abhinavthakur20/Portfolio",
    live: "https://github.com/Abhinavthakur20/Portfolio",
    color: "#7c3aed",
  },
];

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className={`${styles.projects} section`}>
      <div className={`${styles.inner} container`}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Tiny fraction of my work
        </motion.h2>
        
        <motion.p 
          className={styles.sectionDesc}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          Building products that solve real problems — from payments to 
          real-time collaboration to AI-powered workflows.
        </motion.p>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.card}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                boxShadow: "0 12px 30px rgba(26, 26, 26, 0.06)",
                transition: { duration: 0.2 } 
              }}
            >
              <div className={styles.cardImage}>
                <div
                  className={styles.cardImageBg}
                  style={{ backgroundColor: project.color + "12" }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={280}
                    height={160}
                    className={styles.img}
                    priority={project.id === "01"}
                  />
                </div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <div className={styles.cardLinks}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                      <Github size={14} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                      <ArrowUpRight size={14} />
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
