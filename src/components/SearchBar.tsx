import styles from '../styles/searchBar.module.css';
import iconArrow from '../assets/icon-arrow.svg';

export const SearchBar = () => {
    return (
        <div className={styles.searchBar}>
            <input
                className={styles.searchInput}
                type="text"
                placeholder="Search for any IP address or domain"
            />
            <button>
                <img src={iconArrow} alt="Search button" />
            </button>
        </div>
    )
}
