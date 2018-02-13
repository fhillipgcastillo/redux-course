import reducer from "./reducers/todo";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
// import { composeWithDevtools } from 'redux-devtools-extension';

export default createStore(
  reducer,
  // composeWithDevtools(
    applyMiddleware(thunk)
  // )
);
