import { FunctionComponent } from "react";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  return (
    <div className={styles.login}>
      <section className={styles.email}>
        <b className={styles.bigEmail}>Ur Email</b>
        <div className={styles.frame} />
        <input className={styles.email1} placeholder="Email" type="email" />
      </section>
      <section className={styles.password}>
        <b className={styles.bigPassword}>Password</b>
        <div className={styles.frame1} />
        <input
          className={styles.password1}
          placeholder="Password"
          type="password"
        />
      </section>
      <button className={styles.signInParent}>
        <img className={styles.signInIcon} alt="" src="/sign-in.svg" />
        <div className={styles.login1}>Login</div>
      </button>
      <b className={styles.login2}>Login</b>
      <button className={styles.dontHaveAnContainer}>
        <span className={styles.dontHaveAnContainer1}>
          <p className={styles.dontHaveAn}>Don't have an account?</p>
          <p className={styles.signUpNow}>
            <a
              className={styles.signUpNow1}
              href="http://127.0.0.1:5000/signup"
              target="_blank"
            >
              <b className={styles.signUpNow2}>Sign up NOW</b>
            </a>
          </p>
        </span>
      </button>
    </div>
  );
};

export default Login;
