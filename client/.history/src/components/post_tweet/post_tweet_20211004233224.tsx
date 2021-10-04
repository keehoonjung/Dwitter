import React, { useRef } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import stlyes from "./post_tweet.module.css";

type PostTweetProps = {
  dispatch: Dispatch;
};

const PostTweet = ({ dispatch }: PostTweetProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const text = inputRef.current!.value;
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

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(PostTweet);

// function mapDispatchToProps(dispatch: Dispatch) {
//   return {
//     dispatch,
//   };
// }

// export default connect(null, mapDispatchToProps)(TodoItem);
