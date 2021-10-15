import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

type HeaderProps = {
  login: boolean;
  data: {
    username: string;
    password: string;
    name: string;
    email: string;
    url: string;
  };
};

const Header = ({ login, data }: HeaderProps) => {
  console.log(data);

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <img className={styles.logo} src="/assets/logo.png" alt="logo" />
        <h1 className={styles.title}>Dwitter</h1>
        {login && <p className={styles.username}>{data.username}</p>}
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
