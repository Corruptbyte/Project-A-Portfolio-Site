import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="Contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/emailIcon.png")}
                        alt="Email icon"
                    />
                    <a href="mailto:JacobJaetzold@gmail.com">
                        JacobJaetzold@gmail.com
                    </a>
                </li>

                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/linkedinIcon.png")}
                        alt="LinkedIn icon"
                    />
                    <a href="https://www.linkedin.com/in/jacob-Jaetzold-6b4bb9210/">
                        LinkedIn.com/JacobJaetzold
                    </a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/githubIcon.png")}
                        alt="Github icon"
                    />
                    <a href="https://github.com/Corruptbyte">
                        Github.com/Corruptbyte
                    </a>
                </li>
            </ul>
        </footer>
    );
};
