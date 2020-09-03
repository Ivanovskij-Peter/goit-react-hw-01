import React from "react";
import { TransactionList } from "./transactionList";

export function TransactionHistory({ transactions }) {
  return <TransactionList transactions={transactions} />;
}
