import React from "react";
import styles from "./banner.module.css";

const Banner = ({ error }) => {
  return <div className={styles.error}>{error}</div>;
};

export default Banner;
