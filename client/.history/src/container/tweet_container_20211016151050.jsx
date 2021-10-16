import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Tweet from "../components/tweet/tweet";
import { deleteTweet, updateTweet } from "../module/tweets";

const TweetContainer = ({ item }) => {
  const { data } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const id = item.id;
  const onDeleteTweet = () => {
    dispatch(deleteTweet(id));
  };
  const onUpdateTweet = (text) => {
    dispatch(updateTweet({ id, text }));
  };

  return (
    <Tweet
      item={item}
      onDeleteTweet={onDeleteTweet}
      onUpdateTweet={onUpdateTweet}
    />
  );
};

export default TweetContainer;
