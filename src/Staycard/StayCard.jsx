import styles from "./staycard.module.css";
import Button from "../components/button/Button";
import { useNavigate } from "react-router-dom";

const StayCard = ({ stay }) => {
  const navigate = useNavigate();
  return (
    <div key={stay._id} className={styles.stayCard}>
      <div className={styles.stayInfo}>
        <h2 className={styles.stayName}>{stay.title}</h2>
        <h3 className={styles.stayDetails}>
          <p className={styles.stayPersons}>{stay.numberOfPersons} personer</p>
          <p className={styles.stayPrice}>{stay.price},-</p>
        </h3>
      </div>
      <img src={stay.image} alt={stay.title} className={styles.stayImage} />
      <Button
        buttonText="Læs mere"
        variant="secondary"
        onClick={() => navigate(`/ophold/${stay._id}`)}
      />
    </div>
  );
};
export default StayCard;
