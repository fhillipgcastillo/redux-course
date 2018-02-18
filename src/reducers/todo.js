import {showMessage} from "../actions";
/* Constant states types*/
import {
  CURRENT_UPDATE,
  TODOS_LOAD,
  TODO_ADD,
  TODO_REPLACE,
  TODO_REMOVE,
  FILTER_VISIBLE,
  FILTER_COMPLETED
} from  '../constants';



const initialState = {
  todos: [],
  currentTodo: ""
};

/*Reducer or Action Mapper*/
export const getVisibleTodos = (todos, filter) => {
    switch(filter){
      case FILTER_VISIBLE:
        return todos.filter(t => !t.isComplete )
      case FILTER_COMPLETED:
        return todos.filter(t => t.isComplete )
      default:
        return todos
    }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {...state, currentTodo: '', todos: state.todos.concat(action.payload)};
    case TODOS_LOAD:
      return {...state, todos: action.payload};
    case CURRENT_UPDATE:
      return {...state, currentTodo: action.payload}
    case TODO_REPLACE:
      return {
        ...state,
        todos: state.todos.map(
          t =>
            t.id === action.payload.id ? action.payload : t)}
    case TODO_REMOVE:
      return {...state,
        todos: state.todos.filter(t => t.id !== action.payload)
      }
    default:
      return state
  }
}
