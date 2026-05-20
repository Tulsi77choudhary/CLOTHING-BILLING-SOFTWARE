import { 
    LOGIN_FAILURE, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    REGISTER_FAILURE, 
    REGISTER_REQUEST, 
    REGISTER_SUCCESS 
} from "./ActionType"

const initialState = {
    user: null,
    isLoading: false,
    error: null,
    jwt: null
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, error: null,user: action.payload.user, jwt: action.payload.token };

        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        
        default:
            return state
    }
}