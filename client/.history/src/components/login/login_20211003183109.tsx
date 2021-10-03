import React from "react";
import styles from "./login.module.css";

const Login = (props: any) => {
  return (
    <>
      <input type="text" />
      <input type="text" />
      <input type="checkbox" id="createId" />
      <label htmlFor="createId">Create a new account?</label>
      <button>Sign In</button>
    </>
  );
};

export default Login;
