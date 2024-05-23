import styles from '../styles/header.module.css';
import { SearchBar } from './SearchBar';


export const Header = () => {
    return (
        <header className={`${styles.headerBackgroundImage} ${styles.header}`}>
            <h1 className={styles.headerTitle}>IP Address Tracker</h1>

            <SearchBar />
        </header>
    )
}
