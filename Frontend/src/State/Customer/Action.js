import axios from "axios";
import { API_BASE_URL, api } from "../../config/apiConfig";
import {
  ADD_CUSTOMER_FAILURE, ADD_CUSTOMER_REQUEST, ADD_CUSTOMER_SUCCESS,
  GET_CUSTOMERS_FAILURE, GET_CUSTOMERS_REQUEST, GET_CUSTOMERS_SUCCESS
} from "./ActionType";

export const addCustomer = (customerData) => async (dispatch) => {
  dispatch({ type: "ADD_CUSTOMER_REQUEST" });

  try {
    const { data } = await api.post(
      `${API_BASE_URL}/api/customers/add`,
      customerData
    );

    dispatch({
      type: "ADD_CUSTOMER_SUCCESS",
      payload: data,
    });

    return data;

  } catch (error) {
    dispatch({
      type: "ADD_CUSTOMER_FAILURE",
      payload:
        error.response?.data?.message ||
        error.response?.data ||
        error.message,
    });
  }
};

export const getAllCustomers = () => async (dispatch) => {
  dispatch({ type: GET_CUSTOMERS_REQUEST });

  try {
    const { data } = await api.get(
      `${API_BASE_URL}/api/customers/all`
    );
    console.log("API DATA => ", data);

    dispatch({
      type: GET_CUSTOMERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_CUSTOMERS_FAILURE,
      payload:
        error.response?.data?.message ||
        error.message,
    });
  }
};