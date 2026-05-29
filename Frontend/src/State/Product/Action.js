import axios, { create } from 'axios';
import * as types from './ActionType';

import { API_BASE_URL, api } from "../../config/apiConfig";


export const Products = (productData) => async (dispatch) => {
    dispatch({ type: types.GET_PRODUCTS_REQUEST });
    try {
        const response = await axios.get(`${API_BASE_URL}/api/products`, productData);
        dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: error.message });
    }
};

export const createProduct = (productData) => async (dispatch) => {

    dispatch({ type: types.CREATE_PRODUCTS_REQUEST });

    try {

        const response = await axios.post(
            `${API_BASE_URL}/api/products`,
            productData
        );

        dispatch({
            type: types.CREATE_PRODUCTS_SUCCESS,
            payload: response.data
        });

    } catch (error) {

        dispatch({
            type: types.CREATE_PRODUCTS_FAILURE,
            payload: error.response?.data?.message || error.message
        });
    }
};

export const getTotalProductCount = () => async (dispatch) => {
    dispatch({ type: types.GET_TOTAL_PRODUCTS_REQUEST });
    try {
        const response = await axios.get(`${API_BASE_URL}/api/products/count`);
        dispatch({ 
            type: types.GET_TOTAL_PRODUCTS_SUCCESS, 
            payload: response.data 
        });
    } catch (error) {
        dispatch({ 
            type: types.GET_TOTAL_PRODUCTS_FAILURE, 
            payload: error.message 
        });
    }
};