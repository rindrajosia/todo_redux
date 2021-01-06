////A-III}REACT Component

//Todo is the component that renders a single todo item:
//It renders the todo content, and shows that a todo
//is completed by crossing it out.
//It dispatches the action to toggle the todo's
//complete status upon onClick.
import React from "react";
import cx from "classnames";

// D-III} Let’s work on <Todo /> Now:

import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

// ... component implementation
// D-III} Let’s work on <Todo /> Now:
//adding toggleTodo as props for dispatch
const Todo = ({ todo, toggleTodo }) => (
  <li
    className="todo-item"
    onClick={() => {
      /** dispatches action to toggle todo */
        toggleTodo(todo.id);
    }}>
    {todo && todo.comleted ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}>
      {todo.content}
    </span>
  </li>
);


//A-III}REACT Component
//export default Todo;

// D-III} Let’s work on <Todo /> Now:
export default connect(
  null,
  { toggleTodo }
)(Todo);
