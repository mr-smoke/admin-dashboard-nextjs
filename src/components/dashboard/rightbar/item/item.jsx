import styles from "./item.module.css";
import { MdOutlinePlayCircle } from "react-icons/md";

const Item = ({ item }) => {
  return (
    <div className={styles.item}>
      <p className={styles.time}>{item.time}</p>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.info}>{item.info}</p>
      <p className={styles.desc}>{item.desc}</p>
      <button className={styles.button}>
        {item.buttonIcon}
        {item.button}
      </button>
    </div>
  );
};

export default Item;
