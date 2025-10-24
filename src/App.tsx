import React, { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import Work from "./components/work";
import Stats from "./components/stats";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <Navbar
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
      />
      <Hero />
      <Services />
      <Work />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
}
