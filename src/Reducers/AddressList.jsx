import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const INSERT = 'addressList/INSERT';
const REMOVE = 'addressList/REMOVE';
const WIPE = 'addressList/WIPE';
let id = 1;

export const insert = createAction(INSERT, newAddress => ({
    id: id++,
    address: newAddress.road_address.address_name,
    buildingName: newAddress.road_address.building_name,
    coordX: newAddress.x,
    coordY: newAddress.y
}))

export const remove = createAction(REMOVE, id => id)
export const wipe = createAction(WIPE, action => action)


const initialState = {
    addressList: [
        {
            id: 1,
            address: "주소지 없음",
            buildingName: "",
            coordX: 0,
            coordY: 0
        }
    ]

}

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
            list = initialState;
        })
    },
    initialState
);

export default addressList;