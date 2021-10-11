import React from "react";
import TweetsContainer from "../../container/tweets_container";
import PostTweet from "../post_tweet/post_tweet";
import Tweets from "../tweets/tweets";
import styles from "./main.module.css";

const Main = (props: any) => {
  return (
    <>
      <PostTweet />
      <TweetsContainer/>
    </>
  );
};

export default Main;
