import styles from "../button/button.module.css";

const Button = ({ buttonText, onClick, variant = "primary" }) => {
  const variantClass = {
    primary: styles.primary, // BOOK NU (hvid)
    secondary: styles.secondary, // SE VORES OPHOLD (grøn)
    tertiary: styles.tertiary, // Læs mere (grøn)
    quaternary: styles.quaternary, // Book nu (grøn, anden størrelse)
    submit: styles.submit, // Indsend (grøn)
  };

  return (
    <button
      className={`${styles.button} ${variantClass[variant] || styles.primary}`}
      onClick={onClick}
    >
      <h5 className={styles.buttonText}>{buttonText}</h5>
    </button>
  );
};

export default Button;
