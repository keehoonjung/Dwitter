import React, { useRef } from "react";
import stlyes from "./post_tweet.module.css";

const PostTweet = ({ onPostTweet, user }) => {
  const inputRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const text = inputRef.current.value;
    onPostTweet(text, user.name, user.username);
    inputRef.current.value = "";
  };

  return (
    <form className={stlyes.container} onSubmit={onSubmit}>
      <input
        ref={inputRef}
        className={stlyes.input}
        type="text"
        placeholder="Edit your tweet"
      />
      <button className={stlyes.button}>Post</button>
    </form>
  );
};

export default PostTweet;
