import Card from "@/components/dashboard/card/card";
import styles from "@/components/dashboard/dashboard.module.css";

const DashboardPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <div className={styles.transactions}>dee</div>
      </div>
      <div className={styles.sideContent}>dee</div>
    </div>
  );
};

export default DashboardPage;
