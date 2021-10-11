import React from "react";
import PostTweetContainer from "../../container/post_tweet_container";
import TweetsContainer from "../../container/tweets_container";
import PostTweet from "../post_tweet/post_tweet";
import Tweets from "../tweets/tweets";
import styles from "./main.module.css";

const Main = (props: any) => {
  return (
    <>
      <PostTweetContainer />
      <TweetsContainer />
    </>
  );
};

export default Main;
