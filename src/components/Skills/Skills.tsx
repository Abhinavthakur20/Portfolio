"use client";

import { Code, Monitor, Server } from "lucide-react";
import styles from "./Skills.module.css";

type Skill = {
  name: string;
  level: number;
};

type SkillGroup = {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  colorClass?: string;
};

export default function Skills() {
  const frontendSkills: SkillGroup = {
    title: "Web Technologies",
    icon: <Code size={20} style={{ color: "var(--text-primary)" }} />,
    skills: [
      { name: "React.js / Next.js", level: 90 },
      { name: "Node.js / Express.js", level: 88 },
      { name: "Socket.io & WebRTC", level: 85 },
      { name: "Tailwind CSS & CSS Modules", level: 92 },
      { name: "HTML5 & TypeScript", level: 85 },
    ],
  };

  const creativeSkills: SkillGroup = {
    title: "Languages & Databases",
    icon: <Monitor size={20} style={{ color: "var(--accent-orange)" }} />,
    skills: [
      { name: "Java Programming", level: 90 },
      { name: "JavaScript / Python", level: 88 },
      { name: "MongoDB (MERN)", level: 92 },
      { name: "PostgreSQL / SQL", level: 82 },
      { name: "Zustand (State Management)", level: 85 },
    ],
    colorClass: styles.creativeFill,
  };

  const backendSkills: SkillGroup = {
    title: "Tools & Core Competencies",
    icon: <Server size={20} style={{ color: "var(--text-muted)" }} />,
    skills: [
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "REST API Design", level: 90 },
      { name: "Git / GitHub / Maven", level: 88 },
      { name: "Postman / Vercel", level: 85 },
      { name: "Authentication (JWT / RBAC)", level: 88 },
    ],
  };

  const renderGroup = (group: SkillGroup) => (
    <div key={group.title} className={`${styles.skillsCard} ${styles.skillGroup} glass-card`}>
      <h3 className={styles.groupTitle}>
        {group.icon}
        {group.title}
      </h3>
      <div className={styles.skillList}>
        {group.skills.map((skill) => (
          <div key={skill.name} className={styles.skillItem}>
            <div className={styles.skillMeta}>
              <span className={styles.skillName}>{skill.name}</span>
              <span className={styles.skillPercent}>{skill.level}%</span>
            </div>
            <div className={styles.progressBarTrack}>
              <div
                className={`${styles.progressBarFill} ${group.colorClass || ""}`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
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
