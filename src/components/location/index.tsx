import React from "react";
import styles from "./location.module.css";

export default function LocationSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>come visit us</h2>
          <p className={styles.tagline}>
            dine in, BYO, or take away your favorite dishes.
          </p>
          <p className={styles.address}>
            318 Tinakori Road,<br />
            Thorndon, Wellington 6011
          </p>
          <p className={styles.invite}>
            we look forward to sharing our authentic Chinese flavors with you!
          </p>
        </div>

        <div className={styles.mapContainer}>
          <iframe
            title="Wei's Chinese Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5996.826660688277!2d174.7698417!3d-41.278107999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38b1d424f58357%3A0x308d3177ed070068!2s318%20Tinakori%20Road%2C%20Thorndon%2C%20Wellington%206011!5e0!3m2!1sen!2snz!4v1761355706097!5m2!1sen!2snz"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
