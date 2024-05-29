import styles from '../styles/header.module.css';
import { SearchBar } from './SearchBar';
import { useIpSerach } from '../hooks/useIpSerach';

export const Header = () => {

   const { onSearch } = useIpSerach();

    return (
        <header className={`${styles.headerBackgroundImage} ${styles.header}`}>
            <h1 className={styles.headerTitle}>IP Address Tracker</h1>

            <SearchBar onSearch={onSearch}/>
        </header>
    )
};