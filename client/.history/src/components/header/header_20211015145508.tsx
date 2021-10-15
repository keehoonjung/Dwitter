import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

type DataType = {
  username: string;
  password: string;
  name: string;
  email: string;
  url: string;
};

type HeaderProps = {
  login: boolean;
  data: DataType | null;
  onLogoutId: void;
};

const Header = ({ login, data }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <img className={styles.logo} src="/assets/logo.png" alt="logo" />
        <h1 className={styles.title}>Dwitter</h1>
        {login && <p className={styles.username}>@{data!.username}</p>}
      </div>
      {login && (
        <div className={styles.menu_container}>
          <button className={styles.button}>
            <Link className={styles.link} to="/main">
              All Tweets
            </Link>
          </button>
          <button className={styles.button}>
            <Link className={styles.link} to={`/main/${data!.username}`}>
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
