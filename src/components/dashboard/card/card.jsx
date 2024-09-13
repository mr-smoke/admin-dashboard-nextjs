import styles from "./card.module.css";
import { MdGroup } from "react-icons/md";

const Card = () => {
  return (
    <div className={styles.card}>
      <MdGroup size={30} />
      <div className={styles.cardContent}>
        <p>Card content</p>
        <h3>Card</h3>
        <p className={styles.cardInfo}>
          <span>Special </span>Something
        </p>
      </div>
    </div>
  );
};

export default Card;
