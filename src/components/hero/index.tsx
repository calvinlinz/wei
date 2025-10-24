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
      <video ref={videoRef} autoPlay muted loop playsInline className={styles.videoBg}>
        <source src="/yumamediavideo.mp4" type="video/mp4" />
      </video>
      <div className={styles.heroContent}>
        <h1>yumamedia</h1>
        <p className={styles.tagline}>we build campaigns that move people — and your business.</p>
        <a href="#contact" className={styles.ctaButton}>let's talk</a>
      </div>
    </section>
  );
}
