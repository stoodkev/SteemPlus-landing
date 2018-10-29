import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import WebFont from "webfontloader";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

WebFont.load({
  google: {
    families: ["Satisfy", "cursive"]
  }
});

const navReducer = (
  state = {
    page: "main"
  },
  action
) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "SET_PAGE":
      state = {
        ...state,
        page: action.payload
      };
      break;
    default:
      break;
  }
  return state;
};

const store = createStore(
  combineReducers({ nav: navReducer }),
  {},
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
