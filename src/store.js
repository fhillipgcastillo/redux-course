import reducer from "./reducers/todo";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
