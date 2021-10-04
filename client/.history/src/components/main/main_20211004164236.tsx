import React from "react";
import PostTweet from "../post_tweet/post_tweet";
import Tweets from "../tweets/tweets";
import styles from "./main.module.css";

const Main = (props: any) => {
  return (
    <>
      <PostTweet />
      <Tweets />
    </>
  );
};

export default Main;
