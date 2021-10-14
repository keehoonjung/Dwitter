import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tweets from "../components/tweets/tweets";
import { getTweet } from "../module/tweets";

const UserTweetsContainer = ({ id }) => {
  const { loading, data, error } = useSelector((state) => state.tweets.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTweet(id));
  }, [dispatch]);

  if (loading) return <div>로딩중입니다.</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;
  return <Tweets tweets={data} />;
};

export default UserTweetsContainer;
