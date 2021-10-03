import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./app.css";
import Header from "./components/header/header";
import Login from "./components/login/login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["./", ".home"]} exact>
          <Header />
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
