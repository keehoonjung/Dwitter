import { configureStore, createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

export type TweetType = {
  id: string;
  text: string;
  createdAt: Date;
  name: string;
  useranme: string;
  url: string;
};

export type UserType = {
  name: string;
  useranme: string;
  url: string;
};

export type TweetsState = {
  user: { [username: string]: UserType };
  data: TweetType[];
};

type postTweetAction = {
  type: string;
  payload: TweetType;
};

type deleteTweetAction = {
  type: string;
  payload: number;
};

type getTweetAction = {
  type: string;
  payload: string;
};

const userData = {
  JK: {
    name: "JK",
    useranme: "JK",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
  song: {
    name: "songsong",
    useranme: "song",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
};

const tweetData = [
  {
    id: "12345",
    text: "Hello",
    createdAt: new Date(),
    name: "JK",
    useranme: "JK",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
];

const tweetsSlice = createSlice({
  name: "Tweets",
  initialState: {
    user: userData,
    data: tweetData,
  },
  reducers: {
    postTweet: (state: TweetsState, action: postTweetAction) => {
      const tweet = action.payload;
      state.data.push(tweet);
    },
    deleteTweet: (state: TweetsState, action: deleteTweetAction) => {
      delete state.data[action.payload];
    },
    getTweets: (state: TweetsState, action: getTweetAction) => {
      const newData = { ...state.data };
      const keys = Object.keys(newData).filter((key) => {
        return newData[key].useranme === action.payload;
      });
      const newState: { [tweetId: string]: TweetType } = {};
      keys.forEach((key) => {
        newState[key] = newData[key];
      });
      Object.keys(state.data).forEach((key) => {
        state.data[key] = newState[key];
      });
    },
  },
});

const dataStore = configureStore({ reducer: tweetsSlice.reducer });

export const { postTweet, deleteTweet, getTweets } = tweetsSlice.actions;

export default dataStore;
