import { InfoItem } from "./InfoItem";
import styles from "../styles/infoCard.module.css";
import classNames from "classnames";
import { useContext } from "react";
import { IpInfoContext } from "../context/IpContext";

interface Props {
  className?: string;
}

export const InfoCard = ({ className }: Props) => {
  const { ip, isp, location } = useContext(IpInfoContext);

  return (
    <>
      <div className={classNames(styles.card, className)}>
        <InfoItem label="ip address" value={ip || "No result"} />
        <InfoItem label="location" value={location.country || "No result"} />
        <InfoItem label="timezone" value={location.timezone || "No result"} />
        <InfoItem label="isp" value={isp || "No result"} />
      </div>
    </>
  );
};
