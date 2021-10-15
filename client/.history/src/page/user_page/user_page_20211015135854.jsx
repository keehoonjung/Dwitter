import React from "react";
import styles from "./user_page.module.css";
import Header from "../../components/header/header";
import UserTweetsContainer from "../../container/user_tweets_container";
import HeaderContainer from "../../container/header_container";

const UserPage = ({ match }) => {
  const { id } = match.params;

  return (
    <section className={styles.container}>
      <HeaderContainer />
      <section className={styles.main_container}>
        <UserTweetsContainer id={id} />
      </section>
    </section>
  );
};

export default UserPage;
