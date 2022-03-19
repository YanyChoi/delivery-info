import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

//define actions
const INSERT = 'addressList/INSERT';
const WIPE = 'addressList/WIPE';
let id = 1;

//create actions
export const insert = createAction(INSERT, newAddress => ({
    id: id++,
    address: newAddress.address_name,
    buildingName: newAddress.road_address !== null ? newAddress.road_address.building_name : "",
    coordX: newAddress.x,
    coordY: newAddress.y
}));
export const wipe = createAction(WIPE, action => action);

//initial state
const initialState = {
    addressList: [
    ]

}

//set reducers
const addressList = handleActions(
    {
        [INSERT]: (state, {payload: newAddress}) => 
        produce(state, list => {
            list.addressList.push(newAddress);
        }),
        [WIPE]: (state, action) =>
        produce(state, list => {
            list.addressList = [];
        })
    },
    initialState
);

export default addressList;