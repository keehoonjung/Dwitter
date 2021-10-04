import React from "react";
import stlyes from "./post_tweet.module.css";

const PostTweet = (props: any) => {
  return (
    <form className={stlyes.container}>
      <input type="text" />
      <button>Post</button>
    </form>
  );
};

export default PostTweet;
