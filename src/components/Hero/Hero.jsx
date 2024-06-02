import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ashif</h1>
        <p className={styles.description}>
          I'm a MERN full-stack developer in training, with 2 years of experience working in IT.
        </p>
        <a href="https://drive.google.com/file/d/11n2OrPKBtkMXFzcrzOAFHyKWzc8ldH4m/view" download className={styles.contactBtn}>
          My Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      {/* <div className={styles.topBlur} /> */}
      {/* <div className={styles.bottomBlur} /> */}
    </section>
  );
};
