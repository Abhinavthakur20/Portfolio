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
    title: "Frontend Stack",
    icon: <Code size={20} style={{ color: "var(--text-primary)" }} />,
    skills: [
      { name: "React / React 19", level: 95 },
      { name: "Next.js 15/16 App Router", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Vanilla CSS & Modules", level: 92 },
      { name: "HTML5 & Web Semantics", level: 95 },
    ],
  };

  const creativeSkills: SkillGroup = {
    title: "3D & Creative",
    icon: <Monitor size={20} style={{ color: "var(--text-secondary)" }} />,
    skills: [
      { name: "Three.js / WebGL", level: 85 },
      { name: "React Three Fiber / Drei", level: 88 },
      { name: "GLSL / Shaders", level: 70 },
      { name: "Figma UI/UX Design", level: 80 },
      { name: "Motion & Keyframes", level: 85 },
    ],
    colorClass: styles.creativeFill,
  };

  const backendSkills: SkillGroup = {
    title: "Backend & Devops",
    icon: <Server size={20} style={{ color: "var(--text-muted)" }} />,
    skills: [
      { name: "Node.js / Express", level: 82 },
      { name: "REST & GraphQL APIs", level: 85 },
      { name: "PostgreSQL / Prisma", level: 80 },
      { name: "Docker & Containerization", level: 75 },
      { name: "CI/CD & Git Actions", level: 85 },
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
