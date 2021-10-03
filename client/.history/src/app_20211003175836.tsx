import { BrowserRouter } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["./", ".home"]} exact></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
