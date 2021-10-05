import React from "react";
import styles from "./update_tweet.module.css";

const UpdateTweet = (props: any) => {
  return (
    <>
      <input className={styles.input} type="text" />
      <div>
        <button className={styles.updateBtn}>Update</button>
        <button className={styles.cancelBtn}>Cancel</button>
      </div>
    </>
  );
};

export default UpdateTweet;
