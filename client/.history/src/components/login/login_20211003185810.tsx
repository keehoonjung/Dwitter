import React from "react";
import styles from "./login.module.css";

const Login = (props: any) => {
  return (
    <form className={styles.container}>
      <input className={styles.input} type="text" />
      <input className={styles.input} type="text" />
      <div>
        <input className={styles.checkbox} type="checkbox" id="createId" />
        <label className={styles.checkbox_label} htmlFor="createId">
          Create a new account?
        </label>
      </div>
      <button className={styles.button}>Sign In</button>
    </form>
  );
};

export default Login;
