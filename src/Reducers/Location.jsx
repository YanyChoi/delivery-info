import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const SET = 'location/SET';

export const set = createAction(SET, address => ({
    x: address.coordX,
    y: address.coordY
}));

const initialState = {
    x: 126.570667,
    y: 33.450701
}

const location = handleActions(
    {
        [SET]: (state, {payload: location}) =>
        produce(state, loc => {
            loc.x = location.x;
            loc.y = location.y;
        })
    },
    initialState
)
export default location;