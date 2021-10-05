import React from "react";
import { connect } from "react-redux";
import { TweetsState, TweetType } from "../../service/store";
import Tweet from "../tweet/tweet";
import styles from "./tweets.module.css";

type TweetsProps = {
  data: TweetType[];
};

const Tweets = ({ data }: TweetsProps) => {
  return (
    <ul className={styles.container}>
      {data.map((item, index) => {
        return <Tweet key={item.id} item={item} index={index} />;
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
