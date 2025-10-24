import React from "react";
import styles from "./stats.module.css";
import StatCounter from "./stat-counter";

export default function Stats() {
  const stats = [
    { value: 10, label: "years experience" },
    { value: 300, label: "projects completed" },
    { value: 120, label: "happy clients" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.card}>
            <StatCounter end={stat.value} />
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
