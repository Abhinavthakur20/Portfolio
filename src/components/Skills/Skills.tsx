"use client";

import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js 14", "Tailwind CSS", "CSS Modules", "Zustand"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Socket.IO", "REST APIs", "JWT Auth"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Supabase", "pgvector", "Mongoose"],
  },
  {
    category: "AI / ML",
    skills: ["RAG Architecture", "LLM APIs", "Vector Embeddings", "Groq", "xAI"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Postman", "Vercel", "Cloudinary"],
  },
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const groupVariants = {
  hidden: { opacity: 0, y: 20 },
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
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 120, damping: 10 },
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
          Technologies that power real products — from concept to deploy.
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
              <h3 className={styles.groupTitle}>{group.category}</h3>
              <div className={styles.skillList}>
                {group.skills.map((skill) => (
                  <motion.span 
                    key={skill} 
                    className={styles.skill}
                    variants={badgeVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "rgba(26, 26, 26, 0.05)",
                      color: "var(--accent-red)" 
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
