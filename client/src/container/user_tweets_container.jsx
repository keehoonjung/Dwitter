import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Tweets from "../components/tweets/tweets";
import { getTweets } from "../module/tweets";

const UserTweetsContainer = ({ username }) => {
  const { data, error } = useSelector((state) => state.tweets.posts);
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getTweets(username));
  }, [dispatch, username]);

  useEffect(() => {
    if (!token) {
      history.push("/");
    }
  }, [token, history]);

  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;
  return <Tweets tweets={data} />;
};

export default UserTweetsContainer;
