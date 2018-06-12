
import axios from 'axios';

import { ROOT_URL } from '../config';

import {
    AUTHENTICATE_USER
} from './types';

export function signUp(fields, success) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signUp`, fields)
            .then(response => {
                const { token } = response.data;
                localStorage.setItem('token', token);
               dispatch({
                   type: AUTHENTICATE_USER,
                   payload: response.data
               })
               success();
            })
            .catch(err => {
                if(err) { console.log(err) }
            })
    }
}

export function signIn(fields, success) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signIn`, fields)
            .then(response => {
                const { token } = response.data;
                localStorage.setItem('token', token);
               dispatch({
                   type: AUTHENTICATE_USER,
                   payload: response.data
               })
               success();
            })
            .catch(err => {
                if(err) { console.log(err) }
            })
    }
}