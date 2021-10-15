import { BrowserRouter, Switch, Route } from "react-router-dom";
import styles from "./app.module.css";
import HeaderContainer from "./container/header_container";
import LoginContainer from "./container/login_container";
import PostTweetContainer from "./container/post_tweet_container";
import TweetsContainer from "./container/tweets_container";
import UserPage from "./page/user_page/user_page";

function App() {
  return (
    <BrowserRouter>
      <section className={styles.container}>
        <HeaderContainer />
        <Switch>
          <Route path={["/", ".home"]} exact>
            <section className={styles.container}>
              <HeaderContainer />
              <section className={styles.main_container}>
                <LoginContainer />
              </section>
            </section>
          </Route>
          <Route path={["/main"]} exact>
            <section className={styles.container}>
              <HeaderContainer />
              <PostTweetContainer />
              <section className={styles.main_container}>
                <TweetsContainer />
              </section>
            </section>
          </Route>
          <Route path={["/main/:id"]} component={UserPage} />
        </Switch>
      </section>
    </BrowserRouter>
  );
}

export default App;
