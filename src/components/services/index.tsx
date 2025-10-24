import React from "react";
import styles from "./services.module.css";

const services = [
  { num: "01", title: "creative", desc: "strategy, ideation, and design — with deep expertise that drives real results." },
  { num: "02", title: "production", desc: "from cinematic storytelling to fast-turn social content, we craft visuals that captivate and convert." },
  { num: "03", title: "media", desc: "end-to-end media solutions that amplify your brand visibility and grow audience engagement." },
  { num: "04", title: "digital", desc: "from social to seo, we leverage every digital channel to accelerate your growth." },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>let's get your business moving</h2>
            <h3 className={styles.subtitle}>what we can offer</h3>
      </div>
      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.num} className={styles.card}>
            <div className={styles.number}>{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
