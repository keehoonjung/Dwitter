import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Tweets from "../components/tweets/tweets";
import TokenStorage from "../db/token";
import { getTweets, tweetService } from "../module/tweets";
const tokenStorage = new TokenStorage();
const initialToken = tokenStorage.getToken();

const TweetsContainer = (props) => {
  const { loading, data, error } = useSelector((state) => state.tweets.posts);
  const { token = initialToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getTweets());
  }, [dispatch]);

  useEffect(() => {
    const createStopSync = tweetService.createOnSync((tweet) =>
      dispatch({ type: "ONSYNC_CREATE_TWEETS", payload: tweet })
    );
    const deleteStopSync = tweetService.deleteOnSync((id) => {
      dispatch({ type: "ONSYNC_DELETE_TWEETS", payload: id });
    });
    const updateStopSync = tweetService.updateOnSync((tweet) => {
      dispatch({ type: "ONSYNC_UPDATE_TWEETS", payload: tweet });
    });
    return () => {
      createStopSync();
      deleteStopSync();
      updateStopSync();
    };
  }, [dispatch]);

  useEffect(() => {
    if (!token) {
      history.push("/");
    }
  }, [token, history]);

  if (loading) return <div>로딩중입니다.</div>;
  if (error) {
    console.log(error);
    return <div>에러가 발생했습니다</div>;
  }
  if (!data) return null;
  return <Tweets tweets={data} />;
};

export default TweetsContainer;
