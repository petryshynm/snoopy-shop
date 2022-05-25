import { AdminTypes } from "../actions/admin/admin.types"
const initialState = { 
    loading: false,
    error: false,
    message: '',
    ordersTotal: 0,
    orders: [],
}

export const AdminReducer = (state = initialState, action) => {
    switch (action.type){
        case AdminTypes.CREATE_NEW_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                message: ''
            }
        case AdminTypes.CREATE_NEW_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload
            }
        case AdminTypes.CREATE_NEW_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                message: action.payload,
            }
        case AdminTypes.GET_ORDERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                message: ''
            }
        case AdminTypes.GET_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                orders: action.payload.items,
                ordersTotal: action.payload.total
            }
        case AdminTypes.GET_ORDERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload
            }
        default:
            return state
    }
}