import { createStore, applyMiddleware } from "redux";
import { composeWithDevtools } from 'redux-devtools-extension';
import reducer from "./reducers/todo";
import thunk from 'redux-thunk';

export default createStore(
  reducer,
  composeWithDevtools(
    applyMiddleware(thunk)
  )
);
