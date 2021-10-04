import React from "react";
import styles from "./tweet.module.css";

const Tweet = (props: any) => {
  return (
    <div className={styles.container}>
      <img src="./images/logo.png" alt="thumbnail" />
      <div className={styles.description}>
        <div className={styles.user}>
          <h3 className={styles.user_name}>Name</h3>
          <p className={styles.user_id}>@ID</p>
          <p className={styles.user_createAt}>created At</p>
        </div>
        <p className={styles.text}>Text</p>
      </div>
      <div className={styles.button}>
        <button className={styles.deleteBtn}>
          <i className="fas fa-times"></i>
        </button>
        <button className={styles.modifyBtn}>
          <i className="fas fa-pencil-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Tweet;
