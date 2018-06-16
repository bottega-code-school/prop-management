import { UPDATE_HEADER } from '../actions/types';

const INITIAL_STATE = {
    title: '',
    subtitle: '',
    hideBar: false
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case UPDATE_HEADER:
            const { title, subtitle, hideBar } = action.payload;
            return {
                ...state,
                title,
                subtitle,
                hideBar
            }
            // return {
            //     ...state,
            //     ...action.payload
            // }
        default: return state;
    }
}