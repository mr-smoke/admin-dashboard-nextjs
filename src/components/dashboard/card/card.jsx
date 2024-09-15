import styles from "./card.module.css";
import { MdGroup } from "react-icons/md";

const Card = ({ card }) => {
  return (
    <div className={styles.card}>
      <MdGroup size={30} />
      <div className={styles.cardContent}>
        <p>{card.title}</p>
        <h3>{card.amount}</h3>
        <p className={styles.cardInfo}>
          <span
            className={`${
              card.percentage >= 0 ? styles.positive : styles.negative
            }`}
          >
            {card.percentage}%{" "}
          </span>
          since last month
        </p>
      </div>
    </div>
  );
};

export default Card;
