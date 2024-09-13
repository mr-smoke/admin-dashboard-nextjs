import styles from "./sidebar.module.css";
import { menuItems } from "@/app/lib/data";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <img src="/noavatar.png" alt="logo" />
        <div className={styles.userInfo}>
          <h2>Admin Panel</h2>
          <p>user</p>
        </div>
      </div>
      <ul className={styles.menuItems}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <ul>
              {item.list.map((listItem, index) => (
                <li key={index}>
                  <a href={listItem.url}>
                    {listItem.icon} {listItem.title}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
