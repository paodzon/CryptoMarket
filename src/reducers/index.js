import { combineReducers } from "redux";
import cryptoReducer from './cryptoReducer'
import cryptoNewsReducer from "./cryptoNewsReducer";

export default combineReducers({
    crypto: cryptoReducer,
    cryptoNews: cryptoNewsReducer
})



