import React from "react";
import styles from "./userItem.module.css";
function UserItem({ user: { name, tag, location, avatar } }) {
  return (
    <div>
      <img className={styles.avatar} src={avatar} alt="avatar"></img>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.location}>{location}</p>
      <p className={styles.tag}>{tag}</p>
    </div>
  );
}

export default UserItem;
