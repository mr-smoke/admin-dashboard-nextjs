import Link from "next/link";
import styles from "./menuItem.module.css";

const MenuItem = ({ listItem }) => {
  return (
    <li className={styles.menuItem}>
      <a href={listItem.url}>
        {listItem.icon} {listItem.title}
      </a>
    </li>
  );
};

export default MenuItem;
