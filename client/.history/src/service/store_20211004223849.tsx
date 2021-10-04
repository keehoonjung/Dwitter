import { configureStore, createSlice } from "@reduxjs/toolkit";

export type TweetType = {
  id: number;
  text: string;
  createdAt: number;
  name: string;
  useranme: string;
  url: string;
};
export type TweetsState = TweetType[];

type postTweetAction = {
  type: string;
  payload: TweetType;
};

const data = [
  {
    id: 1,
    text: "Hello",
    createdAt: Date.now(),
    name: "JK",
    useranme: "JK",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
  {
    id: 2,
    text: "Hello2",
    createdAt: Date.now(),
    name: "song",
    useranme: "song",
    url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
  },
];

const tweetsSlice = createSlice({
  name: "Tweets",
  initialState: data,
  reducers: {
    postTweet: (state: TweetsState, action: postTweetAction) => {
      state.push(action.payload);
    },
  },
});

const dataStore = configureStore({ reducer: tweetsSlice.reducer });

export default dataStore;
