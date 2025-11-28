import { useState, useEffect } from "react";
import styles from "./reviews.module.css";
import { API_BASE_URL } from "../../config";

const ReviewCard = ({ name, age, stay, review }) => {
  return (
    <div className={styles.reviewCard}>
      <h3 className={styles.subHeaderText}>
        {name}, {age} år
      </h3>
      <h3 className={styles.subHeaderText}>Har været på {stay}</h3>
      <h4 className={styles.reviewText}>{review}</h4>
    </div>
  );
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/reviews/`);

        if (!response.ok) {
          throw new Error("Kunne ikke hente anmeldelser");
        }

        const result = await response.json();
        const reviewsData = result.data || result;
        setReviews(reviewsData);
        setLoading(false);
      } catch (err) {
        console.error("Fejl ved hentning af anmeldelser:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <section className={styles.reviewsSection}>
        <p style={{ textAlign: "center", color: "rgba(51, 98, 108, 1)" }}>
          Henter anmeldelser...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.reviewsSection}>
        <p style={{ textAlign: "center", color: "rgba(220, 53, 69, 1)" }}>
          Fejl: {error}
        </p>
      </section>
    );
  }

  return (
    <section className={styles.reviewsSection}>
      {reviews.slice(0, 4).map((review) => (
        <ReviewCard
          key={review._id}
          name={review.name}
          age={review.age}
          stay={review.stay}
          review={review.review}
        />
      ))}
    </section>
  );
};

export default Reviews;
