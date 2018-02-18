import {
  getTodos,
  createTodo,
  updateTodo,
  destroyTodo
} from "../lib/todoServices";
import {
  showMessage
} from '.'; /* ./message.action.creators */
import {
  loadTodos,
  addTodo,
  replaceTodo,
  removeTodo
} from '.'; /* ./todo.action.creators */


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
