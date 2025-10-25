import React, { useRef, useEffect } from "react";
import styles from "./hero.module.css";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrollY = window.scrollY;
        videoRef.current.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.3}px))`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.hero} id="home">
      <img src="/wei_food.avif" alt="food banner" className={styles.videoBg} />
      <div className={styles.heroContent}>
        <h1>wei thorndon</h1>
        <p className={styles.tagline}>
          your local chinese takeaway and restaurant
        </p>
        <a
          href="https://www.foodbooking.com/api/fb/yxl_z_r"
          className={styles.ctaButton}
        >
          order now
        </a>
      </div>
    </section>
  );
}
