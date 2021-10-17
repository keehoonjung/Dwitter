import {
  tweetsPromiseThunk,
  tweetPromiseThunkById,
  handleAsyncDeleteTweetActions,
  handleAsyncGetTweetsActions,
  handleAsyncPostTweetActions,
  handleAsyncUpdateTweetActions,
  tweetsReducerUtils,
} from "../util/tweets_async_utils";

import HttpClient from "../network/http";
import TweetService from "../api/tweets";

const baseUrl = "http://localhost:8080";
const httpClient = new HttpClient(baseUrl);
const tweetService = new TweetService(httpClient);

const GET_TWEETS = "GET_TWEETS";
const GET_TWEETS_SUCCESS = "GET_TWEETS_SUCCESS";
const GET_TWEETS_ERROR = "GET_TWEETS_ERROR";

const GET_TWEET = "GET_TWEET";
const GET_TWEET_SUCCESS = "GET_TWEET_SUCCESS";
const GET_TWEET_ERROR = "GET_TWEET_ERROR";

const POST_TWEET = "POST_TWEET";
const POST_TWEET_SUCCESS = "POST_TWEET_SUCCESS";
const POST_TWEET_ERROR = "POST_TWEET_ERROR";

const DELETE_TWEET = "DELETE_TWEET";
const DELETE_TWEET_SUCCESS = "DELETE_TWEET_SUCCESS";
const DELETE_TWEET_ERROR = "DELETE_TWEET_ERROR";

const UPDATE_TWEET = "UPDATE_TWEET";
const UPDATE_TWEET_SUCCESS = "UPDATE_TWEET_SUCCESS";
const UPDATE_TWEET_ERROR = "UPDATE_TWEET_ERROR";

export const getTweets = tweetsPromiseThunk(GET_TWEETS, tweetService.getTweets);
export const getTweet = tweetPromiseThunkById(
  GET_TWEET,
  tweetService.getTweetsById
);
export const postTweet = tweetsPromiseThunk(POST_TWEET, tweetService.postTweet);
export const deleteTweet = tweetPromiseThunkById(
  DELETE_TWEET,
  tweetService.deleteTweet
);
export const updateTweet = tweetPromiseThunkById(
  UPDATE_TWEET,
  tweetService.updateTweet,
  (param) => param.id
);

const initialState = {
  posts: tweetsReducerUtils.initial(),
  post: tweetsReducerUtils.initial(),
};

export default function tweets(state = initialState, action) {
  switch (action.type) {
    case GET_TWEETS:
    case GET_TWEETS_SUCCESS:
    case GET_TWEETS_ERROR:
      return handleAsyncGetTweetsActions(GET_TWEETS, "posts")(state, action);
    case GET_TWEET:
    case GET_TWEET_SUCCESS:
    case GET_TWEET_ERROR:
      return handleAsyncGetTweetsActions(GET_TWEET, "posts")(state, action);
    case POST_TWEET:
    case POST_TWEET_SUCCESS:
    case POST_TWEET_ERROR:
      return handleAsyncPostTweetActions(POST_TWEET, "posts")(state, action);
    case DELETE_TWEET:
    case DELETE_TWEET_SUCCESS:
    case DELETE_TWEET_ERROR:
      return handleAsyncDeleteTweetActions(DELETE_TWEET, "delete")(
        state,
        action
      );
    case UPDATE_TWEET:
    case UPDATE_TWEET_SUCCESS:
    case UPDATE_TWEET_ERROR:
      return handleAsyncUpdateTweetActions(UPDATE_TWEET, "update")(
        state,
        action
      );
    default:
      return state;
  }
}
