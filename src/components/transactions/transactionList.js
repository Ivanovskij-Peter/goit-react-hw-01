import React from "react";
import { TransactionItem } from "./transactionItem";
import styles from "./TransactionList.module.css";
export function TransactionList({ transactions }) {
  return (
    <table className={styles.transactionhistory}>
      <thead>
        <tr className={styles.title}>
          <th className={styles.type}>Type</th>
          <th className={styles.type}>Amount</th>
          <th className={styles.type}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} {...transaction} />
        ))}
      </tbody>
    </table>
  );
}
