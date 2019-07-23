import axios from 'axios';
import { returnErrors } from './messages';

import { GET_LEVELS } from './types';


export const getLevels = () => dispatch => {
    axios.get('/api/v1/levels/')
        .then(res => {
            dispatch({
                type: GET_LEVELS,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(
            err.response.data,
            err.response.status
        )));
};
