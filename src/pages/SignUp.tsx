import { FunctionComponent } from "react";
import styles from "./SignUp.module.css";

const SignUp: FunctionComponent = () => {
  return (
    <div className={styles.signUp}>
      <div className={styles.email}>
        <b className={styles.bigEmail}>Ur Email</b>
        <div className={styles.frame} />
        <input className={styles.email1} placeholder="Email" type="email" />
        <div className={styles.password}>
          <b className={styles.bigPassword}>Password</b>
          <div className={styles.frame1} />
          <input
            className={styles.password1}
            placeholder="Password"
            type="text"
          />
        </div>
      </div>
      <div className={styles.realName}>
        <b className={styles.bigName}>Ur name</b>
        <div className={styles.frame} />
        <input className={styles.name} placeholder="Name" type="text" />
      </div>
      <button className={styles.signInParent}>
        <img className={styles.signInIcon} alt="" src="/sign-in.svg" />
        <div className={styles.signUp1}>Sign up</div>
      </button>
      <b className={styles.signUp2}>Sign Up</b>
      <button className={styles.backToEvent}>
        <div className={styles.home} />
        <b className={styles.home1}>Upload Your Profile Pic</b>
      </button>
    </div>
  );
};

export default SignUp;
