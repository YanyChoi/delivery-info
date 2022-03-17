import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const ADD = 'count/ADD';
const SUBTRACT = 'count/SUBTRACT';
const INITIAL = 'count/INITIAL';

export const add = createAction(ADD, action => action);
export const subtract = createAction(SUBTRACT, action => action);
export const initial = createAction(INITIAL, action => action);

const initialState = { count: 1 };

const count = handleActions(
    {
        [ADD]: state =>
        produce(state, count => {
            count.count++;
        }),
        [SUBTRACT]: state =>
        produce(state, count => {
            count.count--;
        }),
        [INITIAL]: state =>
        produce(state, count => {
            count.count = 1;
        })
    },
    initialState
)
export default count;