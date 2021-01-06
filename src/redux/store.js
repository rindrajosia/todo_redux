//B-I] REDUX: STORE

//todos: A normalized reducer of todos.
//It contains a byIds map of all todos
//and a allIds that contains the list of all ids.
//visibilityFilters: A simple string all, completed, or incomplete.

import { createStore } from "redux";
import rootReducer from "./reducers";

import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(rootReducer, composeWithDevTools());
