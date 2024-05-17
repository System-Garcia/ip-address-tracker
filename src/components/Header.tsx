import styles from '../styles/header.module.css';
import { SearchBar } from './SearchBar';


export const Header = () => {
    return (
        <header className={`${styles.backgroundImage} ${styles.header}`}>
            <h1 className={styles.title}>IP Address Tracker</h1>

            <SearchBar />
        </header>
    )
}
