import { Link } from "react-router-dom";
import styles from "./herosection.module.css";

const HeroSection = ({
  logo = "/logo.png",
  backgroundImage,
  headerTitle,
  title,
  subtitle,
  details,
}) => {
  return (
    <section className={styles.heroSection}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Link to="/" className={styles.logoLink}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
        <h1 className={styles.headerTitle}>{headerTitle}</h1>
      </div>

      <div className={styles.headline}>
        <h2 className={styles.title}>{title}</h2>
        <h4 className={`${styles.subtitle} subtitle`}>{subtitle}</h4>
      </div>

      <ul>
        {details?.includes?.map((item, index) => (
          <li key={index} className={styles.detailItem}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HeroSection;
