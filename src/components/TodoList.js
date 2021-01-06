//A-II}REACT Component

//TodoList is the component that renders the list of todos:
//It renders the filtered list of todos when one of the VisibilityFilters
//is selected.

import React from "react";
import Todo from "./Todo";

//D-II} Let’s work on <TodoList /> Now:
import { connect } from "react-redux";
//import { getTodos } from "../redux/selectors";


//D-V} getTodosByVisibilityFilter filters the todos
//according to the visibility filter
import { getTodosByVisibilityFilter } from "../redux/selectors";
import { VISIBILITY_FILTERS } from "../constants";



//A-II} ... UI component implementation
const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length ?
      todos.map((todo, index) => {
        return <Todo key={`todo-${todo.id}`} todo={todo} />
      }) : "No todos, yay!"}
  </ul>
);

//A-II}REACT Component
// export default TodoList;


//D-II} Let’s work on <TodoList /> Now:
//Our <Todo /> component takes the todo item as props.
//We have this information from the 'byIds' field of the todos.
//However, we also need the information from the 'allIds' field
//of the store indicating which todos and in what order they should be rendered.
//Our mapStateToProps function may look like this:

// Luckily we have a "selector" that does exactly this.
//We may simply import the selector and use it here.
// similar to:
/* const mapStateToProps = state => {
*  const { byIds, allIds } = state.todos || {};
*  const todos = allIds && allIds.length
*    ? allIds.map(id => (byIds ? { ...byIds[id], id} : null ))
*    : null;
*  return { todos };
};
*/

//D-II} Let’s work on <TodoList /> Now:
// export default connect(mapStateToProps)(TodoList);

// D-II} using redux/selectors.js
//export default connect(state => ({ todos: getTodos(state) }))(TodoList);

//D-V} getTodosByVisibilityFilter filters the todos
//according to the visibility filter
const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
  //   const allTodos = getTodos(state);
  //   return {
  //     todos:
  //       visibilityFilter === VISIBILITY_FILTERS.ALL
  //         ? allTodos
  //         : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
  //           ? allTodos.filter(todo => todo.completed)
  //           : allTodos.filter(todo => !todo.completed)
  //   };
};

export default connect(mapStateToProps)(TodoList);
