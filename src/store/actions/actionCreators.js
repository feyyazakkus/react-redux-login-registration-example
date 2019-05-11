import { SET_CURRENT_USER, REGISTER_SUCCESS, LOGOUT, GET_ERRORS } from "./types";

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    payload: user
  }
}

export function registerSuccess() {
  return {
    type: REGISTER_SUCCESS
  }
}

export function logoutUser() {
  return {
    type: LOGOUT
  }
}

export function getErrors(errors) {
  return {
    type: GET_ERRORS,
    payload: errors
  }
}
