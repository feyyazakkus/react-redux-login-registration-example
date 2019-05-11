import { SET_CURRENT_USER, LOGOUT } from "../actions/types";

const user = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: true,
        profile: action.payload
      };
    case LOGOUT:
      return {
        isAuthenticated: false,
        profile: {}
      };
    default:
      return state;
  }
}

export default user;
