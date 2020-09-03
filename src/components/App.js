import React, { Fragment } from "react";
import user from "../assets/user.json";
import Profile from "./profile/Profile";
import { FriendsTremplate } from "./friends/FriendsTemplate";
import friends from "../assets/friends.json";
import { Statistics } from "./statistics/Statistics";
import transactions from "../assets/transactions.json";
import items from "../assets/statistical-data.json";
import { TransactionHistory } from "./transactions/TransactionHistory";
export const App = () => {
  return (
    <Fragment>
      <Profile {...user} />
      <FriendsTremplate friends={friends} />
      <Statistics items={items} />
      <TransactionHistory transactions={transactions} />
    </Fragment>
  );
};
