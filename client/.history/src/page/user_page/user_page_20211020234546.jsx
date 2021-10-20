import React from "react";
import styles from "./user_page.module.css";
import UserTweetsContainer from "../../container/user_tweets_container";

const UserPage = ({ match }) => {
  const { username } = match.params;

  return (
    <section className={styles.main_container}>
      <UserTweetsContainer username={username} />
    </section>
  );
};

export default UserPage;
