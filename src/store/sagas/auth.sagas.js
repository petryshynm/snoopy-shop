import { call, all, takeLatest, put } from 'redux-saga/effects';
import { loginUserFailure, 
    loginUserSuccess, 
    logoutUserFailure, 
    logoutUserSuccess, 
    registerUserSuccess, 
    registerUserFailure 
} from '../actions/auth/auth.actions';
import { AuthTypes } from '../actions/auth/auth.types';
import { loginUserEndpoint, logoutUserEndpoint, registerUserEndpoint} from '../../services/endpoints/auth.endpoints';
import { getAuthRole } from '../../services/utils';

function* loginUserWorker(action) {
    const body = action.payload;
    try {
        const { data } = yield call(
            loginUserEndpoint,
            body,
        );
        const role = getAuthRole(data.data)
        localStorage.removeItem('cart');
        yield localStorage.setItem('token', data.data);
        yield put(loginUserSuccess(role));
    } catch (error) {
        yield put(loginUserFailure(error.message));
    }
}

function* registerUserWorker(action) {
    const body = action.payload;
    try {
        const { data } = yield call(registerUserEndpoint, body);
        yield put(registerUserSuccess("Користувача було успішно створено."));
    } catch (error) {
        yield put(registerUserFailure("Користувач з такою ел.поштою вже існує."));
    }
}

function* logoutUserWorker() {
    try {
        // yield call(logoutUserEndpoint);
        yield localStorage.removeItem('token');
        yield put(logoutUserSuccess());
    } catch (error) {
        yield put(logoutUserFailure(error.message));
    }
}


export function* authorizationSaga() {
    yield all([
        takeLatest(AuthTypes.LOGIN_REQUEST, loginUserWorker),
        takeLatest(AuthTypes.LOGOUT_REQUEST, logoutUserWorker),
        takeLatest(AuthTypes.REGISTER_REQUEST, registerUserWorker),
    ]);
}
