import {
  MESSAGE_SHOW
} from '../constants';

//message action creators
export const showMessage = (msg) => ({type:MESSAGE_SHOW, payload: msg});
