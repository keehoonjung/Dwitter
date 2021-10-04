import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import { Provider } from "react-redux";
import dataStore from "./service/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={dataStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
