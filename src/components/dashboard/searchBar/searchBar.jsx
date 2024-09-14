import styles from "./searchBar.module.css";
import { MdOutlineSearch } from "react-icons/md";

const SearchBar = () => {
  return (
    <div className={styles.search}>
      <MdOutlineSearch size={36} className={styles.searchIcon} />
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default SearchBar;
