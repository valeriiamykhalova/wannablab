import { GET_EVENTS, CREATE_EVENT, GET_EVENT } from '../actions/types.js';

const initialState = {
    events: [],
    event: {}
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
            };
        case GET_EVENT:
            return {
                ...state,
                event: action.payload
            }
        default:
            return state;
    }
}