import React, { useRef } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { postTweet } from "../../service/store";
import stlyes from "./post_tweet.module.css";

// type PostTweetProps = {
//   dispatch: Dispatch;
// };

const PostTweet = ({ onPostTweet }) => {
  const inputRef = useRef < HTMLInputElement > null;
  const onSubmit = (event) => {
    event.preventDefault();
    const text = inputRef.current.value;
    const tweet = {
      id: Date.now().toString(),
      createdAt: Date.now(),
      text,
      name: "JK",
      useranme: "JK",
      url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1632646994/Motion/moxvxyhmceuumjye3lth.jpg",
    };
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
