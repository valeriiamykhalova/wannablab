import { GET_LEVELS } from '../actions/types';

const initialState = {
    levels: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LEVELS:
            return {
                ...state,
                levels: action.payload
            }
        default:
            return state;
    }
}