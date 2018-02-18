import {
  CURRENT_UPDATE,
  TODOS_LOAD,
  TODO_ADD,
  TODO_REPLACE,
  TODO_REMOVE,
  MESSAGE_SHOW,
} from '../constants';

// todos actions
export const updateCurrent = (val) => ({type:CURRENT_UPDATE, payload: val});
export const loadTodos = (todos) => ({type:TODOS_LOAD, payload: todos});
export const addTodo = (todo) => ({type:TODO_ADD, payload: todo});
export const replaceTodo =  (todo) => ({type:TODO_REPLACE, payload: todo});
export const removeTodo = (id) => ({type:TODO_REMOVE, payload: id});


//message action ccreators
export const showMessage = (msg) => ({type:MESSAGE_SHOW, payload: msg});
