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

mapStateToProps(state: any){
  return{
    tweets: state
  }
}

export default Tweets;

function mapStateToProps(state: dataInitalState) {
  return {
    items: state.data.items,
    column: state.data.columns["column1"],
  };
}

export default connect(mapStateToProps)(Item);