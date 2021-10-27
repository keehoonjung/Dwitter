import React, { useState } from "react";
import { Link } from "react-router-dom";
import UpdateTweet from "../update_tweet/update_tweet";
import styles from "./tweet.module.css";

type TweetType = {
  id: string;
  createdAt: Date;
  text: string;
  name: string;
  username: string;
  url: string;
};

type TweetPros = {
  item: TweetType;
  data: string | null;
  onDeleteTweet(): void;
  onUpdateTweet(text: string): void;
};

const Tweet = ({ item, data, onDeleteTweet, onUpdateTweet }: TweetPros) => {
  const [updatePaeneol, setUpdatePaeneol] = useState(false);
  const onClick = () => {
    onDeleteTweet();
  };

  const onUpdate = (text: string) => {
    onUpdateTweet(text);
  };

  const onUpdatePaeneol = () => {
    setUpdatePaeneol(true);
  };

  const offUpdatePaeneol = () => {
    setUpdatePaeneol(false);
  };

  return (
    <li
      className={`${styles.container} ${onUpdatePaeneolSetting(updatePaeneol)}`}
    >
      <img className={styles.thumbnail} src={item.url} alt="thumbnail" />
      <div className={styles.description}>
        <div className={styles.user}>
          <h3 className={styles.user_name}>{item.name}</h3>
          <Link className={styles.user_id} to={`/main/${item.username}`}>
            {item.username}
          </Link>
          <p className={styles.user_createdAt}>
            {calculateDate(item.createdAt!)}
          </p>
        </div>
        <p className={styles.text}>{item.text}</p>
        {updatePaeneol && (
          <UpdateTweet
            onUpdate={onUpdate}
            offUpdatePaeneol={offUpdatePaeneol}
          />
        )}
      </div>
      {item.username === data && (
        <div className={styles.button_container}>
          <button className={styles.deleteBtn} onClick={onClick}>
            <i className="fas fa-times"></i>
          </button>
          <button className={styles.updateBtn} onClick={onUpdatePaeneol}>
            <i className="fas fa-pencil-alt"></i>
          </button>
        </div>
      )}
    </li>
  );
};

function onUpdatePaeneolSetting(onUpdate: boolean) {
  if (onUpdate) {
    return styles.onUpdate;
  }
}

function calculateDate(number: Date) {
  const date = new Date(number);
  const newDate = date.getTime();
  const diffDate = Date.now() - newDate;
  const second = Math.floor(diffDate / 1000);
  const minute = Math.floor(second / 60);
  const hour = Math.floor(minute / 60);
  const day = Math.floor(hour / 24);
  if (day >= 30) {
    return `· on ${date.getMonth()}월 ${date.getDate()} `;
  }
  if (day >= 1) {
    return `· ${day} days ago`;
  }
  if (hour >= 1) {
    return `· ${hour} hours ago`;
  }
  if (minute >= 1) {
    return `· ${minute} minute ago`;
  }
  return `· just now`;
}

export default Tweet;
