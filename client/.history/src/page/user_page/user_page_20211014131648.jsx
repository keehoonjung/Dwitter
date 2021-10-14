import React from "react";
import styles from "./user_page.module.css";
import Header from "../../components/header/header";
import PostTweetContainer from "../../container/post_tweet_container";
import UserTweetsContainer from "../../container/user_tweets_container";

const UserPage = ({ match }) => {
  const { id } = match.params;

  return (
    <section className={styles.container}>
      <Header login={true} />
      <section className={styles.main_container}>
        <UserTweetsContainer id={id} />
      </section>
    </section>
  );
};

export default UserPage;
