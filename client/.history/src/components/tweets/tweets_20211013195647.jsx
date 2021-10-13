import React from "react";
import Tweet from "../tweet/tweet";
import styles from "./tweets.module.css";

// type TweetsProps = {
//   data: TweetType[];
// };

const Tweets = ({ tweets }) => {
  return (
    <ul className={styles.container}>
      {tweets.map((tweet, index) => {
        console.log(tweet);
        return <Tweet key={tweet.id} item={tweet} index={index} />;
      })}
    </ul>
  );
};

export default Tweets;
