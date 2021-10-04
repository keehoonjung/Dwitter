import React from "react";
import { TweetType } from "../../service/store";
import styles from "./tweet.module.css";

type TweetPros = {
  item: TweetType;
};

const Tweet = ({ item }: TweetPros) => {
  const onClick = () => {
    console.log(item);
  };
  return (
    <li className={styles.container}>
      <img className={styles.thumbnail} src={item.url} alt="thumbnail" />
      <div className={styles.description}>
        <div className={styles.user}>
          <h3 className={styles.user_name}>{item.name}</h3>
          <p className={styles.user_id}>{item.user}</p>
          <p className={styles.user_createdAt}>{item.createat}</p>
        </div>
        <p className={styles.text}>{item.text}</p>
      </div>
      <div className={styles.button_container}>
        <button className={styles.deleteBtn} onClick={onClick}>
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
