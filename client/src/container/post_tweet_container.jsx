import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PostTweet from "../components/post_tweet/post_tweet";
import { postTweet } from "../module/tweets";

const PostTweetContainer = (props) => {
  const { data } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onPostTweet = (text) => {
    dispatch(postTweet({ text }));
  };

  return <PostTweet onPostTweet={onPostTweet} user={data} />;
};

export default PostTweetContainer;
