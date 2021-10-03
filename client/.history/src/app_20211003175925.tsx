import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./app.css";
import Login from "./components/login/login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["./", ".home"]} exact>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
