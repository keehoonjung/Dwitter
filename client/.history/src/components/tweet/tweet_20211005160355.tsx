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
    dispatch(getTweets(item.useranme));
  };

  return (
    <li className={styles.container}>
      <img className={styles.thumbnail} src={item.url} alt="thumbnail" />
      <div className={styles.description}>
        <div className={styles.user}>
          <h3 className={styles.user_name}>{item.name}</h3>
          <a
            className={styles.user_id}
            href={`#
            `}
            onClick={onLink}
          >
            {item.useranme}
          </a>
          <p className={styles.user_createdAt}>{item.createdAt.toString()}</p>
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

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Tweet);
