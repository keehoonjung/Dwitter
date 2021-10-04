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

const tweetsSlice = createSlice({
  name: "Tweets",
  initialState: [
    {
      id: 1,
      text: "Hello",
      createdAt: Date.now,
      name: "JK",
      useranme: "JK",
      url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
    },
  ],
  reducers: {},
});

const dataStore = configureStore({ reducer: tweetsSlice.reducer });

export default dataStore;
