import React from "react";
import UserItem from "./userItem";
import { ListRefs } from "./list";
import styles from "./Profile.module.css";
export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={styles.profile}>
      <UserItem user={{ name, tag, location, avatar }} />
      <ListRefs {...stats} />
    </div>
  );
}
