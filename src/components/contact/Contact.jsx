import styles from "./contact.module.css";
import { ImFacebook2 } from "react-icons/im";
import { TbBrandInstagramFilled } from "react-icons/tb";
import logo from "/logo.png";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.socialIcons}>
        <ImFacebook2 className={styles.icon} />
        <TbBrandInstagramFilled
          className={`${styles.icon} ${styles.instagramIcon}`}
        />
      </div>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Glamping Logo" className={styles.logo} />
        <h6 className={styles.title}>Gittes Glamping</h6>
      </div>
    </section>
  );
};

export default Contact;
