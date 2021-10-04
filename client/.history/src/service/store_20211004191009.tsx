import { createSlice } from "@reduxjs/toolkit";

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

export default tweetsSlice;
