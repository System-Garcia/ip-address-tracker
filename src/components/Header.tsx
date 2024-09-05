import styles from "../styles/header.module.css";
import { SearchBar } from "./SearchBar";
import { useIpSearch } from "../hooks/useIpSearch";

export const Header = () => {
  const { onSearch } = useIpSearch();

  return (
    <header
      className={`${styles["header__background-image"]} ${styles.header}`}
    >
      <h1 className={styles.header__title}>IP Address Tracker</h1>

      <SearchBar onSearch={onSearch} />
    </header>
  );
};
