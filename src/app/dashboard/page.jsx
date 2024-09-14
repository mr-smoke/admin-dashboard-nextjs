import Card from "@/components/dashboard/card/card";
import styles from "@/components/dashboard/dashboard.module.css";
import Transactions from "@/components/dashboard/transactions/transactions";

const DashboardPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <section className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </section>
        <section className={styles.transactions}>
          <Transactions />
        </section>
      </div>
      <section className={styles.sideContent}>dee</section>
    </div>
  );
};

export default DashboardPage;
