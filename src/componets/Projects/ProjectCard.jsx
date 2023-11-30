import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

// Component that renders a project card
export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
    return (
        <div className={styles.container}>
            {/* Renders the project image */}
            <img
                src={getImageUrl(imageSrc)}
                alt={`Image of ${title}`}
                className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3>
            <h3 className={styles.title1}>{'To view this project please view my Github'}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {/* Renders the list of skills */}
                {skills.map((skill, id) => {
                    return (
                        <li key={id} className={styles.skill}>{skill}</li>
                    );
                })}
            </ul>
            <div className={styles.links}>
                {/* Renders the demo link */}
                <a href={demo} className={styles.link}>Demo</a>
                {/* Renders the source link */}
                <a href={source} className={styles.link}>Source</a>
            </div>
        </div>
    );
};
