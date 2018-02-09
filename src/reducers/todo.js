const initialState = {
  todos: [
    {id:1, name:"Create a Store", isComplete: true},
    {id:2, name:"Load State through the store", isComplete: true},
    {id:3, name:"handle state changes with redux", isComplete: false},
  ],
  currentTodo: ""
};

const CURRENT_UPDATE = "CURRENT_UPDATE";
const TODO_ADD = "TODO_ADD";

export const updateCurrent = (val) => ({type:CURRENT_UPDATE, payload: val});

export default (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {...state, todos: state.todos.concat(action.payload)};
    case CURRENT_UPDATE:
      return {...state, currentTodo: action.payload}
    default:
      return state
  }
}
