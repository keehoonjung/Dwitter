import React from "react";
import { connect } from "react-redux";
import { TweetsState } from "../../service/store";
import Tweet from "../tweet/tweet";
import styles from "./tweets.module.css";

type TweetsProps = {
  tweets: TweetsState;
};

const Tweets = ({ tweets }: TweetsProps) => {
  return (
    <ul className={styles.container}>
      {tweets.forEach((tweet) => {
        <Tweet tweet={tweet} />;
      })}
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
