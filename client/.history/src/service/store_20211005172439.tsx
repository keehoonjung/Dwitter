import { configureStore, createSlice } from "@reduxjs/toolkit";

export type TweetType = {
  id: string;
  createdAt: Date | null;
  text: string;
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
    useranme: "SONG",
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
      tweet.createdAt = new Date();
      state.data.unshift(tweet);
    },
    deleteTweet: (state: TweetsState, action: deleteTweetAction) => {
      state.data.splice(action.payload, 1);
    },
    getTweets: (state: TweetsState, action: getTweetAction) => {
      state.data = state.data.filter((data) => {
        return data.useranme === action.payload;
      });
    },
  },
});

const dataStore = configureStore({ reducer: tweetsSlice.reducer });

export const { postTweet, deleteTweet, getTweets } = tweetsSlice.actions;

export default dataStore;
