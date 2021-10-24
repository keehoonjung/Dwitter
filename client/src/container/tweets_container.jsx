import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Tweets from "../components/tweets/tweets";
import TokenStorage from "../db/token";
import { getTweets, onSyncTweets, tweetService } from "../module/tweets";
const tokenStorage = new TokenStorage();
const initialToken = tokenStorage.getToken();

const TweetsContainer = (props) => {
  const { loading, data, error } = useSelector((state) => state.tweets.posts);
  const { token = initialToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getTweets());
    const stopSync = tweetService.onSync((tweet) =>
      dispatch({ type: "ONSYNC_TWEETS", payload: tweet })
    );
    return () => stopSync();
  }, [dispatch]);

  useEffect(() => {
    if (!token) {
      history.push("/");
    }
  }, [token, history]);

  if (loading) return <div>로딩중입니다.</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;
  return <Tweets tweets={data} />;
};

export default TweetsContainer;
