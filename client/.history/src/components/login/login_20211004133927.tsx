import React, { useRef, useState } from "react";
import styles from "./login.module.css";

const Login = (props: any) => {
  const [onCreate, setOnCreate] = useState(false);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const onChange = () => {
    setOnCreate(checkboxRef.current!.checked);
  };
  return (
    <form className={styles.container}>
      <input className={styles.input} type="text" placeholder="Id" />
      <input className={styles.input} type="text" placeholder="Password" />
      <div className={styles.checkbox_container}>
        <input
          ref={checkboxRef}
          className={styles.checkbox}
          type="checkbox"
          id="createId"
          onChange={onChange}
        />
        <label className={styles.checkbox_label} htmlFor="createId">
          Create a new account?
        </label>
      </div>
      <button className={styles.button}>Sign In</button>
    </form>
  );
};

export default Login;
