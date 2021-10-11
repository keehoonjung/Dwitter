import React from "react";
import { useDispatch } from "react-redux";
import PostTweet from "../components/post_tweet/post_tweet";
import { postTweet } from "../module/tweets";

const PostTweetContainer = (props) => {
  const dispatch = useDispatch();
  const onPostTweet = (name, username, text) =>
    dispatch(postTweet(name, username, text));

  return <PostTweet onPostTweet={onPostTweet} />;
};

export default PostTweetContainer;
