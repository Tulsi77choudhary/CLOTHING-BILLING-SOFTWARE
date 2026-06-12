import axios from "axios";
import { API_BASE_URL, api } from "../../config/apiConfig";
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS,

} from "./AuthType";


export const register = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const response = await axios.post(`${API_BASE_URL}/api/auth/register`, userData);
    const user = response.data;

    dispatch({
      type: REGISTER_SUCCESS,
      payload: user
    });
    console.log("Registered user:", user);
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error.response?.data || error.message });
  }
};

export const login = (userData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {

    const response = await axios.post(
      `${API_BASE_URL}/api/auth/login`,
      userData
    );

    console.log("RESPONSE =", response.data);

    const { token, user } = response.data;

    console.log("TOKEN =", token);
    console.log("USER =", user);

    // Save token
    if (token && user) {
      localStorage.setItem("jwt", token);
      localStorage.setItem("userId", user.id);
    }

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        token,
        user
      },
    });

    console.log("Logged in user:", user);

  } catch (error) {

    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response?.data || error.message,
    });

  }
};