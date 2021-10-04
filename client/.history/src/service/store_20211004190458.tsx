import { createSlice } from "@reduxjs/toolkit";
import { networkInterfaces } from "os";

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
