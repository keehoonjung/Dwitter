import React, { useRef, useState } from "react";
import styles from "./login.module.css";

type LoginStatus = {
  onLoginId(id: string, password: string): void;
  onCreateId(
    id: string,
    password: string,
    name: string,
    email: string,
    url: string
  ): void;
  error: ErrorEvent;
};

const Login = ({ onLoginId, onCreateId, error }: LoginStatus) => {
  const [onCreate, setOnCreate] = useState(false);
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);

  const onChange = () => {
    setOnCreate(checkboxRef.current!.checked);
  };
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const id = idRef.current!.value;
    const password = passwordRef.current!.value;
    if (onCreate) {
      const name = nameRef.current!.value;
      const email = emailRef.current!.value;
      const url = urlRef.current!.value;

      onCreateId(id, password, name, email, url);
    } else {
      onLoginId(id, password);
    }
  };
  return (
    <>
      {error && <div className={styles.error}>{error}</div>}
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
          minLength="5"
        />
        {onCreate && (
          <>
            <input
              ref={nameRef}
              className={styles.input}
              type="text"
              placeholder="Name"
            />
            <input
              ref={emailRef}
              className={styles.input}
              type="text"
              placeholder="Email"
            />
            <input
              ref={urlRef}
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
    </>
  );
};

export default Login;
