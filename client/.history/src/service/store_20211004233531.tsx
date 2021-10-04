import { configureStore, createSlice } from "@reduxjs/toolkit";

export type TweetType = {
  id: string;
  text: string;
  createdAt: number;
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
  data: { [tweetId: string]: TweetType };
};

type postTweetAction = {
  type: string;
  payload: TweetType;
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

const tweetData = {};

const tweetsSlice = createSlice({
  name: "Tweets",
  initialState: {
    user: userData,
    data: tweetData,
  },
  reducers: {
    postTweet: (state: TweetsState, action: postTweetAction) => {
      const tweet = action.payload;
      state.data[tweet.id] = tweet;
    },
  },
});

const dataStore = configureStore({ reducer: tweetsSlice.reducer });

export const { postTweet } = tweetsSlice.actions;

export default dataStore;
