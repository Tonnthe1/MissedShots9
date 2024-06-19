import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MyEvents.module.css";

const MyEvents: FunctionComponent = () => {
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

  const onEventClick = useCallback(() => {
    navigate("/event");
  }, [navigate]);

  return (
    <div className={styles.myEvents}>
      <div className={styles.topBar}>
        <b className={styles.searchEvents} data-scroll-to="searchEventsText">
          My Events
        </b>
        <div className={styles.backToTop}>
          <button className={styles.frame} onClick={onFrameClick} />
          <b className={styles.backToTop1}>Back to top</b>
          <button className={styles.home} onClick={onHomeClick} />
          <b className={styles.home1}>Home</b>
        </div>
      </div>
      <div className={styles.searchBox}>
        <div className={styles.frame1} />
        <input className={styles.search} placeholder="Search..." type="text" />
      </div>
      <nav className={styles.event16} onClick={onEventClick}>
        <div className={styles.event16Child} />
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
      </nav>
      <nav className={styles.event2}>
        <div className={styles.event16Child} />
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
      </nav>
      <div className={styles.event12}>
        <div className={styles.event16Child} />
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
      <div className={styles.event17}>
        <div className={styles.event16Child} />
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
      <div className={styles.event18}>
        <div className={styles.event16Child} />
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
      <div className={styles.event13}>
        <div className={styles.event16Child} />
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
      <div className={styles.event14}>
        <div className={styles.event16Child} />
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
      <div className={styles.event15}>
        <div className={styles.event16Child} />
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
      <nav className={styles.event5}>
        <div className={styles.event16Child} />
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
      </nav>
      <div className={styles.event6}>
        <div className={styles.event16Child} />
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
      <div className={styles.event7}>
        <div className={styles.event16Child} />
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
      <div className={styles.event8}>
        <div className={styles.event16Child} />
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
      <nav className={styles.event9}>
        <div className={styles.event16Child} />
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
      </nav>
      <nav className={styles.event10}>
        <div className={styles.event16Child} />
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
      </nav>
      <nav className={styles.event11}>
        <div className={styles.event16Child} />
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
      </nav>
      <nav className={styles.event3}>
        <div className={styles.event16Child} />
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
      </nav>
    </div>
  );
};

export default MyEvents;
