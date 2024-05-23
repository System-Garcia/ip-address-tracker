import styles from '../styles/infoItem.module.css';

interface Props {
    label: string;
    value: string
}

export const InfoItem = ({label, value}: Props) => {
  return (
    <>
        <div className={styles.infoItem}>
            <span className={styles.infoLabel}>{label}</span>
            <span className={styles.infoValue}>{value}</span>
        </div>
    </>
  )
}
