import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; //provider is a react component that allows us to pass the store to all of our components
import { createStore, applyMiddleware, compose } from "redux";
//applyMiddleware allows us to use middleware
//createstore is a function that allows us to create a store
//compose allows us to use multiple middleware
import thunk from "redux-thunk"; //allows us to use async actions
import reducers from "./reducers";

import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
