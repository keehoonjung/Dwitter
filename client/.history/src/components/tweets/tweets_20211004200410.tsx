import React from "react";
import { connect } from "react-redux";
import { TweetsState } from "../../service/store";
import Tweet from "../tweet/tweet";
import styles from "./tweets.module.css";

type TweetsProps = {
  data: TweetsState;
};

const Tweets = ({ data }: TweetsProps) => {
  return (
    <ul className={styles.container}>
      {data.map((item) => {
        return <Tweet item={item} />;
      })}
    </ul>
  );
};

function mapStateToProps(state: TweetsState) {
  return {
    data: state,
  };
}

export default connect(mapStateToProps)(Tweets);
