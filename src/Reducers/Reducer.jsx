import { combineReducers } from "redux";
import addressList from "./AddressList";
import count from "./Count";
import location from "./Location";
import targetAddress from "./TargetAddress";

//contains all reducers
const rootReducer = combineReducers( {
    addressList,    //state of the list of most recent search of address
    count,  //state of the count how many pages user looked on the list
    location,    //location to point at the map
    targetAddress //set address
});
export default rootReducer;