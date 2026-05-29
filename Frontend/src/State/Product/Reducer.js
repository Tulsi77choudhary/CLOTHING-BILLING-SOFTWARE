
import * as types from './ActionType';

export const initialState = {
    products: [],
    totalCount: 0,
    loading: false,
    error: null,
    currentProduct: null
};

export const productReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.GET_PRODUCTS_REQUEST:
        case types.CREATE_PRODUCTS_REQUEST:
        case types.GET_TOTAL_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        
        case types.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            };

        
        case types.CREATE_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                currentProduct: action.payload,
                products: [
                    ...state.products,
                    action.payload
                ]
            };

        case types.GET_TOTAL_PRODUCTS_SUCCESS: // नया सक्सेस केस जो Backend API से वैल्यू सेट करेगा
            return {
                ...state,
                loading: false,
                totalCount: action.payload
            };

        
        case types.GET_PRODUCTS_FAILURE:
        case types.CREATE_PRODUCTS_FAILURE:
        case types.GET_TOTAL_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};