import styles from "./searchBar.module.css";
import { MdOutlineSearch } from "react-icons/md";

const SearchBar = ({ placeholder }) => {
  return (
    <div className={styles.search}>
      <MdOutlineSearch size={36} className={styles.searchIcon} />
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default SearchBar;
