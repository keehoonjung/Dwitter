import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TweetContainer = ({ item, index }) => {
  const { data } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
};

export default TweetContainer;
