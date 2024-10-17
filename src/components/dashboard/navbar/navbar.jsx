"use client";
import { MdMessage, MdNotifications, MdOutlineSearch } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const path = usePathname();
  return (
    <nav className={styles.navbar}>
      <p>{path.split("/").pop()}</p>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdOutlineSearch size={36} className={styles.searchIcon} />
          <input type="text" placeholder="Search" />
        </div>
        <Link href="#">
          <MdMessage size={20} />
        </Link>
        <Link href="#">
          <MdNotifications size={20} />
        </Link>
        <Link href="#">
          <IoMdGlobe size={20} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
