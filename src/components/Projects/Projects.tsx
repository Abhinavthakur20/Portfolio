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
      title: "BagPacker",
      description: "A full-stack travel platform for companion matching, seat-managed group bookings, secure Razorpay pipeline, Socket.io messaging, and an AI travel copilot.",
      image: "/bagpacker.png",
      tags: ["React.js", "Node.js", "Socket.io", "Razorpay", "MongoDB"],
      github: "https://github.com/Abhinavthakur20/Portfolio",
      live: "https://github.com/Abhinavthakur20/Portfolio",
    },
    {
      title: "Drawza",
      description: "A collaborative whiteboard supporting live cursor sync, drawing broadcasts, WebRTC voice channels, optimistic Zustand updates, and canvas state recovery.",
      image: "/drawza.png",
      tags: ["React.js", "Socket.io", "WebRTC", "Zustand", "MongoDB"],
      github: "https://github.com/Abhinavthakur20/Portfolio",
      live: "https://github.com/Abhinavthakur20/Portfolio",
    },
    {
      title: "Java & ML Systems",
      description: "Object-oriented Java systems and Machine Learning validation models implementing core data structures, OOP principles, and ML algorithms.",
      image: "/linear_editor.png",
      tags: ["Java", "OOP", "Python", "ML Algorithms"],
      github: "https://github.com/Abhinavthakur20/Portfolio",
      live: "https://github.com/Abhinavthakur20/Portfolio",
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
                priority={false}
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
