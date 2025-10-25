import React from "react";
import styles from "./footer.module.css";
import { Mail, Phone, MapPin, Clock } from "lucide-react"; // optional: install lucide-react for icons

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.info}>
          <h3 className={styles.brand}>wei thorndon</h3>
          <p className={styles.tagline}>
            authentic flavors, made with love by Mei & Wei.
          </p>
        </div>

        <div className={styles.contact}>
          <h4>contact</h4>
          <ul>
            <li>
              <Mail size={16} />{" "}
              <a href="mailto:callvinlinz@gmail.com">callvinlinz@gmail.com</a>
            </li>
            <li>
              <Phone size={16} /> <a href="tel:04 471 2918">04 471 2918</a>
            </li>
          </ul>
        </div>

        <div className={styles.address}>
          <h4>visit us</h4>
          <ul>
            <li>
              <MapPin size={16} /> 318 Tinakori Rd, Thorndon, Wellington 6011
            </li>
            <li>
              <Clock size={16} /> Mon–Sun: 11:30am – 9:00pm
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
