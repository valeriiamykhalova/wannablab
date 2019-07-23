import axios from 'axios';
import { returnErrors } from './messages';

import { GET_LANGUAGES } from './types';


export const getLanguages = () => dispatch => {
    axios.get('/api/v1/languages/')
        .then(res => {
            dispatch({
                type: GET_LANGUAGES,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(
            err.response.data,
            err.response.status
        )));
};
