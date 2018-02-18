import {getTodos, createTodo, updateTodo, destroyTodo} from "../lib/todoServices";
import {showMessage} from "../actions";
/* Constant states types*/
import {
  CURRENT_UPDATE,
  TODOS_LOAD,
  TODO_ADD,
  TODO_REPLACE,
  TODO_REMOVE
} from  '../constants';

/* action creators*/
import {
  updateCurrent,
  loadTodos,
  addTodo,
  replaceTodo,
  removeTodo,
} from '../actions';

const initialState = {
  todos: [],
  currentTodo: ""
};


/*Action Dispatchers or Reducers*/
export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(showMessage('Loading Todos...'));
    getTodos()
      .then( todos => dispatch(loadTodos(todos)))
  }
};

export const saveTodo = (name) => {
  return (dispatch) => {
    dispatch(showMessage('Saving Todo'));
    createTodo(name)
      .then( res => dispatch(addTodo(res)))
  }
};

export const toggleTodo = (id) => {
  return (dispatch, getState) => {
    dispatch(showMessage('Todo updated'));
    const {todos} = getState().todo; /* getState().todo = {..., todos:[...]}*/
    const todo = todos.find( t => t.id === id);
    const toggled = {...todo, isComplete: !todo.isComplete};
    updateTodo(toggled)
      .then(res => dispatch(replaceTodo(res)));
  }
};

export const deleteTodo = (id) => {
  return (dispatch, getState) => {
    dispatch(showMessage('Removing todo'));
    destroyTodo(id)
      .then(() => dispatch(removeTodo(id)));
  }
};

const FILTER_VISIBLE = "active";
const FILTER_COMPLETED = "completed";

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
