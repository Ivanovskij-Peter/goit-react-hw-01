import React from "react";
import styles from "./TransactionItem.module.css";
export function TransactionItem({ type, amount, currency }) {
  return (
    <tr>
      <td className={styles.item}>{type}</td>
      <td className={styles.item}>{amount}</td>
      <td className={styles.item}>{currency}</td>
    </tr>
  );
}
