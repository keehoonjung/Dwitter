import React, { useRef } from "react";
import stlyes from "./post_tweet.module.css";

// type PostTweetProps = {
//   dispatch: Dispatch;
// };

const PostTweet = ({ onPostTweet, user }) => {
  const inputRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const text = inputRef.current.value;
    console.log(text, user.name, user.username);
    const tweet = {
      text,
      name: user.name,
      username: user.username,
    };
    onPostTweet(tweet.text, tweet.name, tweet.username);
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
