import * as types from "../actions/types";

const INITIAL_STATE = {
  isAuth: false,
  token: "",
  errorMsg: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.AUTH_SIGNUP:
      return {
        ...state,
        token: action.payload,
        isAuth: true,
        errorMsg: ""
      };
    case types.AUTH_SIGNIN:
      return {
        ...state,
        token: action.payload,
        isAuth: true,
        errorMsg: ""
      };
    case types.AUTH_SIGNOUT:
      return {
        ...state,
        token: action.payload,
        isAuth: false,
        errorMsg: ""
      };
    case types.AUTH_ERROR:
      return {
        ...state,
        errorMsg: action.payload
      };
    default:
      return state;
  }
};
