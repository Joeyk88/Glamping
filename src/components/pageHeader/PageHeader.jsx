import styles from "./pageHeader.module.css";
import logo from "/logo.png";
import Button from "../button/Button";

const PageHeader = () => {
  return (
    <header className={styles.pageheader}>
      <div className={styles.headerContent}>
        <img src={logo} alt="Glamping Logo" className={styles.logo} />
        <h2 className={styles.subHeaderText}>Gittes</h2>
        <h1 className={styles.headerText}>Glamping</h1>
        <Button buttonText="BOOK NU" variant="primary" />
      </div>
    </header>
  );
};
export default PageHeader;
