import { ProductTypes } from "../actions/products/products.types"

const initialState = { 
    loading: false,
    error: false,
    message: '',
    products: [],
    productInfo: null,
    brands: [],
    seasons: [],
    sizes: [],
    modalCart: null,
    productsTotal: 0
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type){
        case (ProductTypes.ADD_TO_CART):
            return {
                ...state,
                modalCart: action.payload
            }
        case (ProductTypes.GET_PRODUCTS_REQUEST):
            return {
                ...state,
                loading: true,
                error: false,
                message: '',
            }
        case (ProductTypes.GET_PRODUCTS_SUCCESS):
            return {
                ...state,
                loading: false,
                error: false,
                message: '',
                products: action.payload.items,
                productsTotal: action.payload.total
            }
        case (ProductTypes.GET_PRODUCTS_FAILURE):
            return {
                ...state,
                loading: false,
                error: false,
                message: action.payload,
            }
        case (ProductTypes.GET_BRANDS_REQUEST):
            return {
                ...state,
                loading: true,
                error: false,
                message: '',
            }
        case (ProductTypes.GET_BRANDS_SUCCESS):
            return {
                ...state,
                loading: false,
                error: false,
                message: '',
                brands: action.payload
            }
        case (ProductTypes.GET_BRANDS_FAILURE):
            return {
                ...state,
                loading: false,
                error: false,
                message: action.payload,
            }
        case (ProductTypes.GET_SEASONS_REQUEST):
            return {
                ...state,
                loading: true,
                error: false,
                message: '',
            }
        case (ProductTypes.GET_SEASONS_SUCCESS):
            return {
                ...state,
                loading: false,
                error: false,
                message: '',
                seasons: action.payload
            }
        case (ProductTypes.GET_SEASONS_FAILURE):
            return {
                ...state,
                loading: false,
                error: false,
                message: action.payload,
            }
        case (ProductTypes.GET_SIZES_REQUEST):
            return {
                ...state,
                loading: true,
                error: false,
                message: '',
            }
        case (ProductTypes.GET_SIZES_SUCCESS):
            return {
                ...state,
                loading: false,
                error: false,
                message: '',
                sizes: action.payload
            }
        case (ProductTypes.GET_SIZES_FAILURE):
            return {
                ...state,
                loading: false,
                error: false,
                message: action.payload,
            }
        case (ProductTypes.GET_PRODUCT_REQUEST):
            return {
                ...state,
                loading: true,
                error: false,
                message: '',
            }
        case (ProductTypes.GET_PRODUCT_SUCCESS):
            return {
                ...state,
                loading: false,
                error: false,
                message: '',
                productInfo: action.payload
            }
        case (ProductTypes.GET_PRODUCT_FAILURE):
            return {
                ...state,
                loading: false,
                error: false,
                message: action.payload,
            }
        case ProductTypes.DELETE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                message: ''
            }
        case ProductTypes.DELETE_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload
            }
        case ProductTypes.DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                message: '',
                products: state.products.filter((p) => p.id !== action.payload),
                productsTotal: --state.productsTotal
            }
        case ProductTypes.EDIT_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                message: ''
            }
        case ProductTypes.EDIT_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload
            }
        case ProductTypes.EDIT_PRODUCT_SUCCESS:
            const { id } = action.payload;
            const index = state.products.findIndex(p => p.id === id)
            return {
                ...state,
                loading: false,
                error: false,
                message: '',
                products: [
                    ...state.products.slice(0,index),
                    action.payload,
                    ...state.products.slice(index+1)
                ]
            }
        
        default:
            return state
    }
}