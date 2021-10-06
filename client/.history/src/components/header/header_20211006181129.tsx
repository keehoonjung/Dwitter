import React from "react";
import styles from "./header.module.css";

const Header = (props: any) => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <img className={styles.logo} src="./images/logo.png" alt="logo" />
        <h1 className={styles.title}>Dwitter</h1>
        <p className={styles.username}>@userId</p>
      </div>
      <div className={styles.menu_container}>
        <button className={styles.button}>All Tweets</button>
        <button className={styles.button}>My Tweets</button>
        <button className={styles.button}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
