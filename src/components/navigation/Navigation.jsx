import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navigation.module.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
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
            <Link to="/ophold" onClick={closeMenu}>
              <h3 className={styles.menuItem}>Ophold</h3>
            </Link>
            <Link to="/kontakt" onClick={closeMenu}>
              <h3 className={styles.menuItem}>Kontakt</h3>
            </Link>
            <Link to="/aktiviteter" onClick={closeMenu}>
              <h3 className={styles.menuItem}>Aktiviteter</h3>
            </Link>
            <Link to="/min-liste" onClick={closeMenu}>
              <h3 className={styles.menuItem}>Min liste</h3>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
