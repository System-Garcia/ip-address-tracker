import { InfoItem } from "./InfoItem";
import styles from '../styles/infoCard.module.css';

interface Props {
    ipAddress: string;
    location: string;
    timezone: string;
    isp: string;
}

export const InfoCard = ({ ipAddress, location, timezone, isp }: Props) => {
    return (
        <>
            <div className={styles.infoCard}>
                <InfoItem label="ip address" value={ipAddress} />
                <InfoItem label="location" value={location} />
                <InfoItem label="timezone" value={timezone} />
                <InfoItem label="isp" value={isp} />
            </div>
        </>
    )
}
