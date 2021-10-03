import React from "react";
import styles from "./header.module.css";

const Header = (props: any) => {
  return (
    <header className={styles.header}>
      <img src="./images/logo.png" alt="logo" />
      <h1>Header</h1>
    </header>
  );
};

export default Header;
