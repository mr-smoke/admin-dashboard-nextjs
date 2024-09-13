import styles from "./footer.module.css";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footerInfo}>
      <p>
        Maded by
        <a href="" target="_blank" rel="noreferrer">
          <FaGithub />
          Baki Duman
        </a>
      </p>
      <span>© All rights reserved.</span>
    </div>
  );
};

export default Footer;
