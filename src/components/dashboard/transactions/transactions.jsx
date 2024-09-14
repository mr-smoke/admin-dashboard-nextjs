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
                <img src={item.user.img} alt={item.user.name} />
                {item.user.name}
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
