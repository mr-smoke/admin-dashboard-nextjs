import { MdMessage, MdNotifications, MdOutlineSearch } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <p>Users</p>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdOutlineSearch size={36} className={styles.searchIcon} />
          <input type="text" placeholder="Search" />
        </div>
        <a href="#">
          <MdMessage size={20} />
        </a>
        <a href="#">
          <MdNotifications size={20} />
        </a>
        <a href="#">
          <IoMdGlobe size={20} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
