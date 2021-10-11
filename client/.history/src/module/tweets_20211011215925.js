import * as tweetsAPI from "../api/tweets";
import {
  createPromiseThunk,
  handleAsyncActions,
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
const UPDATE_TWEET = "UPDATE_TWEET";

export const getTweets = createPromiseThunk(GET_TWEETS, tweetsAPI.getTweets);
export const getTweet = createPromiseThunk(GET_TWEET, tweetsAPI.getTweetById);

export const postTweet = (text, name, username) => async (dipatch) => {
  dipatch({ type: POST_TWEET });
  try {
    const payload = await tweetsAPI.postTweet(text, name, username);
    console.log(payload);
    dipatch({ type: POST_TWEET_SUCCESS, payload });
  } catch (e) {
    dipatch({ type: POST_TWEET_ERROR, payload: e });
  }
};

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
      return {
        ...state,
        posts: {
          ...state.posts,
        },
      };
    default:
      return state;
  }
}
