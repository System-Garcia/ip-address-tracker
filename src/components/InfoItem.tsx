import styles from "../styles/infoItem.module.css";

interface Props {
  label: string;
  value: string;
}

export const InfoItem = ({ label, value }: Props) => {
  return (
    <>
      <div className={styles.item}>
        <span className={styles.item__label}>{label}</span>
        <span className={styles.item__value}>{value}</span>
      </div>
    </>
  );
};
