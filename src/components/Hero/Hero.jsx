import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Amit Acharekar</h1>
        <p className={styles.description}>
          I'm an Engineer who is passianate about AI/ML,Data Science And Python Devlopment.
        </p>
        <u>
        <a href="mailto:amit.acharekar2003@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="/assets/about/Amit_Acharekar_Resume.pdf " className={styles.downlodetBtn} download={"Amit_Acharekar_Resume.pdf"} >
          Open Resume
        </a>
        
        </u>
        
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
