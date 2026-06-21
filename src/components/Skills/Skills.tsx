"use client";

import { Code, Monitor, Server } from "lucide-react";
import styles from "./Skills.module.css";

type SkillGroup = {
  title: string;
  icon: React.ReactNode;
  tags: string[];
  highlightedTags?: string[]; // tags to highlight in orange
};

export default function Skills() {
  const frontendSkills: SkillGroup = {
    title: "Web Technologies",
    icon: <Code size={20} style={{ color: "var(--text-primary)" }} />,
    tags: ["React.js", "Next.js 14", "Node.js", "Express.js", "Tailwind CSS", "CSS Modules", "HTML5 ReadableStreams", "SSE Streaming"],
    highlightedTags: ["React.js", "Next.js 14", "Node.js", "HTML5 ReadableStreams"],
  };

  const creativeSkills: SkillGroup = {
    title: "Languages & Databases",
    icon: <Monitor size={20} style={{ color: "var(--accent-orange)" }} />,
    tags: ["TypeScript", "JavaScript", "Python", "SQL", "Supabase", "PostgreSQL", "pgvector", "Zustand", "Java Programming"],
    highlightedTags: ["TypeScript", "pgvector", "Supabase"],
  };

  const backendSkills: SkillGroup = {
    title: "AI Engineering & Tools",
    icon: <Server size={20} style={{ color: "var(--text-muted)" }} />,
    tags: ["RAG Architectures", "LLM APIs (xAI / Groq)", "Vector Embeddings", "Data Structures", "REST API Design", "Git", "GitHub", "Postman", "Vercel"],
    highlightedTags: ["RAG Architectures", "LLM APIs (xAI / Groq)", "Vector Embeddings"],
  };

  const renderGroup = (group: SkillGroup) => (
    <div key={group.title} className={`${styles.skillsCard} glass-card`}>
      <h3 className={styles.groupTitle}>
        {group.icon}
        {group.title}
      </h3>
      
      <div className={styles.tagGrid}>
        {group.tags.map((tag) => {
          const isHighlighted = group.highlightedTags?.includes(tag);
          return (
            <span
              key={tag}
              className={`${styles.tag} ${isHighlighted ? styles.highlightedTag : ""}`}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="skills" className={`${styles.skills} section container`}>
      <div className={styles.titleSection}>
        <span className={styles.subtitle}>Capabilities</span>
        <h2 className={styles.title}>Core Competencies</h2>
      </div>

      <div className={`${styles.grid} grid`}>
        {renderGroup(frontendSkills)}
        {renderGroup(creativeSkills)}
        {renderGroup(backendSkills)}
      </div>
    </section>
  );
}
