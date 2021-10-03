import React from "react";
import styles from "./login.module.css";

const Login = (props: any) => {
  return (
    <form className={styles.container}>
      <input className={styles.input} type="text" />
      <input className={styles.input} type="text" />
      <input className={styles.checkbox} type="checkbox" id="createId" />
      <label className={styles.checkbox_label} htmlFor="createId">
        Create a new account?
      </label>
      <button className={styles.signBtn}>Sign In</button>
    </form>
  );
};

export default Login;
