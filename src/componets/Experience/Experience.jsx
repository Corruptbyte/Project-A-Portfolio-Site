import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import history from "../../data/history.json";

// Component that renders the Experience section
export const Experience = () => {
    return (
        <section className={styles.container} id="Experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}></div>
                {/* Renders each skill */}
                {skills.map((skill, id) => {
                    return (
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img
                                    src={getImageUrl(skill.imageSrc)}
                                    alt={skill.title}
                                />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    );
                })}
            </div>
            <ul className={styles.history}>
                {/* Renders each history item */}
                {history.map((historyItem, id) => {
                    return (
                        <li key={id} className={styles.historyItem}>
                            <img
                                src={getImageUrl(historyItem.imageSrc)}
                                alt={`${historyItem.organization}Logo`}
                            />
                            <div className={styles.historyItemDetails}>
                                <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                                <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
                                <ul>
                                    {/* Renders each experience within the history item */}
                                    {historyItem.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>;
                                    })}
                                </ul>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
