import styles from "./reviews.module.css";
import reviewsData from "../../data.js";

const ReviewCard = ({ name, title, description }) => {
  return (
    <div className={styles.reviewCard}>
      <h3 className={styles.subHeaderText}>{name}</h3>
      <h3 className={styles.subHeaderText}>{title}</h3>
      <h4 className={styles.reviewText}>{description}</h4>
    </div>
  );
};

const Reviews = () => {
  return (
    <section className={styles.reviewsSection}>
      <ReviewCard
        name={reviewsData[0].name}
        title={reviewsData[0].title}
        description={reviewsData[0].description}
      />
      <ReviewCard
        name={reviewsData[1].name}
        title={reviewsData[1].title}
        description={reviewsData[1].description}
      />
      <ReviewCard
        name={reviewsData[2].name}
        title={reviewsData[2].title}
        description={reviewsData[2].description}
      />
      <ReviewCard
        name={reviewsData[3].name}
        title={reviewsData[3].title}
        description={reviewsData[3].description}
      />
    </section>
  );
};

export default Reviews;
