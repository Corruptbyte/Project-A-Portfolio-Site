import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

// Component that renders the Hero section
export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Jacob</h1>
                <p className={styles.description}>
                    I'm a full-stack developer with experience in Node.js, JS,
                    CSS, Python, Django Template, jQuery, Git, Github, SQL,
                    Wagtail, API's, and HTML 5. Reach out if you'd like to learn
                    more!
                </p>
                <a
                    href="mailto:JacobJaetzold93@gmail.com"
                    className={styles.contactBtn}
                >
                    Contact Me
                </a>
            </div>
            {/* Renders the hovering wizard image */}
            <img
                src={getImageUrl("hero/heroImage.png")}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            {/* Adds top blur effect */}
            <div className={StyleSheet.topBlur} />
            {/* Adds bottom blur effect */}
            <div className={StyleSheet.bottomBlur} />
        </section>
    );
};
