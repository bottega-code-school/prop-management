import {
    SET_NEWSLETTERS
} from '../actions/types';

const INITIAL_STATE = {
    newsletters: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_NEWSLETTERS:
            const newsletters = action.payload;
            return {
                ...state,
                newsletters
            }
        default: return state;
    }
}