import { countReducer } from "./Count/Reducer";
import { amountReducer } from "./Amount/Reducer";
import { combineReducers } from "redux";
import { userReducer } from "./User/Reducer";

export const rootReducer = combineReducers({
    COUNT: countReducer,
    AMOUNT: amountReducer,
    USER: userReducer
});