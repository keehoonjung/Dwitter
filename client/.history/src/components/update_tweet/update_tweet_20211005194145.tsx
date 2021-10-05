import React, { useRef } from "react";
import styles from "./update_tweet.module.css";

const UpdateTweet = (props: any) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <input className={styles.input} type="text" />
      <div className={styles.button_container}>
        <button className={styles.updateBtn}>Update</button>
        <button className={styles.cancelBtn}>Cancel</button>
      </div>
    </>
  );
};

export default UpdateTweet;
