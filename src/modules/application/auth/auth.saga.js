import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { actionTypes, authActions } from './auth.action';

// Login API call
export function* postLogin(action) {
    const body = action.payload;
    try {
        const response = yield call(axios.post, '/api/auth/login', body);
        if (response.status === 200) {
            yield put(authActions.postLoginSuccess(response.data));
            action.onSuccess(response.data);
        } else {
            action.onError(response.data);
        }
    } catch (error) {
        console.error('Login Saga Error:', error);
        action.onError(error.response.data);
    }
}

// Watcher saga
export function* saga() {
    yield takeLatest(actionTypes.PostLogin, postLogin);
}