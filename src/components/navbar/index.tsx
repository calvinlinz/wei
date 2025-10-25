import React from "react";
import styles from "./navbar.module.css";

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export default function Navbar({ isMenuOpen, toggleMenu, closeMenu }: NavbarProps) {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <a href="#home" onClick={closeMenu}>
            wei thorndon
          </a>
        </div>

        <ul className={styles.navLinks}>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#food-gallery">food gallery</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
          <li className={styles.orderButton}>
            <a href="https://www.foodbooking.com/api/fb/yxl_z_r">order now</a>
          </li>
        </ul>

        <div
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div
        className={`${styles.navOverlay} ${isMenuOpen ? styles.active : ""}`}
      >
        <a href="#home" onClick={closeMenu}>
          home
        </a>
        <a href="#services" onClick={closeMenu}>
          services
        </a>
        <a href="#work" onClick={closeMenu}>
          work
        </a>
        <a href="#contact" onClick={closeMenu}>
          contact
        </a>
      </div>
    </>
  );
}
