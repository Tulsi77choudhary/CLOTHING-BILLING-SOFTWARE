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

export const importProductsFromExcel = (file) => async (dispatch) => {
    dispatch({ type: IMPORT_PRODUCTS_REQUEST });

    try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios.post(`${API_BASE_URL}/api/products/import`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        dispatch({
            type: IMPORT_PRODUCTS_SUCCESS,
            payload: response.data.message
        });
        
        console.log("Import Success:", response.data.message);
        return { success: true, message: response.data.message };

    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message || "Import failed!";
        dispatch({
            type: IMPORT_PRODUCTS_FAILURE,
            payload: errorMessage
        });
        
        console.error("Import Error:", errorMessage);
        return { success: false, message: errorMessage };
    }
};

export const exportProductsToExcel = () => async (dispatch) => {
    dispatch({ type: EXPORT_PRODUCTS_REQUEST });

    try {
        // Binary/Stream data download karne ke liye responseType 'blob' zaroori hai
        const response = await axios.get(`${API_BASE_URL}/api/products/export`, {
            responseType: 'blob' 
        });

        // Blob data ko browser download link me convert karna
        const blob = new Blob([response.data], { 
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
        });
        const downloadUrl = window.URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', 'products_catalogue.xlsx'); // File name setup
        document.body.appendChild(link);
        link.click();
        
        // Cleanup
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(downloadUrl);

        dispatch({ type: EXPORT_PRODUCTS_SUCCESS });
        return { success: true };

    } catch (error) {
        dispatch({
            type: EXPORT_PRODUCTS_FAILURE,
            payload: error.message || "Export failed!"
        });
        console.error("Export Error:", error);
        return { success: false, message: error.message };
    }
};