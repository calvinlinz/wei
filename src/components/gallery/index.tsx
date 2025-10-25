import React, { useState, useEffect } from "react";
import styles from "./gallery.module.css";

type GalleryImage = {
  src: string;
  caption: string;
};

const galleryImages: GalleryImage[] = [
  { src: "/food/sweet_and_sour_pork.avif", caption: "Sweet and sour pork" },
  {
    src: "/food/combination_fried_rice.avif",
    caption: "Combination fried rice",
  },
  {
    src: "/food/singapore_noodles.avif",
    caption: "Singapore style rice vermicelli",
  },
  { src: "/food/orange_beef.avif", caption: "Orange beef" },
  { src: "/food/salt_and_pepper_squid.avif", caption: "Salt and pepper squid" },
  { src: "/food/dumplings.avif", caption: "Pan-fried dumplings" },
  { src: "/food/wontons.avif", caption: "Wonton soup" },
  {
    src: "/food/garlic_beans_with_mince.avif",
    caption: "Garlic beans with mince",
  },
];

export default function GallerySection() {
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxImage]);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <section className={styles.gallerySection} id="food-gallery">
      <h2 className={styles.title}>Wei's Best Sellers</h2>
      <p className={styles.subtitle}>Authentic flavors, crafted with care</p>

      <div className={styles.galleryGrid}>
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className={styles.imageWrapper}
            onClick={() => setLightboxImage(img)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setLightboxImage(img);
              }
            }}
            aria-label={`View ${img.caption}`}
          >
            <img
              src={img.src}
              alt={img.caption}
              className={styles.image}
              loading="lazy"
            />
            <p className={styles.caption}>{img.caption}</p>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className={styles.lightbox}
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          <button
            className={styles.closeButton}
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
          >
            ×
          </button>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={lightboxImage.src} alt={lightboxImage.caption} />
            <p className={styles.lightboxCaption}>{lightboxImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
