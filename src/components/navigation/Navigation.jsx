import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={styles.navigation}>
      <button
        className={`${styles.burgerButton} ${open ? styles.active : ""}`}
        aria-label={open ? "Luk menu" : "Åbn menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <div className={styles.burgerLines}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </button>

      {(open || isDesktop) && (
        <div className={styles.menuContainer}>
          <div className={styles.menuContent}>
            <NavLink
              to="/ophold"
              onClick={close}
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              <h3 className={styles.menuItem}>Ophold</h3>
            </NavLink>
            <NavLink
              to="/kontakt"
              onClick={close}
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              <h3 className={styles.menuItem}>Kontakt</h3>
            </NavLink>
            <NavLink
              to="/aktiviteter"
              onClick={close}
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              <h3 className={styles.menuItem}>Aktiviteter</h3>
            </NavLink>
            <NavLink
              to="/min-liste"
              onClick={close}
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              <h3 className={styles.menuItem}>Min liste</h3>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
