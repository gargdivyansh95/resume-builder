import { all } from 'redux-saga/effects';
// import * as auth from '../modules/Auth/Auth.saga';

export default function* rootSaga() {
    yield all([
        // auth.saga(),
    ]);
}
