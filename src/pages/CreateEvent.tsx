import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreateEvent.module.css";

const CreateEvent: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBackToEventClick = useCallback(() => {
    navigate("/search-events");
  }, [navigate]);

  return (
    <div className={styles.createEvent}>
      <b className={styles.createEvent1}>Create Event</b>
      <div className={styles.backToEvent} onClick={onBackToEventClick}>
        <div className={styles.home} />
        <b className={styles.home1}>Back to Events</b>
      </div>
      <div className={styles.eventName}>
        <input
          className={styles.eventName1}
          placeholder="Event Name"
          type="text"
        />
      </div>
      <div className={styles.onlineEvent}>
        <div className={styles.onlineSync}>Online Sync</div>
      </div>
      <div className={styles.eventAddress}>
        <input
          className={styles.eventAddress1}
          placeholder="Event Address"
          type="text"
        />
      </div>
      <button className={styles.createEvent2}>
        <div className={styles.createEvent3}>Create Event</div>
      </button>
      <button className={styles.eventType}>
        <div className={styles.eventType1}>Event Type</div>
      </button>
      <button className={styles.eventTime}>
        <div className={styles.eventType1}>Event Time</div>
      </button>
      <button className={styles.coverImage}>
        <div className={styles.coverImageNon}>Cover Image (Non required)</div>
      </button>
      <div className={styles.toggle}>
        <div className={styles.background} />
      </div>
    </div>
  );
};

export default CreateEvent;
