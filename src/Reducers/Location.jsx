import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

//define actions
const SET_LOCATION = 'location/SET_LOCATION';

//create actions
export const setLocation = createAction(SET_LOCATION, address => ({
    x: address.coordX,
    y: address.coordY
}));

//initial state
const initialState = {
    x: 126.570667,
    y: 33.450701
};

//set reducers
const location = handleActions(
    {
        [SET_LOCATION]: (state, {payload: location}) =>
        produce(state, loc => {
            loc.x = location.x;
            loc.y = location.y;
        })
    },
    initialState
)
export default location;