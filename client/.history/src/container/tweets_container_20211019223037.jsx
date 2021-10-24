import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Tweets from "../components/tweets/tweets";
import TokenStorage from "../db/token";
import { getTweets } from "../module/tweets";

const TweetsContainer = (props) => {
  const { loading, data, error } = useSelector((state) => state.tweets.posts);
  const { token } = useSelector((state) => state.user.user);
  const tokenStorage = new TokenStorage();
  const newToken = tokenStorage.getToken();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getTweets());
  }, [dispatch]);

  useEffect(() => {
    if (!newToken) {
      history.push("/");
    }
  }, [newToken, history]);

  if (loading) return <div>로딩중입니다.</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;
  return <Tweets tweets={data} />;
};

export default TweetsContainer;