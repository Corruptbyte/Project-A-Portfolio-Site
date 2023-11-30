import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

// Component that renders the About section
export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                {/* Renders the laptop girl image */}
                <img
                    src={getImageUrl("about/aboutImage1.png")}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    {/* Item 1: Frontend Developer */}
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/cursorIcon.png")}
                            alt="Cursor icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I'm a Frontend Developer with experience
                                building responsive and optimized sites.
                            </p>
                        </div>
                    </li>
                    {/* Item 2: Backend Developer */}
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/serverIcon.png")}
                            alt="Server icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I have experience building fast and optimized
                                back-end systems and API's.
                            </p>
                        </div>
                    </li>
                    {/* Item 3: CSS Wizard */}
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/uiIcon.png")}
                            alt="UI icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>CSS Wizard</h3>
                            <p>
                                I have knowledge and expertise in utilizing CSS
                                to build beautiful, eye-popping websites.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
