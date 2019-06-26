import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import {
    GET_EVENTS,
    CREATE_EVENT,
    GET_EVENT,
    GET_EVENTS_WITH_TOKEN

} from './types';

// GET EVENTS
export const getEvents = () => dispatch => {
    axios.get('/api/v1/events/')
        .then(res => {
            dispatch({
                type: GET_EVENTS,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(
            err.response.data,
            err.response.status
        )));
};

// GET EVENTS WITH TOKEN
export const getPersonalEvents = () => (dispatch, getState) => {
    axios.get('api/v1/events/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_EVENTS_WITH_TOKEN,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(
            err.data,
            err.status
        )));
};

// CREATE EVENT
export const createEvent = event => (dispatch, getState) => {
    axios.post('api/v1/events/', event, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ createEvent: "Event was created" }));
            dispatch({
                type: CREATE_EVENT,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(
            err.response.data,
            err.response.status
        )));
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
