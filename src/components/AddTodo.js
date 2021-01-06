//A-I}REACT Component
//AddTodo is the component that allows a user to input a todo
//item and add to the list upon clicking its “Add Todo” button:
//1) It uses a controlled input that sets state upon onChange.
//2) When the user clicks on the “Add Todo” button,
//it dispatches the action (that we will provide using React Redux)
//to add the todo to the store.
import React from "react";

//D-I] By passing ../redux/actions.js(addTodo) to connect, our component
//receives it as a prop, and it will automatically
//dispatch the action when it’s called.
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";


class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  //Arrow bug fx binding
  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    // D-I-Bis] dispatches actions to add todo
    this.props.addTodo(this.state.input);

    // D-I-Bis] sets state back to empty string
    this.setState({ input: '' });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
          />
          <button className ="add-todo" onClick={this.handleAddTodo}>
            Add Todo
          </button>
      </div>
    )
  }
}

// A-I] export default AddTodo;

//D-I] Connect addTodo action to AddTodo
export default connect (
  null,
  { addTodo }
)(AddTodo)
