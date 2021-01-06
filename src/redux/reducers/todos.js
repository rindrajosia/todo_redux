//B-III] REDUX: REDUCER

//The todos reducer

import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
}


export default function(state = initialState, action) {
  switch (action.type) {
    //Appends the id to its allIds field
    //and sets the todo within its byIds field
    //upon receiving the ADD_TODO action
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    //Toggles the completed field for the todo
    //upon receiving the TOGGLE_TODO action
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    default:
      return state;
  }
}
