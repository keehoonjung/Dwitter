import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PostTweet from "../components/post_tweet/post_tweet";
import { postTweet } from "../module/tweets";

const PostTweetContainer = (props) => {
  const { data } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const onPostTweet = (text, name, username) => {
    console.log(text, name, username);
    dispatch(postTweet({ text, name, username }));
  };

  return <PostTweet onPostTweet={onPostTweet} user={data} />;
};

export default PostTweetContainer;
