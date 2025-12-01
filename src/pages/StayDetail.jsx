import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroSection from "../components/heroSection/HeroSection";
import PageHeader from "../components/pageHeader/PageHeader";
import Button from "../components/button/Button";
import styles from "./staydetail.module.css";
import { API_BASE_URL } from "../config";

const StayDetail = () => {
  const [stay, setStay] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchStay = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/stay/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch stay");
        }
        const result = await response.json();

        setStay(result.data[0]);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStay();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!stay) {
    return <div>Stay not found</div>;
  }

  return (
    <div>
      <HeroSection
        backgroundImage={stay.image}
        headerTitle={stay.title}
        subtitle={stay.description}
        details={stay}
      />
      {stay.includes && stay.includes.length > 0 && (
        <section className={styles.includesSection}>
          {stay.includes.map((include, index) => (
            <h4 key={index} className={styles.includeItem}>
              {include}
            </h4>
          ))}
          {stay.price && (
            <div className={styles.priceContainer}>
              <h3 className={styles.price}>Pris {stay.price},-</h3>
              <Button buttonText="Book nu" variant="secondary" />
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default StayDetail;
