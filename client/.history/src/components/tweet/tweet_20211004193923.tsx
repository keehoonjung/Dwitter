import React from "react";
import { TweetType } from "../../service/store";
import styles from "./tweet.module.css";

type TweetPros = {
  item: TweetType;
};

const Tweet = ({ item }: TweetPros) => {
  return (
    <li className={styles.container}>
      <img className={styles.thumbnail} src={item.url} alt="thumbnail" />
      <div className={styles.description}>
        <div className={styles.user}>
          <h3 className={styles.user_name}>{item.name}</h3>
          <p className={styles.user_id}>{`@ ${item.useranme}`}</p>
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
