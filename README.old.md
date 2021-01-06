https://react-redux.js.org/introduction/basic-tutorial
# A] The React UI Components
## We have implemented our React UI components as follows:

### TodoApp is the entry component for our app. It renders the header, the AddTodo, TodoList, and VisibilityFilters components.

### AddTodo is the component that allows a user to input a todo item and add to the list upon clicking its “Add Todo” button:
#### It uses a controlled input that sets state upon onChange.
#### When the user clicks on the “Add Todo” button, it dispatches the action (that we will provide using React Redux) to add the todo to the store.

### TodoList is the component that renders the list of todos:
#### It renders the filtered list of todos when one of the VisibilityFilters is selected.

### Todo is the component that renders a single todo item:
#### It renders the todo content, and shows that a todo is completed by crossing it out.
#### It dispatches the action to toggle the todo's complete status upon onClick.

### VisibilityFilters renders a simple set of filters: all, completed, and incomplete. Clicking on each one of them filters the todos:
#### It accepts an activeFilter prop from the parent that indicates which filter is currently selected by the user. An active filter is rendered with an underscore.
#### It dispatches the setFilter action to update the selected filter.

### constants holds the constants data for our app.

### And finally index renders our app to the DOM.

# B] Redux

### I] Store
#### todos: A normalized reducer of todos. It contains a byIds map of all todos and a allIds that contains the list of all ids.
#### visibilityFilters: A simple string all, completed, or incomplete.

### I Bis] REDUCERS
#### reducers/index.js: combineReducers

### Action Creators:

#### addTodo creates the action to add todos. It takes a single string variable content and returns an ADD_TODO action with payload containing a self-incremented id and content

#### toggleTodo creates the action to toggle todos. It takes a single number variable id and returns a TOGGLE_TODO action with payload containing id only

#### setFilter creates the action to set the app’s active filter. It takes a single string variable filter and returns a SET_FILTER action with payload containing the filter itself

### Reducers

#### The todos reducer:
##### Appends the id to its allIds field and sets the todo within its byIds field upon receiving the ADD_TODO action
##### Toggles the completed field for the todo upon receiving the TOGGLE_TODO action

#### The visibilityFilters reducer sets its slice of store to the new filter it receives from the SET_FILTER action payload


### Action Types
#### We use a file actionTypes.js to hold the constants of action types to be reused

### Selectors

#### getTodoList returns the allIds list from the todos store

#### getTodoById finds the todo in the store given by id

#### getTodos is slightly more complex. It takes all the ids from allIds, finds each todo in byIds, and returns the final array of todos

#### getTodosByVisibilityFilter filters the todos according to the visibility filter

# C] How to connect this store to our app using React Redux.

## I} Providing the Store:
### Make the store available to our app. To do this, we wrap our app with the <Provider /> API provided by React Redux.(index.js)

# D] Connecting the Components.

React Redux provides a 'connect' function for you to read values from the Redux store (and re-read the values when the store updates).

The 'connect' function 'takes two arguments', both optional:

### mapStateToProps:

#### called every time the store state changes. It receives the entire store state, and should return an object of data this component needs.

### mapDispatchToProps: this parameter can either be a function, or an object.

#### If it’s a function, it will be called once on component creation. It will receive dispatch as an argument, and should return an object full of functions that use dispatch to dispatch actions.

#### If it’s an object full of action creators, each action creator will be turned into a prop function that automatically dispatches its action when called. Note: We recommend using this “object shorthand” form.

## I} Let’s work on <AddTodo /> first:
It needs to trigger changes to the store to add new todos.
Therefore, it needs to be able to dispatch actions to the store.
#### redux/actions.js:
By passing redux/actions.js to 'connect', our component receives it as a prop, and it will automatically dispatch the action when it’s called.
##### components/AddTodo.js (mapDispatchToProps)
=> Notice now that <AddTodo /> is wrapped with a parent component called <Connect(AddTodo) />. Meanwhile, <AddTodo /> now gains "one prop: the addTodo action".

## I-bis} We also need to implement the 'handleAddTodo' function to let it 'dispatch' the 'addTodo' action and 'reset the input'
=> Now our <AddTodo /> is connected to the store. When we add a todo it would dispatch an action to change the store. If you have the Redux DevTools Extension hooked up, you should see the action being dispatched:

=> You should also see that the store has changed accordingly:(Diff)

## II} Let’s work on <TodoList /> Now:
The <TodoList /> component is responsible for rendering the list of todos. Therefore, it needs to read data from the store. We enable it by calling connect with the mapStateToProps parameter, a function describing which part of the data we need from the store.

##### components/TodoList.js
Our <Todo /> component takes the todo item as props. We have this information from the byIds field of the todos. However, we also need the information from the allIds field of the store indicating which todos and in what order they should be rendered.

## III} Let’s work on <Todo /> Now:
add toggleTodo as props to Todo components
then
export default connect(
  null,
  { toggleTodo }
)(Todo);

## IV} Finally, let’s implement our VisibilityFilters feature.

The <VisibilityFilters /> component needs to be able to read from the store which filter is currently active, and dispatch actions to the store. Therefore, we need to pass both a mapStateToProps and mapDispatchToProps. The mapStateToProps here can be a simple accessor of the visibilityFilter state. And the mapDispatchToProps will contain the setFilter action creator.

##### components/VisibilityFilters.js

## V} we also need to update our <TodoList /> component.

Meanwhile, we also need to update our <TodoList /> component to filter todos according to the active filter. Previously the mapStateToProps we passed to the <TodoList /> connect function call was simply the selector that selects the whole list of todos. Let’s write another selector to help filtering todos by their status.

##### redux/selectors.js: adding selector according to the visibility filter
