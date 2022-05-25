import { call, all, takeLatest, put } from 'redux-saga/effects';
import { 
    createNewProductFailure,
    createNewProductSuccess,
    getOrdersFailure,
    getOrdersSuccess
} from '../actions/admin/admin.actions';
import { AdminTypes } from '../actions/admin/admin.types';
import { 
    getOrdersEndpoint,
    createProductEndpoint
} from '../../services/endpoints/admin.endpoints';

function* productCreateWorker(action) {
    const prod = action.payload;
    try {
        const {data} = yield call(createProductEndpoint, prod);
        yield put(createNewProductSuccess("Продукт успішно створено"));
    } catch (error) {
        yield put(createNewProductFailure(error.message));
    }
}



function* getOrdersWorker(action) {
    const queryParams = action.payload;
    try {
        const { data } = yield call(getOrdersEndpoint, queryParams);
        yield put(getOrdersSuccess(data));
    } catch (error) {
        yield put(getOrdersFailure(error.message));
    }
}


export function* adminSaga() {
    yield all([
        takeLatest(AdminTypes.CREATE_NEW_PRODUCT_REQUEST, productCreateWorker),
        takeLatest(AdminTypes.GET_ORDERS_REQUEST, getOrdersWorker),
    ]);
}