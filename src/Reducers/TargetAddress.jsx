import { createAction, handleActions } from "redux-actions";
import produce from "immer";

//define actions
const SET_ADDRESS = 'targetAddress/SET_ADDRESS';
const SET_DETAILS = 'targetAddress/SET_DETAILS';
const REMOVE_ELEMENT = 'targetAddress/REMOVE_ELEMENT';

//create actions
export const setAddress = createAction(SET_ADDRESS, newAddress => ({
    address: newAddress.address,
    buildingName: newAddress.buildingName
}));

export const setDetails = createAction(SET_DETAILS, detail => ({
    blockNum: detail.blockNumber,
    shipMemo: detail.shipmentMemo
}));

export const removeElement = createAction(REMOVE_ELEMENT, element => element);


//initial state
const initialState = {
    address: "",
    buildingName: "",
    blockNumber: "",
    shipmentMemo: ""
};

//set reducers
const targetAddress = handleActions(
    {
        [SET_ADDRESS]: (state, {payload: pushed}) =>
        produce(state, info => {
            info.address = pushed.address;
            info.buildingName = pushed.buildingName;
        }),
        [SET_DETAILS]: (state, {payload: details}) =>
        produce(state, info => {
            info.blockNumber = details.blockNum;
            info.shipmentMemo = details.shipMemo;
        }),
        [REMOVE_ELEMENT]: (state, {payload: element}) =>
        produce(state, info => {
            switch (element) {
                case 'address':
                    info.address = "없음";
                    break;
                case 'buildingName':
                    info.buildingName = "";
                    break;
                case 'blockNumber':
                    info.blockNumber = "";
                    break;
                case 'shipmentMemo':
                    info.shipmentMemo = "";
                    break;
            }
        })
    },
    initialState
)
export default targetAddress;