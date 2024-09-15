import Image from "next/image";
import styles from "./transactions.module.css";
import { transactions } from "@/app/lib/data";

const Transactions = () => {
  return (
    <>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item, index) => (
            <tr key={index}>
              <td className={styles.user}>
                <Image src={item.img} alt={item.name} width={50} height={50} />
                {item.name}
              </td>
              <td>
                <span
                  className={`${styles.status} ${
                    item.status === "pending"
                      ? styles.pending
                      : item.status === "completed"
                      ? styles.completed
                      : item.status === "failed"
                      ? styles.failed
                      : ""
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td>{item.date}</td>
              <td>${item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Transactions;
