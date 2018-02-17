import {TODO_ADD, TODOS_LOAD} from "./todo";
const MESSAGE_SHOW = "MESSAGE_SHOW";

/*the action creator*/
export const showMessage = (msg) => ({type:MESSAGE_SHOW, payload: msg});

/*reducer*/
export default (state="", action) => {
  switch (action.type) {
    case MESSAGE_SHOW:
      return action.payload
    case TODOS_LOAD:
    case TODO_ADD:
      return ''
    default:
      return state;
  }
}
