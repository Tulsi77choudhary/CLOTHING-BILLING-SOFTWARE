import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { productReducer } from './Product/Reducer';
import { customerReducer } from "./Customer/Reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  product: productReducer,
  customer: customerReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
