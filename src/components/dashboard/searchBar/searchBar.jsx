"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import styles from "./searchBar.module.css";
import { MdOutlineSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = ({ placeholder }) => {
  const searchParams = new URLSearchParams(useSearchParams());
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((e) => {
    searchParams.set("search", e.target.value);
    const search = searchParams.toString();
    const url = search ? `${pathname}?${search}` : pathname;
    history.pushState({}, "", url);
    replace(`${pathname}?${searchParams}`);
  }, 300);

  return (
    <div className={styles.search}>
      <MdOutlineSearch size={36} className={styles.searchIcon} />
      <input type="text" placeholder={placeholder} onChange={handleSearch} />
    </div>
  );
};

export default SearchBar;
