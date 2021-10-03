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
          <section>
            <Header />
            <Login />
          </section>
        </Route>
        <Route path={["/main"]}>
          <Header />
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
