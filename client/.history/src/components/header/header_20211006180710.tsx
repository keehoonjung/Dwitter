import React from "react";
import styles from "./header.module.css";

const Header = (props: any) => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="./images/logo.png" alt="logo" />
      <h1 className={styles.title}>Dwitter</h1>
      <p>@userId</p>
    </header>
  );
};

export default Header;
