import Link from "next/link";
import styles from "./footer.module.css";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footerInfo}>
      <p>
        Maded by
        <Link
          href="https://github.com/mr-smoke"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
          Baki Duman
        </Link>
      </p>
      <span>© All rights reserved.</span>
    </div>
  );
};

export default Footer;
