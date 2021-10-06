import { BrowserRouter, Switch, Route } from "react-router-dom";
import styles from "./app.module.css";
import Header from "./components/header/header";
import Login from "./components/login/login";
import Main from "./components/main/main";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/", ".home"]} exact>
          <section className={styles.container}>
            <Header login={false} />
            <section className={styles.main_container}>
              <Login />
            </section>
          </section>
        </Route>
        <Route path={["/main"]}>
          <section className={styles.container}>
            <Header login={true} />
            <section className={styles.main_container}>
              <Main />
            </section>
          </section>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
