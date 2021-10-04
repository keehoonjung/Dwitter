import React from "react";
import { connect } from "react-redux";
import { TweetsState, TweetType } from "../../service/store";
import Tweet from "../tweet/tweet";
import styles from "./tweets.module.css";

type TweetsProps = {
  data: { [tweetId: string]: TweetType };
};

const Tweets = ({ data }: TweetsProps) => {
  return (
    <ul className={styles.container}>
      {Object.keys(data).map((key) => {
        return <Tweet key={key} item={data[key]} />;
      })}
    </ul>
  );
};

function mapStateToProps(state: TweetsState) {
  return {
    data: state.data,
  };
}

export default connect(mapStateToProps)(Tweets);
