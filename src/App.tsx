import styles from "./styles/app.module.css";
import { Header } from "./components";
import { InfoCard } from "./components/InfoCard";

function App() {
  return (
    <>
      <div className={styles.app}>
        <Header />
        <InfoCard className={styles["app__custom-info-card"]} />
        <div id={styles.app__map}></div>
      </div>
    </>
  );
}

export default App;
