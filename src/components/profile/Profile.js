import React from "react";
import UserItem from "./userItem";
import { ListRefs } from "./list";

export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div>
      <UserItem user={{ name, tag, location, avatar }} />
      <ListRefs {...stats} />
    </div>
  );
}
