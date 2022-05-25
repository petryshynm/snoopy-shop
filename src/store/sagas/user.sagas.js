import { call, all, takeLatest, put } from 'redux-saga/effects';
import { createOrderEndpoint, getUserOrdersEndpoint } from '../../services/endpoints/user.endpoints';
import { createOrderFailure, createOrderSuccess, getUserOrdersFailure, getUserOrdersSuccess } from '../actions/user/user.actions';
import { UserTypes } from '../actions/user/user.types';

function* getUserOrdersWorker(action) {
    const queryParams = action.payload;
    try {
        const { data } = yield call(getUserOrdersEndpoint, queryParams);
        yield put(getUserOrdersSuccess(data));
    } catch (error) {
        yield put(getUserOrdersFailure(error.message));
    }
}

function* createNewOrderWorker(action) {
    const order = action.payload;
    try {
        yield call(createOrderEndpoint, order);
        yield put(createOrderSuccess('Замовлення було успішно опрацьовано.'));
        yield localStorage.removeItem('cart');
    } catch (error) {
        yield put(createOrderFailure(error.message));
    }
}



export function* userSaga() {
    yield all([
        takeLatest(UserTypes.GET_USER_ORDERS_REQUEST, getUserOrdersWorker),
        takeLatest(UserTypes.CREATE_ORDER_REQUEST, createNewOrderWorker),
    ]);
}
