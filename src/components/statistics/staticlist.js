import React from "react";
import { StatisticItem } from "./statisticItem";
import styles from "./StaticList.module.css";
export function StaticList({ items }) {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>
      <ul className={styles.statlist}>
        {items.map((item) => (
          <StatisticItem key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}
