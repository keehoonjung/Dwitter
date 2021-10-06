import { configureStore, createSlice } from "@reduxjs/toolkit";

export type TweetType = {
  id: string;
  createdAt: number;
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

type updateTweetAction = {
  type: string;
  payload: { index: number; text: string };
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

// const tweetData = fetch("http://localhost:8080/tweets") //
//   .then((response) => {
//     const result = response.json();
//     return result;
//   })
//   .then((result: Promise<any>) => {
//     const data = result;
//   });

// [
//   {
//     id: "12345",
//     text: "Hello",
//     createdAt: Date.now(),
//     name: "JK",
//     useranme: "SONG",
//     url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
//   },
// ];

const tweetsSlice = createSlice({
  name: "Tweets",
  initialState: {
    user: userData,
    data: [],
  },
  reducers: {
    postTweet: (state: TweetsState, action: postTweetAction) => {
      const tweet = action.payload;
      state.data.unshift(tweet);
    },
    deleteTweet: (state: TweetsState, action: deleteTweetAction) => {
      state.data.splice(action.payload, 1);
    },
    getTweets: (state: TweetsState, action: getTweetAction) => {
      const tweetData = fetch(`http://localhost:8080/tweets/${action.payload}`) //
        .then((response) => {
          const result = response.json();
          return result;
        })
        .then((result: Promise<TweetType[]>) => {
          const data = result;
          state.data = data;
        });
    },
    updateTweets: (state: TweetsState, action: updateTweetAction) => {
      state.data[action.payload.index].text = action.payload.text;
    },
  },
});

const dataStore = configureStore({ reducer: tweetsSlice.reducer });

export const { postTweet, deleteTweet, getTweets, updateTweets } =
  tweetsSlice.actions;

export default dataStore;
