import React from "react";
import { match } from "react-router";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

type HeaderProps = {
  login: boolean;
};

const Header = ({ login }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <img className={styles.logo} src="/assets/logo.png" alt="logo" />
        <h1 className={styles.title}>Dwitter</h1>
        <p className={styles.username}>@userId</p>
      </div>
      {login && (
        <div className={styles.menu_container}>
          <button className={styles.button}>
            <Link className={styles.link} to="/main">
              All Tweets
            </Link>
          </button>
          <button className={styles.button}>
            <Link className={styles.link} to="/main/JK">
              My Tweets
            </Link>
          </button>
          <button className={styles.logoutBtn}>Logout</button>
        </div>
      )}
    </header>
  );
};

export default Header;
