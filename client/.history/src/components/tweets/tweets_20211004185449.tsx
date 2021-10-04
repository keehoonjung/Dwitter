import React from "react";
import Tweet from "../tweet/tweet";
import styles from "./tweets.module.css";

const Tweets = (props: any) => {
  return (
    <section className={styles.container}>
      <Tweet />
      <Tweet />
      <Tweet />
    </section>
  );
};

export default Tweets;
