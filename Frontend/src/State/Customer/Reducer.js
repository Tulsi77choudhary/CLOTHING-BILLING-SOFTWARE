import {
  ADD_CUSTOMER_REQUEST,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_FAILURE,
  GET_CUSTOMERS_REQUEST,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_FAILURE,
} from "./ActionType";

const initialState = {
  customer: null,
  customers: [],
  loading: false,
  error: null,
};

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_CUSTOMER_REQUEST:
    case GET_CUSTOMERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ADD_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        customer: action.payload,
        customers: [...state.customers, action.payload],
        error: null,
      };

    case GET_CUSTOMERS_SUCCESS:
      return {
        ...state,
        loading: false,
        customers: action.payload,
        error: null,
      };

    case ADD_CUSTOMER_FAILURE:
    case GET_CUSTOMERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};