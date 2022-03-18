import { combineReducers } from "redux";
import addressList from "./AddressList";
import count from "./Count";
import location from "./Location";

const rootReducer = combineReducers( {
    addressList,
    count,
    location
});
export default rootReducer;