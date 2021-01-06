//B-II) REDUX: ACTION CREATORS

import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 0;

//addTodo creates the action to add todos.
//It takes a single string variable content
//and returns an ADD_TODO action
//with payload containing
//a self-incremented id and content

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});


//toggleTodo creates the action to toggle todos.
//It takes a single number variable id
//and returns a TOGGLE_TODO action
//with payload containing id only

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});


//setFilter creates the action to set the app’s active filter.
//It takes a single string variable filter
//and returns a SET_FILTER action
//with payload containing the filter itself

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: { filter }
})
