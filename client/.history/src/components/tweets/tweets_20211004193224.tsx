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
      <Tweet tweet={data[0]} />
      {data.forEach((tweet) => {
        console.log(tweet);
        return <Tweet tweet={tweet} />;
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

// function mapStateToProps(state: dataInitalState) {
//   return {
//     items: state.data.items,
//     column: state.data.columns["column1"],
//   };
// }

// export default connect(mapStateToProps)(Item);
