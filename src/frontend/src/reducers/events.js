import { GET_EVENTS, CREATE_EVENT } from '../actions/types.js';

const initialState = {
    events: [],
    isLoading: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EVENTS:
            return {
                ...state,
                isLoading: false,
                events: action.payload,
            }
        case CREATE_EVENT:
            return {
                ...state,
                events: [...state.events, action.payload]
            }
        default:
            return state;
    }
}