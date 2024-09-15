"use client";
import Link from "next/link";
import styles from "./menuItem.module.css";
import { usePathname } from "next/navigation";

const MenuItem = ({ listItem }) => {
  const path = usePathname();

  return (
    <li
      className={`${styles.menuItem} ${
        path === listItem.url && styles.menuActive
      }`}
    >
      <Link href={listItem.url}>
        {listItem.icon} {listItem.title}
      </Link>
    </li>
  );
};

export default MenuItem;
