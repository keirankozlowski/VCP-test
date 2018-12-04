import axios from 'axios';

export const signUp = (data) => {
    return async (dispatch) => {
        try {
            const res = await axios
                .post('https://quiet-inlet-31536.herokuapp.com/users/signup', data);
                console.log('res', res);
        } catch(err) {
            console.log('err', err);
        }
    }
}