import React from "react";
import Tweet from "../tweet/tweet";
import styles from "./tweets.module.css";

const Tweets = (props: any) => {
  return (
    <ul className={styles.container}>
      <Tweet />
      <Tweet />
      <Tweet />
    </ul>
  );
};

export default Tweets;
