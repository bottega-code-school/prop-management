import {
    CHANGE_SELECTED_REQUEST_TYPE,
    SET_REQUESTS
} from '../actions/types';

const INITIAL_STATE = {
    requests: [],
    selectedRequestType: 'pending'
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CHANGE_SELECTED_REQUEST_TYPE:
            const boxType = action.payload
            return {
                ...state,
                selectedRequestType: boxType
            }
        case SET_REQUESTS: 
            return {
                ...state,
                requests: action.payload
            }
        default: return state;
    }
}