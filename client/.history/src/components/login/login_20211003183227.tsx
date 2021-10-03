import React from "react";
import styles from "./login.module.css";

const Login = (props: any) => {
  return (
    <form>
      <input className={styles.input} type="text" />
      <input type="text" />
      <input type="checkbox" id="createId" />
      <label className={styles.createBtn} htmlFor="createId">
        Create a new account?
      </label>
      <button className={styles.signBtn}>Sign In</button>
    </form>
  );
};

export default Login;
