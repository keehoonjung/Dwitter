import React from "react";
import { useDispatch } from "react-redux";
import PostTweet from "../components/post_tweet/post_tweet";

const PostTweetContainer = (props) => {
  const dispatch = useDispatch();
  const onPostTweet = (name, username, text) =>
    dispatch(postTweet(name, username, text));

  return <PostTweet />;
};

export default PostTweetContainer;
