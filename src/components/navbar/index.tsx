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
        <div className={styles.logo}>yumamedia</div>

        <ul className={styles.navLinks}>
          <li><a href="#home">home</a></li>
          <li><a href="#services">services</a></li>
          <li><a href="#work">work</a></li>
          <li><a href="#contact">contact</a></li>
          <li><a href="https://www.foodbooking.com/api/fb/yxl_z_r">Order</a></li>
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
        <a href="#home" onClick={closeMenu}>home</a>
        <a href="#services" onClick={closeMenu}>services</a>
        <a href="#work" onClick={closeMenu}>work</a>
        <a href="#contact" onClick={closeMenu}>contact</a>
      </div>
    </>
  );
}
