import axios from 'axios';
import { createMessage } from './messages';

import { GET_EVENTS, GET_EVENT } from './types';

// GET EVENTS
export const getEvents = () => dispatch => {
    axios.get('/api/v1/events/')
        .then(res => {

            dispatch({
                type: GET_EVENTS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

export const getEvent = (id) => dispatch => {
    axios.get(`/api/v1/events/${id}/`)
        .then(res => {
            dispatch({
                type: GET_EVENT,
                payload: res.data
            });
        }).catch(err => console.log(err));
};
