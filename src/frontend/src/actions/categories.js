import axios from 'axios';
import { returnErrors } from './messages';

import { GET_CATEGORIES } from './types';


export const getCategories = () => dispatch => {
    axios.get('/api/v1/categories/')
        .then(res => {
            dispatch({
                type: GET_CATEGORIES,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(
            err.response.data,
            err.response.status
        )));
};
