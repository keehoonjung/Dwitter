import { configureStore, createSlice } from "@reduxjs/toolkit";

export type TweetType = {
  id: number;
  text: string;
  createat: Date;
  name: string;
  useranme: string;
  url: string;
};
export type TweetsState = Tweet[];

const tweetsSlice = createSlice({
  name: "Tweets",
  initialState: [
    {
      id: 1,
      text: "Hello",
      createdat: Date.now(),
      name: "JK",
      username: "jk0120",
      url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
    },
  ],
  reducers: {},
});

const dataStore = configureStore({ reducer: tweetsSlice.reducer });

export default dataStore;
