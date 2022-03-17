import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

//액션 정의
const INSERT = 'addressList/INSERT';
const REMOVE = 'addressList/REMOVE';
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
export const remove = createAction(REMOVE, id => id);
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
        [REMOVE]: (state, {payload: id}) => 
        produce(state, list => {
            const index = list.addressList.findIndex(address => address.id === id);
            list.addressList.splice(index, 1);
        }),
        [WIPE]: (state, action) =>
        produce(state, list => {
            list.addressList = [];
        })
    },
    initialState
);

export default addressList;