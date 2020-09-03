import React from "react";
import styles from "./List.module.css";
export function ListRefs({ followers, views, likes }) {
  return (
    <ul className={styles.stats}>
      <li className={styles.elem}>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li className={styles.elem}>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li className={styles.elem}>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  );
}
