import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoReducer from "./reducers/todo";
import messageReducer from "./reducers/messages";


const reducers = combineReducers({
  todo:todoReducer,
  message:messageReducer
});

export default createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
