import React, { useState, useEffect } from "react";
import styles from "./work.module.css";

export default function Work() {
  const projects = [
    { id: 1, title: "brand campaign", category: "creative + production" },
    { id: 2, title: "digital experience", category: "digital + strategy" },
    { id: 3, title: "product launch", category: "media + creative" },
    { id: 4, title: "social campaign", category: "digital + analytics" },
    { id: 4, title: "social campaign", category: "digital + analytics" },
    { id: 4, title: "social campaign", category: "digital + analytics" },
  ];

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [blurPos, setBlurPos] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  // Animate multiple blobs with slightly different lag
  useEffect(() => {
    const animate = () => {
      setBlurPos((prev) =>
        prev.map((p, i) => ({
          x: p.x + (mousePos.x - p.x) * (0.05 + i * 0.03),
          y: p.y + (mousePos.y - p.y) * (0.05 + i * 0.03),
        }))
      );
      requestAnimationFrame(animate);
    };
    animate();
  }, [mousePos]);

  return (
    <section
      className={styles.workSection}
      id="work"
      onMouseMove={handleMouseMove}
    >
      {blurPos.map((pos, i) => (
        <div
          key={i}
          className={styles.blurCircle}
          style={{
            transform: `translate(${pos.x - 300}px, ${pos.y - 300}px)`,
            width: `${600 + i * 200}px`,
            height: `${600 + i * 200}px`,
            opacity: 0.15 + i * 0.05,
          }}
        />
      ))}

      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>featured work</h2>
        <p className={styles.sectionDescription}>
          explore some of our recent campaigns and projects that showcase our
          integrated approach to marketing.
        </p>
      </div>

      <div className={styles.workGrid}>
        {projects.map((p) => (
          <div key={p.id} className={styles.workItem}>
            <div className={styles.workOverlay}>
              <div className={styles.workTitle}>{p.title}</div>
              <div className={styles.workCategory}>{p.category}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
