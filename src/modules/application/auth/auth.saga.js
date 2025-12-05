import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { actionTypes, authActions } from './auth.action';

// Login API call
export function* postLogin(action) {
    const body = action.payload;
    try {
        const response = yield call(axios.post, '/api/auth/login', body);
        console.log(response, 'rrrrr')
        if (response) {
            yield put(authActions.postLoginSuccess(response));
            action.onSuccess(response.data);
        }
        // const result = response.data;

        // if (result.success) {
        //     // Store token in localStorage
        //     if (result.data.token) {
        //         localStorage.setItem('authToken', result.data.token);
        //     }

        //     // Dispatch success action
        //     yield put(
        //         loginSuccess({
        //             user: result.data,
        //             token: result.data.token,
        //         })
        //     );

        //     // toast.success('Login Successful!');

        //     // Redirect (optional - component mein bhi kar sakte ho)
        //     // window.location.href = '/dashboard';
        // } else {
        //     yield put(loginFailure(result.error || 'Login failed'));
        //     // toast.error(result.error || 'Login failed');
        // }
    } catch (error) {
        console.error('Login Saga Error:', error);
        const message = error.response?.data?.error || 'Something went wrong';
        // yield put(loginFailure(message));
        // toast.error(message);
    }
}

// Watcher saga
export function* saga() {
    yield takeLatest(actionTypes.PostLogin, postLogin);
}