import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/Projects.json";
import { ProjectCard } from "./ProjectCard";

// Component that renders the Projects section
export const Projects = () => {
    return (
        <section className={styles.container} id="Projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {/* Renders each project card */}
                {projects.map((project, id) => {
                    return (
                        <ProjectCard key={id} project={project} />
                    );
                })}
            </div>
        </section>
    );
};
