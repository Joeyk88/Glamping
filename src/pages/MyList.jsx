import { useState, useEffect } from "react";
import HeroSection from "../components/heroSection/HeroSection";
import heroImage from "../Gittes_Glamping_Assets/image_05.jpg";
import styles from "./mylist.module.css";
import { FaHeart } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const MyList = () => {
  const [likedEvents, setLikedEvents] = useState([]);
  const [openEvent, setOpenEvent] = useState(null);

  useEffect(() => {
    const loadLikedEvents = () => {
      const savedLikes = localStorage.getItem("likedEvents");
      if (savedLikes) {
        setLikedEvents(JSON.parse(savedLikes));
      }
    };

    loadLikedEvents();

    // Listen for storage changes
    window.addEventListener("storage", loadLikedEvents);
    return () => window.removeEventListener("storage", loadLikedEvents);
  }, []);

  const toggleEvent = (id) => {
    setOpenEvent(openEvent === id ? null : id);
  };

  const removeFromList = (eventId) => {
    const updatedLikes = likedEvents.filter((item) => item._id !== eventId);
    setLikedEvents(updatedLikes);
    localStorage.setItem("likedEvents", JSON.stringify(updatedLikes));
  };

  return (
    <div>
      <HeroSection
        backgroundImage={heroImage}
        headerTitle="Min Liste"
        title={`Antal aktiviteter i din liste: ${likedEvents.length}`}
      />
      <section className={styles.myListSection}>
        {likedEvents.length === 0 ? (
          <div className={styles.emptyState}>
            <p>Du har ingen aktiviteter i din liste endnu.</p>
            <p>Tryk på ♥ på en aktivitet for at tilføje den til din liste.</p>
          </div>
        ) : (
          likedEvents.map((event) => (
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
                  <button
                    className={styles.heartButton}
                    onClick={() => removeFromList(event._id)}
                    aria-label="Fjern fra min liste"
                  >
                    <FaHeart className={styles.heartIcon} />
                  </button>
                  {event.time && <h3 className={styles.time}>{event.time}</h3>}
                </div>
                <button
                  className={styles.toggleButton}
                  onClick={() => toggleEvent(event._id)}
                  aria-expanded={openEvent === event._id}
                  aria-label={
                    openEvent === event._id ? "Læs mindre" : "Læs mere"
                  }
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
          ))
        )}
      </section>
    </div>
  );
};

export default MyList;
