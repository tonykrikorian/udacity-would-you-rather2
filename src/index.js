import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import "bootstrap/dist/css/bootstrap.css";
import middleware from "./middleware";
import reducer from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
