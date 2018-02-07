const initialState = {
  todos: [
    {id:1, name:"Create a Store", isComplete: true},
    {id:2, name:"Load State through the store", isComplete: true},
    {id:3, name:"handle state changes with redux", isComplete: false},
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "TODO_ADD":
      return {...state, todos: state.todos.concat(action.payload)};
    default:
      return state
  }
}
