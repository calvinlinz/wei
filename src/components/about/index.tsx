import React from "react";
import styles from "./about.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>family owned</h2>
          <h3 className={styles.subtitle}>our story</h3>
          <p className={styles.description}>
            Mei and Wei, a devoted husband-and-wife team, have shared over 20
            years in the restaurant industry. They began their journey as
            waitstaff, learning every detail of authentic Chinese hospitality
            and cuisine. Their passion for bringing genuine flavors and
            heartfelt service to their community led them to open several
            successful restaurants — first on Kent Terrace over a decade ago,
            then Willis Street, and now proudly serving in Thorndon for the past
            seven years.
          </p>
          <p className={styles.description}>
            Every dish we prepare reflects that same dedication — fresh,
            traditional, and always made with love. When you dine with us,
            you’re part of our family.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src="/family_photo_square.jpg"
            alt="Mei and Wei - Family Owners"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
