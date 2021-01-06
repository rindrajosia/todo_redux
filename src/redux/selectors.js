import { VISIBILITY_FILTERS } from "../constants";

//B-VI] REDUX: SELECTORS

//getTodoList returns the allIds list from the todos store
export const getTodoList = store =>
  store && store.todos ? store.todos.allIds : [];

//getTodoById finds the todo in the store given by id
//getTodoById trouve le todo dans le magasin indiqué par id
export const getTodoById = (store, id) =>
  store && store.todos && store.todos.byIds
    ? { ...store.todos.byIds[id], id }
    : {};

/**
* example of a slightly more complex selector
* select from store combining information from multiple reducers
*/
//getTodos is slightly more complex.
//It takes all the ids from allIds,
//finds each todo in byIds, and returns the final array of todos

export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));

//D-V} getTodosByVisibilityFilter filters the todos
//according to the visibility filter

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.completed)
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter(todo => !todo.completed)
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos
  }
}
