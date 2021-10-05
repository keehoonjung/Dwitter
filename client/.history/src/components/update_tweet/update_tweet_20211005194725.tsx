import React, { useRef } from "react";
import styles from "./update_tweet.module.css";

type UpdateTweetProps = {
  offUpdatePannel(): void;
};

const UpdateTweet = ({ offUpdatePannel }: UpdateTweetProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onCancle = () => {
    offUpdatePannel();
  };
  const onUpdate = () => {};

  return (
    <>
      <input className={styles.input} type="text" />
      <div className={styles.button_container}>
        <button className={styles.updateBtn} onClick={onCancle}>
          Update
        </button>
        <button className={styles.cancelBtn}>Cancel</button>
      </div>
    </>
  );
};

export default UpdateTweet;