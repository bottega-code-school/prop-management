import {
 CHANGE_SELECTED_REQUEST_TYPE
} from './types';

import axios from 'axios';
import { ROOT_URL } from '../config';

export function changeSelectedRequestType(boxType) {
    return (
        {
            type: CHANGE_SELECTED_REQUEST_TYPE,
            payload: boxType
        }
    )
};

export function createNewRequest(userId, formData, success) {
    const token = localStorage.getItem('token');
    return function() {
        axios.post(`${ROOT_URL}/requests/new`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                authorization: token
            }
        })
            .then(response => {
                console.log(response.data);
                success();
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export function fetchRequests() {
    const token = localStorage.getItem('token');
    return function() {
        axios.get(`${ROOT_URL}/requests`, {
            headers: { authorization: token }
        })
            .then(response => {
                console.log(response.data);
                //  dispatch an action to set our requests
            })
            .catch(err => {
                console.log(err);
            })
    }
}