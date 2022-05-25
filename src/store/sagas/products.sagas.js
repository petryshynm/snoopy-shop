import { call, all, takeLatest, put } from 'redux-saga/effects';
import { ProductTypes } from '../actions/products/products.types';

import { 
    getBrandsEndpoint,
    getProductEndpoint, 
    getProductsEndpoint,
    getSeasonsEndpoint,
    getSizesEndpoint,
    deleteProductEndpoint,
    editProductEndpoint,
} from '../../services/endpoints/products.endpoints';

import { 
    getBrandsFailure,
    getBrandsSuccess,
    getProductRequest, 
    getProductsFailure, 
    getProductsSuccess, 
    getProductSuccess,
    getSeasonsFailure,
    getSeasonsSuccess,
    getSizesFailure,
    getSizesSuccess,
    deleteProductFailure,
    deleteProductSuccess,
    editProductSuccess,
} from '../actions/products/products.actions';

function* getProductsWorker(action) {
    const queryParams = action.payload;
    try {
        const { data } = yield call(getProductsEndpoint, queryParams);
        yield put(getProductsSuccess(data));
    } catch (error) {
        yield put(getProductsFailure(error.message));
    }
}

function* getProductWorker(action) {
    const id = action.payload;
    try {
        const { data } = yield call(getProductEndpoint, id);
        yield put(getProductSuccess(data.data));
    } catch (error) {
        yield put(getProductRequest(error.message));
    }
}

function* getBrandsWorker() {
    try {
        const { data } = yield call(getBrandsEndpoint);
        yield put(getBrandsSuccess(data.data));
    } catch (error) {
        yield put(getBrandsFailure(error.message));
    }
}

function* getSizesWorker() {
    try {
        const { data } = yield call(getSizesEndpoint);
        yield put(getSizesSuccess(data.data));
    } catch (error) {
        yield put(getSizesFailure(error.message));
    }
}

function* getSeasonsWorker() {
    try {
        const { data } = yield call(getSeasonsEndpoint);
        yield put(getSeasonsSuccess(data.data));
    } catch (error) {
        yield put(getSeasonsFailure(error.message));
    }
}

function* productEditWorker(action) {
    const productId = action.payload;
    try {
        const { data } = yield call(editProductEndpoint, productId);
        yield put(editProductSuccess(data.data));
    } catch (error) {
        yield put(editProductSuccess(error.message));
    }
}

function* productDeleteWorker(action){
    const productId = action.payload;
    try {
        yield call(deleteProductEndpoint, productId);
        yield put(deleteProductSuccess(productId));
    } catch (error) {
        yield put(deleteProductFailure(error.message));
    }
}

export function* productsSaga() {
    yield all([
        takeLatest(ProductTypes.GET_PRODUCTS_REQUEST, getProductsWorker),
        takeLatest(ProductTypes.GET_PRODUCT_REQUEST, getProductWorker),
        takeLatest(ProductTypes.GET_BRANDS_REQUEST, getBrandsWorker),
        takeLatest(ProductTypes.GET_SEASONS_REQUEST, getSeasonsWorker),
        takeLatest(ProductTypes.GET_SIZES_REQUEST, getSizesWorker),
        takeLatest(ProductTypes.EDIT_PRODUCT_REQUEST, productEditWorker),
        takeLatest(ProductTypes.DELETE_PRODUCT_REQUEST, productDeleteWorker),
    ]);
}
