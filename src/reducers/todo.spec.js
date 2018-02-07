import reducer from './todo';

describe('Todo Reducer', () => {
  test('return an state object', ()=>{
    const result = reducer(undefined, {type: "ANYTHING"});
    expect(result).toBeDefined()
  });

  test("adds to todos", ()=>{
    const startState = {
      todos: [
      {id:1, name:"Create Static UI", isComplete: true},
      {id:2, name:"Create Initial State", isComplete: false},
      {id:3, name:"Use State to render UI", isComplete: true},
    ]};
    const expectedState = {
      todos: [
      {id:1, name:"Create Static UI", isComplete: true},
      {id:2, name:"Create Initial State", isComplete: false},
      {id:3, name:"Use State to render UI", isComplete: true},
      {id:4, name:"Added Todo", isComplete: false}
    ]};

    const result = reducer(startState, {type:"TODO_ADD", payload: {id:4, name:"Added Todo", isComplete: false} });
    expect(result).toEqual(expectedState);
  })
})
