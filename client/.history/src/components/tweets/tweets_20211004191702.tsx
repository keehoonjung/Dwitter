import React from "react";
import { connect } from "react-redux";
import { TweetsState } from "../../service/store";
import Tweet from "../tweet/tweet";
import styles from "./tweets.module.css";

type TweetProps = {
  tweets: TweetsState;
};

const Tweets = ({ tweets }: TweetProps) => {
  return (
    <ul className={styles.container}>
      <Tweet />
      <Tweet />
      <Tweet />
    </ul>
  );
};

function mapStateToProps(state: TweetsState) {
  return {
    tweets: state,
  };
}

export default connect(mapStateToProps)(Tweets);

// function mapStateToProps(state: dataInitalState) {
//   return {
//     items: state.data.items,
//     column: state.data.columns["column1"],
//   };
// }

// export default connect(mapStateToProps)(Item);
