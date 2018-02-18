import {
  TODOS_LOAD,
  TODO_ADD,
  TODO_REPLACE,
  TODO_REMOVE
} from '../constants';

export const loadTodos = (todos) => ({type:TODOS_LOAD, payload: todos});
export const addTodo = (todo) => ({type:TODO_ADD, payload: todo});
export const replaceTodo =  (todo) => ({type:TODO_REPLACE, payload: todo});
export const removeTodo = (id) => ({type:TODO_REMOVE, payload: id});
