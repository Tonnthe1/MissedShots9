import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/search-events");
  }, [navigate]);

  const onMyEventsClick = useCallback(() => {
    navigate("/my-events");
  }, [navigate]);

  const onFrameClick1 = useCallback(() => {
    navigate("/my-account");
  }, [navigate]);

  const onFrameClick2 = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.homePage}>
      <div className={styles.seachEventParent}>
        <button className={styles.seachEvent}>
          <div className={styles.frame} onClick={onFrameClick} />
          <div className={styles.searchEvent}>Search Event</div>
        </button>
        <button className={styles.myEvents} onClick={onMyEventsClick}>
          <div className={styles.frame1} />
          <div className={styles.myEvents1}>My Events</div>
        </button>
        <button className={styles.myAccounts}>
          <div className={styles.frame} onClick={onFrameClick1} />
          <div className={styles.myAccount}>My Account</div>
        </button>
        <button className={styles.logOut}>
          <div className={styles.frame3} onClick={onFrameClick2} />
          <div className={styles.logOut1}>Log out</div>
        </button>
      </div>
      <b className={styles.home}>Home</b>
    </div>
  );
};

export default HomePage;
