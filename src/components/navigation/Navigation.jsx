import { useState } from "react";
import styles from "./navigation.module.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navigation}>
      <button
        className={`${styles.burgerButton} ${isOpen ? styles.active : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className={styles.burgerLines}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </button>

      {isOpen && (
        <div className={styles.menuContainer}>
          <div className={styles.menuContent}>
            <h3 className={styles.menuItem}>Ophold</h3>
            <h3 className={styles.menuItem}>Kontakt</h3>
            <h3 className={styles.menuItem}>Aktiviteter</h3>
            <h3 className={styles.menuItem}>Min liste</h3>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
