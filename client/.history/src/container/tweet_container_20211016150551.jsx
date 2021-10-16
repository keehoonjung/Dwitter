import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTweet, updateTweet } from "../module/tweets";

const TweetContainer = ({ item, index }) => {
  const { data } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const onDeleteTweet = (id) => {
    dispatch(deleteTweet(id));
  };
  const onUpdateTweet = (id, text) => {
    dispatch(updateTweet({ id, text }));
  };
};

export default TweetContainer;
