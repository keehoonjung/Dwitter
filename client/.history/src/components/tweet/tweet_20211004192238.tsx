import React from "react";
import { Tweet, TweetType } from "../../service/store";
import styles from "./tweet.module.css";

type TweetPros = {
  tweet: TweetType;
};

const Tweet = (props: any) => {
  return (
    <li className={styles.container}>
      <img
        className={styles.thumbnail}
        src="./images/logo.png"
        alt="thumbnail"
      />
      <div className={styles.description}>
        <div className={styles.user}>
          <h3 className={styles.user_name}>123456</h3>
          <p className={styles.user_id}>@ID</p>
          <p className={styles.user_createdAt}>created At</p>
        </div>
        <p className={styles.text}>Text</p>
      </div>
      <div className={styles.button_container}>
        <button className={styles.deleteBtn}>
          <i className="fas fa-times"></i>
        </button>
        <button className={styles.modifyBtn}>
          <i className="fas fa-pencil-alt"></i>
        </button>
      </div>
    </li>
  );
};

export default Tweet;
