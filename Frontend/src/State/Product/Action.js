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

export const filterProducts = (category, brand, status) => async (dispatch) => {
    dispatch({ type: types.FILTER_PRODUCTS_REQUEST });
    try {
        const response = await axios.get(`${API_BASE_URL}/api/products/products`,
            {
                params: {
                    category,
                    brand,
                    status
                }
            }
        );
        console.log("Products Response:", response.data);
        dispatch({
            type: types.FILTER_PRODUCTS_SUCCESS,
            payload: response.data,
            filter: {
                category,
                brand,
                status
            }
        });
    } catch (error) {
        dispatch({
            type: types.FILTER_PRODUCTS_FAILURE,
            payload: error.message
        });
    }
}

export const updateProduct = (productId, productData) => async (dispatch) => {
    dispatch({ type: types.UPDATE_PRODUCT_REQUEST });
    try {
        console.log(`Sending Update Request for ID: ${productId}`, productData);

        const response = await axios.put(`${API_BASE_URL}/api/products/${productId}`, productData, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        console.log("Updated Product Response Data:", response.data);

        dispatch({
            type: types.UPDATE_PRODUCT_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        console.error("Update Product Error:", error.response?.data || error.message);
        dispatch({
            type: types.UPDATE_PRODUCT_FAILURE,
            payload: error.response?.data || error.message
        });
    }
};