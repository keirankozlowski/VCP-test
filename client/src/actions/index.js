import axios from 'axios';

import * as types from './types';

export const signUp = (data) => {
    return async (dispatch) => {
        try {
            const res = await axios
                .post('https://vcp-test.herokuapp.com/users/signup', data);
                console.log('res', res);

            dispatch({
                type: types.AUTH_SIGNUP,
                payload: res.data.token
            });

            localStorage.setItem('JWT_TOKEN', res.data.token);
        } catch(err) {
            dispatch({
                type: types.AUTH_ERROR,
                payload: err
            });
        }
    }
}