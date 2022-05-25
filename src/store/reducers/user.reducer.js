import { UserTypes } from "../actions/user/user.types"

const initialState = { 
    loading: false,
    error: false,
    message: '',
    orders: [],
    ordersTotal: 0
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type){
        case UserTypes.GET_USER_ORDERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                message: ''
            }
        case UserTypes.GET_USER_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                orders: action.payload.items,
                ordersTotal: action.payload.total
            }
        case UserTypes.GET_USER_ORDERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload
            }
        case UserTypes.CREATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                message: ''
            }
        case UserTypes.CREATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                message: action.payload
            }
        case UserTypes.CREATE_ORDER_FAILURE:
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