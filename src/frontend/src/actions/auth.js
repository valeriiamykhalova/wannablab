import axios from 'axios';
import { returnErrors } from './messages';

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => {
            if (res.data.id == null) { // TODO: it's not very good
                dispatch({
                    type: AUTH_ERROR
                });
                return;
            }
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data,
                err.response.status
            ));
            dispatch({
                type: AUTH_ERROR
            });
        });
};


export const login = (username, password) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ username, password });

    axios.post('/api/auth/login', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            console.log(err)
            dispatch({
                type: LOGIN_FAIL
            });
        });
};

export const register = ({ first_name, last_name, email, username, password }) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ username, password, email, first_name, last_name });

    axios.post('/api/auth/register', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            console.log(err)
            dispatch({
                type: REGISTER_FAIL
            });
        });
};


export const logout = () => (dispatch, getState) => {
    axios.post('/api/auth/logout', null, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS
            });
        }).catch(err => {
            console.log(err)
        });
};

// Setup config with token

export const tokenConfig = getState => {
    const token = getState().auth.token;

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
}
