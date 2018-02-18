/*constants*/
import {
  MESSAGE_SHOW,
  TODO_ADD, TODOS_LOAD, TODO_REPLACE, TODO_REMOVE
} from "../constants";

/*the action creator*/
import {showMessage} from '../actions';

/*reducer*/
export default (state="", action) => {
  switch (action.type) {
    case MESSAGE_SHOW:
      return action.payload
    case TODO_ADD:
    case TODOS_LOAD:
    case TODO_REPLACE:
    case TODO_REMOVE:
      return ''
    default:
      return state;
  }
}
