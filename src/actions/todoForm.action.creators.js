import {
  CURRENT_UPDATE
} from '../constants';

export const updateCurrent = (val) => ({type:CURRENT_UPDATE, payload: val});
