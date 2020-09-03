import React from "react";
import styles from "./StatisticItem.module.css";
export function StatisticItem({ label, percentage }) {
  return (
    <li className={styles.item}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}
