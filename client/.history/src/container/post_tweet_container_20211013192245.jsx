import React from "react";
import { useDispatch } from "react-redux";
import PostTweet from "../components/post_tweet/post_tweet";
import { postTweet } from "../module/tweets";

const PostTweetContainer = (props) => {
  const dispatch = useDispatch();
  const onPostTweet = (text, name, username) => {
    dispatch(postTweet(text, name, username));
  };

  return <PostTweet onPostTweet={onPostTweet} />;
};

export default PostTweetContainer;
