"use client";

import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const skillGroups = [
  {
    category: "Frontend",
    color: "#89CFF0", // sky blue
    skills: ["React 19", "Next.js", "Tailwind CSS", "CSS Modules", "Zustand"],
  },
  {
    category: "Backend",
    color: "#7c3aed", // purple
    skills: ["Node.js", "Express.js", "Socket.IO", "FastAPI", "REST APIs", "JWT Auth"],
  },
  {
    category: "Databases",
    color: "#2d936c", // green
    skills: ["MongoDB", "PostgreSQL", "Supabase", "pgvector", "Mongoose"],
  },
  {
    category: "AI / ML",
    color: "#e63946", // terracotta red
    skills: ["RAG Architecture", "LLM APIs", "Vector Embeddings", "Groq", "xAI"],
  },
  {
    category: "Tools",
    color: "#6b6b6b", // slate gray
    skills: ["Git", "GitHub", "Docker", "Postman", "Vercel", "Cloudinary"],
  },
  {
    category: "Languages",
    color: "#f39c12", // amber gold
    skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const groupVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 14,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 120, damping: 11 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className={`${styles.skills} section`}>
      <div className={`${styles.inner} container`}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          I&apos;ve got your back with...
        </motion.h2>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          Technologies that power real products — from concept to production-ready deployment.
        </motion.p>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillGroups.map((group) => (
            <motion.div 
              key={group.category} 
              className={styles.group}
              variants={groupVariants}
            >
              <div className={styles.groupHeader}>
                <h3 className={styles.groupTitle}>
                  <span 
                    className={styles.dot} 
                    style={{ backgroundColor: group.color }}
                  />
                  {group.category}
                </h3>
              </div>
              <div className={styles.skillTags}>
                {group.skills.map((skill) => (
                  <motion.span 
                    key={skill} 
                    className={styles.skillBadge}
                    variants={badgeVariants}
                    style={{
                      borderColor: group.color + "25",
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: group.color + "12",
                      borderColor: group.color,
                      color: "var(--text-primary)"
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
