"use client";

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

export default function Skills() {
  return (
    <section id="skills" className={`${styles.skills} section`}>
      <div className={`${styles.inner} container`}>
        <h2 className={styles.title}>I&apos;ve got your back with...</h2>
        <p className={styles.subtitle}>
          Technologies that power real products — from concept to deploy.
        </p>

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <div key={group.category} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.category}</h3>
              <div className={styles.skillList}>
                {group.skills.map((skill) => (
                  <span key={skill} className={styles.skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
