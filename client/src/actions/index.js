import axios from "axios";

import * as types from "./types";

export const signUp = data => {
  return async dispatch => {
    try {
      const res = await axios.post(
        "https://vcp-test.herokuapp.com/users/signup",
        data
      );
      console.log("res", res);

      dispatch({
        type: types.AUTH_SIGNUP,
        payload: res.data.token
      });

      localStorage.setItem("JWT_TOKEN", res.data.token);
    } catch (err) {
      dispatch({
        type: types.AUTH_ERROR,
        payload: err
      });
    }
  };
};

export const signIn = data => {
  return async dispatch => {
    try {
      const res = await axios.post(
        "https://vcp-test.herokuapp.com/users/signin",
        data
      );

      dispatch({
        type: types.AUTH_SIGNIN,
        payload: res.data.token
      });

      localStorage.setItem("JWT_TOKEN", res.data.token);
      axios.defaults.headers.common["Authorization"] = res.data.token;
    } catch (err) {
      dispatch({
        type: types.AUTH_ERROR,
        payload: err
      });
    }
  };
};

export const signOut = () => {
  return dispatch => {
    localStorage.removeItem("JWT_TOKEN");
    axios.defaults.headers.common["Authorization"] = "";

    dispatch({
      type: types.AUTH_SIGN_OUT,
      payload: ""
    });
  };
};
