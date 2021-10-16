import React from "react";
import TweetContainer from "../../container/tweet_container";
import Tweet from "../tweet/tweet";
import styles from "./tweets.module.css";

// type TweetsProps = {
//   data: TweetType[];
// };

const Tweets = ({ tweets }) => {
  return (
    <ul className={styles.container}>
      {tweets.map((tweet) => {
        return <TweetContainer key={tweet.id} item={tweet} />;
      })}
    </ul>
  );
};

export default Tweets;
