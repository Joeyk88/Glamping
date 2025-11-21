import { useState, useEffect } from "react";
import styles from "./staysection.module.css";
import Button from "../button/Button";

const StaySection = () => {
  const [stays, setStays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStays = async () => {
      try {
        const response = await fetch(
          "https://glamping-rqu9j.ondigitalocean.app/stays/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch stays");
        }
        const result = await response.json();
        // API returns { status, message, data: [...] }
        const staysArray = result.data || [];
        // Get only first 3 stays
        setStays(staysArray.slice(0, 3));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStays();
  }, []);

  return (
    <section className={styles.staySection}>
      <div className={styles.staysContainer}>
        {stays.map((stay) => (
          <div key={stay._id} className={styles.stayCard}>
            <div className={styles.stayInfo}>
              <h2 className={styles.stayName}>{stay.title}</h2>
              <h3 className={styles.stayDetails}>
                <p className={styles.stayPersons}>
                  {stay.numberOfPersons} personer
                </p>
                <p className={styles.stayPrice}>{stay.price},-</p>
              </h3>
            </div>
            <img
              src={stay.image}
              alt={stay.title}
              className={styles.stayImage}
            />
            <Button buttonText="Læs mere" variant="secondary" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default StaySection;
