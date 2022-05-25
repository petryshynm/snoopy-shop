import { applyMiddleware, combineReducers, createStore,  compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { configureStore } from '@reduxjs/toolkit'

import { AuthReducer } from './reducers/auth.reducer';
import { AdminReducer } from './reducers/admin.reducer';
import { ProductReducer } from './reducers/products.reducer';
import { UserReducer } from './reducers/user.reducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    auth: AuthReducer,
    admin: AdminReducer,
    products: ProductReducer,
    user: UserReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);