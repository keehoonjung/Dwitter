import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import styles from "./login.module.css";

const Login = (props: any) => {
  const [onCreate, setOnCreate] = useState(false);
  const history = useHistory();
  const checkboxRef = useRef<HTMLInputElement>(null);
  const onChange = () => {
    setOnCreate(checkboxRef.current!.checked);
  };
  const onClick = () => {};
  return (
    <form className={styles.container}>
      <input className={styles.input} type="text" placeholder="Id" />
      <input className={styles.input} type="text" placeholder="Password" />
      {onCreate && (
        <>
          <input className={styles.input} type="text" placeholder="Name" />
          <input className={styles.input} type="text" placeholder="Email" />
          <input
            className={styles.input}
            type="text"
            placeholder="Profile Image URL"
          />
        </>
      )}
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
      <button className={styles.button} onClick={onClick}>
        Sign In
      </button>
    </form>
  );
};

export default Login;
