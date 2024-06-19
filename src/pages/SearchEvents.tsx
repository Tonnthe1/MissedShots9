import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchEvents.module.css";

const SearchEvents: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='searchEventsText']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLinkContainerClick = useCallback(() => {
    navigate("/create-event");
  }, [navigate]);

  const onEvent1ContainerClick = useCallback(() => {
    navigate("/event");
  }, [navigate]);

  return (
    <div className={styles.searchEvents}>
      <div className={styles.topBar}>
        <div className={styles.backToTop}>
          <button className={styles.frame} onClick={onFrameClick} />
          <b className={styles.backToTop1}>Back to top</b>
          <button className={styles.home} onClick={onHomeClick} />
          <b className={styles.home1}>Home</b>
        </div>
        <b className={styles.searchEvents1} data-scroll-to="searchEventsText">
          Search Event
        </b>
      </div>
      <div className={styles.searchBox}>
        <div className={styles.frame1} />
        <input className={styles.search} placeholder="Search..." type="text" />
      </div>
      <div className={styles.link} onClick={onLinkContainerClick}>
        <button className={styles.cantFindYour}>
          Can't find your event? Create it here!
        </button>
      </div>
      <div className={styles.event1} onClick={onEvent1ContainerClick}>
        <div className={styles.event1Child} />
        <div className={styles.container}>
          <a
            className={styles.wednesdayJune05}
            href="http://127.0.0.1:5000/event/1"
            target="_blank"
          >
            Wednesday, June 05, 2024 01:13 AM
          </a>
          <div className={styles.addressWrapper}>
            <div className={styles.address}>Address</div>
          </div>
          <a
            className={styles.sd}
            href="http://127.0.0.1:5000/event/1"
            target="_blank"
          >
            sd
          </a>
          <div className={styles.nameOfEvent}>
            <a
              className={styles.hanson}
              href="http://127.0.0.1:5000/event/1"
              target="_blank"
            >
              Hanson
            </a>
          </div>
        </div>
      </div>
      <div className={styles.event2}>
        <div className={styles.event1Child} />
        <div className={styles.container}>
          <a
            className={styles.wednesdayJune05}
            href="http://127.0.0.1:5000/event/1"
            target="_blank"
          >
            Wednesday, June 05, 2024 01:13 AM
          </a>
          <div className={styles.addressWrapper}>
            <div className={styles.address}>Address</div>
          </div>
          <a
            className={styles.sd}
            href="http://127.0.0.1:5000/event/1"
            target="_blank"
          >
            sd
          </a>
          <div className={styles.nameOfEvent}>
            <a
              className={styles.hanson}
              href="http://127.0.0.1:5000/event/1"
              target="_blank"
            >
              Hanson
            </a>
          </div>
        </div>
      </div>
      <div className={styles.event3}>
        <div className={styles.event1Child} />
        <div className={styles.container}>
          <a
            className={styles.wednesdayJune05}
            href="http://127.0.0.1:5000/event/1"
            target="_blank"
          >
            Wednesday, June 05, 2024 01:13 AM
          </a>
          <div className={styles.addressWrapper}>
            <div className={styles.address}>Address</div>
          </div>
          <a
            className={styles.sd}
            href="http://127.0.0.1:5000/event/1"
            target="_blank"
          >
            sd
          </a>
          <div className={styles.nameOfEvent}>
            <a
              className={styles.hanson}
              href="http://127.0.0.1:5000/event/1"
              target="_blank"
            >
              Hanson
            </a>
          </div>
        </div>
      </div>
      <div className={styles.event31}>
        <div className={styles.event1Child} />
        <div className={styles.container}>
          <a
            className={styles.wednesdayJune05}
            href="http://127.0.0.1:5000/event/1"
            target="_blank"
          >
            Wednesday, June 05, 2024 01:13 AM
          </a>
          <div className={styles.addressWrapper}>
            <div className={styles.address}>Address</div>
          </div>
          <a
            className={styles.sd}
            href="http://127.0.0.1:5000/event/1"
            target="_blank"
          >
            sd
          </a>
          <div className={styles.nameOfEvent}>
            <a
              className={styles.hanson}
              href="http://127.0.0.1:5000/event/1"
              target="_blank"
            >
              Hanson
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchEvents;
