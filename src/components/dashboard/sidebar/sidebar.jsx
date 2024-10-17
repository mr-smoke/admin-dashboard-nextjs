import { auth, signOut } from "@/app/auth";
import MenuItem from "./menuItem/menuItem";
import styles from "./sidebar.module.css";
import { menuItems } from "@/app/lib/data";
import { MdLogout } from "react-icons/md";
import Image from "next/image";

const Sidebar = async () => {
  const { user } = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          src={user.img}
          alt="logo"
          width={50}
          height={50}
          priority={true}
        />
        <div className={styles.userInfo}>
          <h2>{user.username}</h2>
          <p>Administrator</p>
        </div>
      </div>
      <ul className={styles.menuItems}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <ul>
              {item.list.map((listItem, index) => (
                <MenuItem key={index} listItem={listItem} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <form
        className={styles.logout}
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit" className={styles.menuItem}>
          <MdLogout /> Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
