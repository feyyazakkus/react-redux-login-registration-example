import { combineReducers } from "redux";
import user from './user';
import errors from './errors';

export default combineReducers({
  user,
  errors
})
