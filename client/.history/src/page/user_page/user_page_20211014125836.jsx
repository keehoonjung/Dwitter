import React from "react";
import styles from "user_page.module.css";
import Header from "../../components/header/header";
import PostTweetContainer from "../../container/post_tweet_container";
import TweetsContainer from "../../container/tweets_container";

const UserPage = ({ match }) => {
  const { id } = match.params;
  console.log(id);

  return (
    <section className={styles.container}>
      <Header login={true} />
      <PostTweetContainer />
      <section className={styles.main_container}>
        <TweetsContainer />
      </section>
    </section>
  );
};

export default UserPage;
