import { AdminTypes } from "./admin.types"

export const createNewProductRequest = (product) => ({
    type: AdminTypes.CREATE_NEW_PRODUCT_REQUEST,
    payload: product
})

export const createNewProductSuccess = (message) => ({
    type: AdminTypes.CREATE_NEW_PRODUCT_SUCCESS,
    payload: message
})

export const createNewProductFailure = (error) => ({
    type: AdminTypes.CREATE_NEW_PRODUCT_FAILURE,
    payload: error
})


export const getOrdersRequest = (queryParams) => ({
    type: AdminTypes.GET_ORDERS_REQUEST,
    payload: queryParams
})

export const getOrdersSuccess = (orders) => ({
    type: AdminTypes.GET_ORDERS_SUCCESS,
    payload: orders
})

export const getOrdersFailure = (error) => ({
    type: AdminTypes.GET_ORDERS_FAILURE,
    payload: error
})