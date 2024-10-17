import Image from "next/image";
import styles from "./item.module.css";

const Item = ({ item }) => {
  return (
    <div className={styles.item}>
      <Image
        src={item.img}
        alt="user"
        className={styles.imgBg}
        width={50}
        height={50}
      />
      <span className={styles.time}>{item.time}</span>
      <h3 className={styles.title}>{item.title}</h3>
      <span className={styles.info}>{item.info}</span>
      <p className={styles.desc}>{item.desc}</p>
      <button className={styles.button}>
        {item.buttonIcon}
        {item.button}
      </button>
    </div>
  );
};

export default Item;
