import React, { useRef } from "react";
import stlyes from "./post_tweet.module.css";

const PostTweet = (props: any) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(inputRef.current!.value);
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
