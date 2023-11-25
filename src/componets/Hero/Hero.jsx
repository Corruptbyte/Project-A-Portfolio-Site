import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
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
            {/*renders hovering girl image just replace the image with another image with same name in the assets/hero folder*/}
            <img
                src={getImageUrl("hero/heroImage.png")}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={StyleSheet.topBlur} />
            <div className={StyleSheet.bottomBlur} />
        </section>
    );
};
