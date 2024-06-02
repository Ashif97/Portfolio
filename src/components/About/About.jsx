import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              Experienced in front-end development, building responsive and optimized websites using technologies such as HTML, CSS, React, Bootstrap, Material UI, and Tailwind CSS.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              Experience in back-end development, specializing in creating fast and optimized systems and APIs using Node.js and Express.js. Proficient in integrating with database management technologies such as Mongoose, MongoDB Atlas, and MongoDB Compass.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>System Administrator</h3>
              <p>
              Experienced in system administration, specializing in managing and optimizing Windows Server environments, with expertise in BigFix, ServiceNow, and Active Directory.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
