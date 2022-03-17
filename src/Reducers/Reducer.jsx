import { combineReducers } from "redux";
import addressList from "./AddressList";
import count from "./Count";

const rootReducer = combineReducers( {
    addressList,
    count
});
export default rootReducer;