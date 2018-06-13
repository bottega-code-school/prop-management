import {
    SET_NEWSLETTERS,
    FETCH_NEWSLETTER_ID
} from '../actions/types';

const INITIAL_STATE = {
    newsletters: [],
    newsletterToEdit: {}
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_NEWSLETTERS:
            const newsletters = action.payload;
            return {
                ...state,
                newsletters
            }
        case FETCH_NEWSLETTER_ID:
            const newsletterID = action.payload;
            var newsletterToEdit = {};
            state.newsletters.map(newsletter => {
                if(newsletter._id == newsletterID) {
                    newsletterToEdit = newsletter;
                }
            })
            return {
                ...state,
                newsletterToEdit
            }
        default: return state;
    }
}