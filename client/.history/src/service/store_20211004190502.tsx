import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({
  name: "Tweets",
  initialState: [
    {
      id: 1,
      text: "Hello",
      createdat: Date.now(),
      name: string,
      username: string,
      url: string,
    },
  ],
  reducers: {},
});
