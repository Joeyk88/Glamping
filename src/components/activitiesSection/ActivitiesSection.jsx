import { useState, useEffect } from "react";
import styles from "./activitiessection.module.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { API_BASE_URL } from "../../config";

const ActivitiesSection = () => {
  const [openEvent, setOpenEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likedEvents, setLikedEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/activities/`);

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

    // Load liked events from localStorage
    const savedLikes = localStorage.getItem("likedEvents");
    if (savedLikes) {
      setLikedEvents(JSON.parse(savedLikes));
    }
  }, []);

  const toggleEvent = (id) => {
    setOpenEvent(openEvent === id ? null : id);
  };

  const toggleLike = (event) => {
    const isLiked = likedEvents.some((item) => item._id === event._id);
    let updatedLikes;

    if (isLiked) {
      // Unlike - remove from list
      updatedLikes = likedEvents.filter((item) => item._id !== event._id);
    } else {
      // Like - add to list
      updatedLikes = [...likedEvents, event];
    }

    setLikedEvents(updatedLikes);
    localStorage.setItem("likedEvents", JSON.stringify(updatedLikes));
  };

  const isEventLiked = (eventId) => {
    return likedEvents.some((item) => item._id === eventId);
  };

  return (
    <section className={styles.activitiesSection}>
      {events.map((event) => (
        <div key={event._id} className={styles.activityCard}>
          <div className={styles.activityHeader}>
            <h2>{event.title}</h2>
          </div>
          <img
            src={event.image}
            alt={event.title}
            className={styles.activityImage}
          />
          <div className={styles.activityDetails}>
            <div className={styles.dateTimeContainer}>
              {event.date && <h3 className={styles.date}>{event.date}</h3>}
              <button
                className={styles.heartButton}
                onClick={() => toggleLike(event)}
                aria-label={
                  isEventLiked(event._id)
                    ? "Fjern fra min liste"
                    : "Tilføj til min liste"
                }
              >
                {isEventLiked(event._id) ? (
                  <FaHeart className={styles.heartIcon} />
                ) : (
                  <FaRegHeart className={styles.heartIcon} />
                )}
              </button>
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
              <div className={styles.activityContent}>
                <p>{event.description}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ActivitiesSection;
