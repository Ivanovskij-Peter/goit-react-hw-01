import React from "react";
import FriendsItem from "./friendsItem";

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendsItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
}
export default FriendList;
