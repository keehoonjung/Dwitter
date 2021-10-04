import { configureStore, createSlice } from "@reduxjs/toolkit";

export type TweetType = {
  id: number;
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
  data: { [tweetId: string | number]: TweetType };
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

const tweetData = {
  "1": {
    id: "1",
    text: "Hello",
    createdAt: Date.now(),
    name: "JK",
    useranme: "JK",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
  "2": {
    id: "2",
    text: "Hello2",
    createdAt: Date.now(),
    name: "song",
    useranme: "song",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
  "3": {
    id: "3",
    text: "hello",
    createdAt: Date.now(),
    name: "JK",
    username: "JKK",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
};

const tweetsSlice = createSlice({
  name: "Tweets",
  initialState: {
    user: userData,
    data: tweetData,
  },
  reducers: {
    postTweet: (state, action: postTweetAction) => {
      const tweet = action.payload;
      state.data[tweet.id] = tweet;
    },
  },
});

const dataStore = configureStore({ reducer: tweetsSlice.reducer });

// export const { postTweet } = tweetsSlice.actions;

export default dataStore;

// "1": {
//   id: "1",
//   text: "Hello",
//   createdAt: Date.now(),
//   name: "JK",
//   useranme: "JK",
//   url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
// },
// "2": {
//   id: "2",
//   text: "Hello2",
//   createdAt: Date.now(),
//   name: "song",
//   useranme: "song",
//   url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
// },
