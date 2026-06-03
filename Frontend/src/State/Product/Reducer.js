
import * as types from './ActionType';

export const initialState = {
    products: [],
    totalCount: 0,
    filter: {},
    loading: false,
    error: null,
    currentProduct: null
};

export const productReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.GET_PRODUCTS_REQUEST:
        case types.CREATE_PRODUCTS_REQUEST:
        case types.GET_TOTAL_PRODUCTS_REQUEST:
        case types.FILTER_PRODUCTS_REQUEST:
        case types.UPDATE_PRODUCT_REQUEST:
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

        case types.GET_TOTAL_PRODUCTS_SUCCESS: 
            return {
                ...state,
                loading: false,
                totalCount: action.payload
            };
        case types.FILTER_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                filter: action.filter || {},
                error: null
            };
        case types.UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: state.products.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                ),
                error: null
            };
        
        case types.GET_PRODUCTS_FAILURE:
        case types.CREATE_PRODUCTS_FAILURE:
        case types.GET_TOTAL_PRODUCTS_FAILURE:
        case types.FILTER_PRODUCTS_FAILURE:
        case types.UPDATE_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};