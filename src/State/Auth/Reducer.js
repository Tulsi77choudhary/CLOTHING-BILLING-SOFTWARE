import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS
} from "./AuthType";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  jwt: null
};

export const authReducer = (state = initialState, action) => {

  switch (action.type) {

    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        jwt: action.payload.token,
        user: action.payload.user
      };

    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};