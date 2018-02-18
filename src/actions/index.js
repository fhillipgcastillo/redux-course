export {updateCurrent} from './todoForm.actions'
export {
  loadTodos ,
  addTodo ,
  replaceTodo ,
  removeTodo
} /*as creators */ from './todo.action.creators'
export {showMessage} from './message.actions'
export {
  fetchTodos,
  saveTodo,
  toggleTodo,
  deleteTodo
} from './todo.actions';

/*
export {
  action: {
    creators: { //*.dispatchers or .action.js
      customName: (newData) => ({type:ACTION_TYPE_NAME, payload: newData_or_logic})
      ...
    },
    dispatchers: { //*.actions

    }
  }//end action
}//end export
*/
