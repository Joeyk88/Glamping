import { useState, useEffect } from "react";
import styles from "./eventsection.module.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const EventSection = () => {
  const [openEvent, setOpenEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://glamping-rqu9j.ondigitalocean.app/activities/"
        );

        if (!response.ok) {
          throw new Error("Kunne ikke hente aktiviteter");
        }

        const result = await response.json();

        // Assuming API returns { status, message, data: [...] } like the stays endpoint
        const activitiesData = result.data || result;
        setEvents(activitiesData);
        setLoading(false);
      } catch (err) {
        console.error("Fejl ved hentning af aktiviteter:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const toggleEvent = (id) => {
    setOpenEvent(openEvent === id ? null : id);
  };

  return (
    <section className={styles.eventSection}>
      {events.map((event) => (
        <div key={event._id} className={styles.eventCard}>
          <div className={styles.eventHeader}>
            <h2>{event.title}</h2>
          </div>
          <img
            src={event.image}
            alt={event.title}
            className={styles.eventImage}
          />
          <div className={styles.eventDetails}>
            <div className={styles.dateTimeContainer}>
              {event.date && <h3 className={styles.date}>{event.date}</h3>}
              {event.time && <h3 className={styles.time}>{event.time}</h3>}
            </div>
            <button
              className={styles.toggleButton}
              onClick={() => toggleEvent(event._id)}
              aria-expanded={openEvent === event._id}
              aria-label={openEvent === event._id ? "Læs mindre" : "Læs mere"}
            >
              {openEvent === event._id ? "Læs mindre" : "Læs mere"}
              {openEvent === event._id ? (
                <MdKeyboardArrowUp className={styles.icon} />
              ) : (
                <MdKeyboardArrowDown className={styles.icon} />
              )}
            </button>
            {openEvent === event._id && (
              <div className={styles.eventContent}>
                <p>{event.description}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default EventSection;
