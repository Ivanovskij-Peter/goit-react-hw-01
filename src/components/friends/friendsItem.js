import React from "react";
function FriendsItem({ name, avatar, isOnline }) {
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
export default FriendsItem;
