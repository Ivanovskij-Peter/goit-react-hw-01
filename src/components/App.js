import React, { Fragment } from "react";
import user from "../assets/user.json";
import Profile from "./profile/Profile";
import { FriendsTremplate } from "./friends/FriendsTemplate";
import friends from "../assets/friends.json";

// import Statistics from "./statistics/Statistics";
// import items from "../assets/statistical-data.json";
export const App = () => {
  return (
    <Fragment>
      <Profile {...user} />
      <FriendsTremplate friends={friends} />
    </Fragment>
  );
};
