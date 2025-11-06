import styles from "./pageHeader.module.css";
import logo from "/logo.png";

const PageHeader = () => {
  return (
    <header className={styles.pageheader}>
      <div className={styles.headerContent}>
        <img src={logo} alt="Glamping Logo" className={styles.logo} />
        <h2 className={styles.subHeaderText}>Gittes</h2>
        <h1 className={styles.headerText}>Glamping</h1>
      </div>
    </header>
  );
};
export default PageHeader;
