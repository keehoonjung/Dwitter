import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { deleteTweet, getTweets, TweetType } from "../../service/store";
import styles from "./tweet.module.css";

type TweetPros = {
  item: TweetType;
  index: number;
  dispatch: Dispatch;
};

const Tweet = ({ item, index, dispatch }: TweetPros) => {
  const onClick = () => {
    dispatch(deleteTweet(index));
  };

  const onLink = () => {
    console.log(item.createdAt);

    // dispatch(getTweets(item.useranme));
  };

  return (
    <li className={styles.container}>
      <img className={styles.thumbnail} src={item.url} alt="thumbnail" />
      <div className={styles.description}>
        <div className={styles.user}>
          <h3 className={styles.user_name}>{item.name}</h3>
          <a className={styles.user_id} href={`#`} onClick={onLink}>
            {item.useranme}
          </a>
          <p className={styles.user_createdAt}>
            {calculateDate(item.createdAt!)}
          </p>
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

function calculateDate(date: number) {
  const newDate = new Date(date);
  console.log(newDate);

  const diffDate = Date.now() - date;
  const second = Math.floor(diffDate / 1000);
  const minute = Math.floor(second / 60);
  const hour = Math.floor(minute / 60);
  const day = Math.floor(hour / 24);
  if (day >= 30) {
    return `· on ${date.getMonth}월 ${date.getDate} `;
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

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Tweet);
