import React, { useRef } from "react";
import stlyes from "./post_tweet.module.css";

const PostTweet = (props: any) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className={stlyes.container}>
      <input
        className={stlyes.input}
        type="text"
        placeholder="Edit your tweet"
      />
      <button className={stlyes.button}>Post</button>
    </form>
  );
};

export default PostTweet;
