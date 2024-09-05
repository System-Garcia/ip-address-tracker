import styles from "../styles/searchBar.module.css";
import iconArrow from "../assets/icon-arrow.svg";
import { useForm } from "../hooks/useForm";
import { FormEvent } from "react";

interface Props {
  onSearch: (ipAddress: string) => void;
}

export const SearchBar = ({ onSearch }: Props) => {
  const { formState, onInputChange } = useForm({
    ipAddress: "",
  });

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch(formState.ipAddress);
  };

  return (
    <form className={styles["search-bar"]} onSubmit={onSubmit}>
      <input
        className={styles["search-bar__input"]}
        type="text"
        placeholder="Search for any IP address or domain"
        value={formState.ipAddress}
        onChange={onInputChange}
        name="ipAddress"
      />
      <button type="submit" className={styles["search-bar__button"]}>
        <img
          className={styles["search-bar__icon"]}
          src={iconArrow}
          alt="Search button"
        />
      </button>
    </form>
  );
};
