"use client";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import styles from "./Projects.module.css";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
};

export default function Projects() {
  const projectsList: Project[] = [
    {
      title: "Glass Analytics",
      description: "A minimal telemetry dashboard featuring frosted-glass widgets, fine line visualizer grids, and responsive real-time data streaming.",
      image: "/glass_analytics.png",
      tags: ["Next.js", "React", "WebGL", "CSS Modules"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Nova Studio Portal",
      description: "An architectural landing experience showcasing smooth camera pans, clean grid layouts, and a central interactive sculpture.",
      image: "/studio_portal.png",
      tags: ["Three.js", "React Three Fiber", "GSAP"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Linear Workspace",
      description: "A high-performance workspace editor dashboard featuring dynamic sidebars, keyframe-animated menus, and markdown compiling.",
      image: "/linear_editor.png",
      tags: ["Next.js", "TypeScript", "Vanilla CSS"],
      github: "https://github.com",
      live: "https://example.com",
    },
  ];

  return (
    <section id="projects" className={`${styles.projects} section container`}>
      <div className={styles.titleSection}>
        <span className={styles.subtitle}>Selected Works</span>
        <h2 className={styles.title}>Project Showcases</h2>
      </div>

      <div className={`${styles.grid} grid`}>
        {projectsList.map((project) => (
          <div key={project.title} className={`${styles.projectCard} glass-card glow-effect`}>
            <div className={styles.imageWrapper}>
              <Image
                src={project.image}
                alt={project.title}
                className={styles.image}
                width={400}
                height={225}
              />
            </div>
            
            <div className={styles.details}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description}</p>
              
              <div className={styles.tagContainer}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              
              <div className={styles.linkGroup}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconLink}
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconLink}
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
