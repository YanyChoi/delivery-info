import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const SET_ADDRESS = 'targetAddress/SET_ADDRESS';
const SET_DETAILS = 'targetAddress/SET_DETAILS';

export const setAddress = createAction(SET_ADDRESS, newAddress => ({
    address: newAddress.address,
    buildingName: newAddress.buildingName
}));

export const setDetails = createAction(SET_DETAILS, detail => ({
    blockNum: detail.blockNumber,
    shipMemo: detail.shipmentMemo
}));

const initialState = {
    address: "없음",
    buildingName: "없음",
    blockNumber: "",
    shipmentMemo: ""
};

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
        })
    },
    initialState
)
export default targetAddress;