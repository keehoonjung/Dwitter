import React, { useRef } from "react";
import styles from "./update_tweet.module.css";

type UpdateTweetProps = {
  offUpdatePannel(): void;
  onUpdate(text: string): void;
};

const UpdateTweet = ({ onUpdate, offUpdatePannel }: UpdateTweetProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onCancle = () => {
    offUpdatePannel();
  };
  const onClick = () => {
    const text = inputRef.current!.value;
    onUpdate(text);
    offUpdatePannel();
    inputRef.current!.value = "";
  };

  return (
    <>
      <input ref={inputRef} className={styles.input} type="text" />
      <div className={styles.button_container}>
        <button className={styles.updateBtn} onClick={onClick}>
          Update
        </button>
        <button className={styles.cancelBtn} onClick={onCancle}>
          Cancel
        </button>
      </div>
    </>
  );
};

export default UpdateTweet;
