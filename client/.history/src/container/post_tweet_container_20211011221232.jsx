import React from "react";
import { useDispatch } from "react-redux";
import PostTweet from "../components/post_tweet/post_tweet";
import { getTweets, postTweet } from "../module/tweets";

const PostTweetContainer = (props) => {
  const dispatch = useDispatch();
  const onPostTweet = (text, name, username) => {
    dispatch(postTweet(text, name, username));
    dispatch(getTweets());
  };

  return <PostTweet onPostTweet={onPostTweet} />;
};

export default PostTweetContainer;
