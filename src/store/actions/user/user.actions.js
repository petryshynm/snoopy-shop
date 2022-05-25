import { UserTypes } from "./user.types"

export const getUserOrdersRequest = (queryParams) => ({
    type: UserTypes.GET_USER_ORDERS_REQUEST,
    payload: queryParams
})

export const getUserOrdersSuccess = (orders) => ({
    type: UserTypes.GET_USER_ORDERS_SUCCESS,
    payload: orders
})

export const getUserOrdersFailure = (error) => ({
    type: UserTypes.GET_USER_ORDERS_FAILURE,
    payload: error
})

export const createOrderRequest = (orders) => ({
    type: UserTypes.CREATE_ORDER_REQUEST,
    payload: orders
})

export const createOrderSuccess = (message) => ({
    type: UserTypes.CREATE_ORDER_SUCCESS,
    payload: message,
})

export const createOrderFailure = (error) => ({
    type: UserTypes.CREATE_ORDER_FAILURE,
    payload: error
})

