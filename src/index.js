//A-V} And finally index renders our app to the DOM.
import React from "react";
import ReactDOM from "react-dom";

import TodoApp from "./TodoApp";

//C-I] Make the store available to our app.
//To do this, we wrap our app with the <Provider />
//API provided by React Redux.

import { Provider } from "react-redux";
import store from "./redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
);
