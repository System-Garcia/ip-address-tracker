import styles from '../styles/searchBar.module.css';
import iconArrow from '../assets/icon-arrow.svg';
import { useForm } from '../hooks/useForm';
import { FormEvent } from 'react';

interface Props {
    onSearch: (ipAddress: string) => void;
}

export const SearchBar = ({ onSearch }: Props) => {

    const { formState, onInputChange } = useForm({
        ipAddress: '',
    });

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        onSearch(formState.ipAddress);
    }

    return (

        <form
            className={styles.searchBar}
            onSubmit={onSubmit}
        >
            <input
                className={styles.searchInput}
                type="text"
                placeholder="Search for any IP address or domain"
                value={formState.ipAddress}
                onChange={onInputChange}
                name='ipAddress'
            />
            <button
                type='submit'
                className={styles.searchButton}>
                <img
                    className={styles.searchIcon}
                    src={iconArrow}
                    alt="Search button" />
            </button>
        </form>

    )
}
