import React from "react";
import styles from "./FriendsItem.module.css";
function FriendsItem({ name, avatar, isOnline }) {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.green : styles.red}>{isOnline}</span>
      <img className="avatar" src={avatar} alt="avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
export default FriendsItem;
