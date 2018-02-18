// creators
export {updateCurrent} from './todoForm.action.creators'
export {
  loadTodos ,
  addTodo ,
  replaceTodo ,
  removeTodo
} /*as creators */ from './todo.action.creators'
export {showMessage} from './message.action.creators'

//dispatchers
export {
  fetchTodos,
  saveTodo,
  toggleTodo,
  deleteTodo
} from './todo.action.dispatchers';

/*
export const {
  action: {
    creators: { //*.dispatchers or .action.js
      customName: (newData) => ({type:ACTION_TYPE_NAME, payload: newData_or_logic})
      ...
    },
    dispatchers: { //*.actions

    }
  }//end action
}//end export

or

export const actions = {
  todo: {
    creators: {...},
    dispatchers: {...}
  },
  message:{...}
  form:{...}
}
*/
