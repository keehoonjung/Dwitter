import * as tweetsAPI from "../api/tweets";
import {
  createPromiseThunk,
  createPromiseThunkById,
  handleAsyncActions,
  handleAsyncDeleteActions,
  handleAsyncPostActions,
  reducerUtils,
} from "../util/async_utils";

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

export const getTweets = createPromiseThunk(GET_TWEETS, tweetsAPI.getTweets);
export const getTweet = createPromiseThunkById(
  GET_TWEET,
  tweetsAPI.getTweetById
);
export const postTweet = createPromiseThunk(POST_TWEET, tweetsAPI.postTweet);
export const deleteTweet = createPromiseThunkById(
  DELETE_TWEET,
  tweetsAPI.deleteTweet
);
export const updateTweet = createPromiseThunkById(
  UPDATE_TWEET,
  tweetsAPI.updateTweet,
  (param) => param.id
);

const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

export default function tweets(state = initialState, action) {
  switch (action.type) {
    case GET_TWEETS:
    case GET_TWEETS_SUCCESS:
    case GET_TWEETS_ERROR:
      return handleAsyncActions(GET_TWEETS, "posts")(state, action);
    case GET_TWEET:
    case GET_TWEET_SUCCESS:
    case GET_TWEET_ERROR:
      return handleAsyncActions(GET_TWEET, "post")(state, action);
    case POST_TWEET:
    case POST_TWEET_SUCCESS:
    case POST_TWEET_ERROR:
      return handleAsyncPostActions(POST_TWEET, "posts")(state, action);
    case DELETE_TWEET:
    case DELETE_TWEET_SUCCESS:
    case DELETE_TWEET_ERROR:
      return handleAsyncDeleteActions(DELETE_TWEET, "delete")(state, action);
    case UPDATE_TWEET:
      return {
        ...state,
        posts: {
          ...state.posts,
          data: state.posts.data
            ? state.posts.data.map((tweet) => {
                {
                  action.payload;
                }
                console.log(tweet.id);
                if (tweet.id !== action.meta) {
                  return tweet;
                }
                return action.payload;
              })
            : null,
        },
      };
    default:
      return state;
  }
}
