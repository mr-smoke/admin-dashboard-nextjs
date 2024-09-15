import styles from "./dashboard.module.css";
import Card from "@/components/dashboard/card/card";
import Rightbar from "@/components/dashboard/rightbar/rigthbar";
import Transactions from "@/components/dashboard/transactions/transactions";
import { cards } from "../lib/data";

const DashboardPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <section className={styles.cards}>
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </section>
        <section className={styles.transactions}>
          <Transactions />
        </section>
      </div>
      <section className={styles.rightbar}>
        <Rightbar />
      </section>
    </div>
  );
};

export default DashboardPage;
