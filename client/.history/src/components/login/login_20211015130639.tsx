import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import styles from "./login.module.css";

type LoginStatus = {
  onLoginId(id: string, password: string): void;
};

const Login = ({ onLoginId }: LoginStatus) => {
  const [onCreate, setOnCreate] = useState(false);
  const history = useHistory();
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const onChange = () => {
    setOnCreate(checkboxRef.current!.checked);
  };
  const onClick = (e: any) => {
    const id = idRef.current!.value;
    const password = passwordRef.current!.value;
    onLoginId(id, password);
    // history.push({
    //   pathname: "/main",
    // });
  };
  return (
    <form className={styles.container}>
      <input
        ref={idRef}
        className={styles.input}
        type="text"
        placeholder="Id"
      />
      <input
        ref={passwordRef}
        className={styles.input}
        type="text"
        placeholder="Password"
      />
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
