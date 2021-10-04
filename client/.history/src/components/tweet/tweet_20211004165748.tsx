import React from "react";
import styles from "./tweet.module.css";

const Tweet = (props: any) => {
  return (
    <div className={styles.container}>
      <img src="./images/logo.png" alt="thumbnail" />
      <div className={styles.description}>
        <div className={styles.user}>
          <h3>Name</h3>
          <p>@ID</p>
          <p>created At</p>
        </div>
        <p className={styles.text}>Text</p>
      </div>
      <div>
        <button>
          <i className="fas fa-times"></i>
        </button>
        <button>
          <i class="fas fa-pencil-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Tweet;
