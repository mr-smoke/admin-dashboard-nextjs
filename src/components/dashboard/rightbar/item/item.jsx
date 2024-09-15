import styles from "./item.module.css";

const Item = ({ item }) => {
  return (
    <div className={styles.item}>
      <img src={item.img} alt="user" className={styles.imgBg} />
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
