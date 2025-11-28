import { useState, useEffect } from "react";
import styles from "./staysection.module.css";
import Button from "../button/Button";
import StayCard from "../../Staycard/StayCard";
import { API_BASE_URL } from "../../config";

const StaySection = () => {
  const [stays, setStays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStays = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/stays/`);
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
          <StayCard key={stay._id} stay={stay} />
        ))}
      </div>
    </section>
  );
};

export default StaySection;
