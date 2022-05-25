import { all } from 'redux-saga/effects';
import { adminSaga } from './admin.sagas';
import { authorizationSaga } from './auth.sagas';
import { productsSaga } from './products.sagas';
import { userSaga } from './user.sagas';

export default function* rootSaga() {
    yield all([
        authorizationSaga(),
        adminSaga(),
        productsSaga(),
        userSaga(),
    ]);
}
