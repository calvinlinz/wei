import React from "react";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>let’s make something great together</h2>
        <p className={styles.subtitle}>tell us about your project or say hello</p>

        <form className={styles.form}>
          <input type="text" placeholder="name" required />
          <input type="email" placeholder="email" required />
          <textarea placeholder="message" rows={4} required></textarea>
          <button type="submit">send message</button>
        </form>
      </div>
    </section>
  );
}
