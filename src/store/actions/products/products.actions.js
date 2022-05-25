import { ProductTypes } from "./products.types"

export const getProductRequest = (id) => ({
    type: ProductTypes.GET_PRODUCT_REQUEST,
    payload: id
})

export const getProductSuccess = (product) => ({
    type: ProductTypes.GET_PRODUCT_SUCCESS,
    payload: product
})

export const getProductFailure = (error) => ({
    type: ProductTypes.GET_PRODUCT_FAILURE,
    payload: error
})

export const getProductsRequest = (queryParams) => ({
    type: ProductTypes.GET_PRODUCTS_REQUEST,
    payload: queryParams
})

export const getProductsSuccess = (products) => ({
    type: ProductTypes.GET_PRODUCTS_SUCCESS,
    payload: products
})

export const getProductsFailure = (error) => ({
    type: ProductTypes.GET_PRODUCTS_FAILURE,
    payload: error
})

export const getSizesRequest = () => ({
    type: ProductTypes.GET_SIZES_REQUEST,
})

export const getSizesSuccess = (sizes) => ({
    type: ProductTypes.GET_SIZES_SUCCESS,
    payload: sizes
})

export const getSizesFailure = (error) => ({
    type: ProductTypes.GET_SIZES_FAILURE,
    payload: error
})

export const getSeasonsRequest = () => ({
    type: ProductTypes.GET_SEASONS_REQUEST,
})

export const getSeasonsSuccess = (seasons) => ({
    type: ProductTypes.GET_SEASONS_SUCCESS,
    payload: seasons
})

export const getSeasonsFailure = (error) => ({
    type: ProductTypes.GET_SEASONS_FAILURE,
    payload: error
})

export const getBrandsRequest = () => ({
    type: ProductTypes.GET_BRANDS_REQUEST,
})

export const getBrandsSuccess = (brands) => ({
    type: ProductTypes.GET_BRANDS_SUCCESS,
    payload: brands
})

export const getBrandsFailure = (error) => ({
    type: ProductTypes.GET_BRANDS_FAILURE,
    payload: error
})

export const addToModalCart = (product) => ({
    type: ProductTypes.ADD_TO_CART,
    payload: product 
})

export const editProductRequest = (id) => ({
    type: ProductTypes.EDIT_PRODUCT_REQUEST,
    payload: id
})

export const editProductSuccess = (id) => ({
    type: ProductTypes.EDIT_PRODUCT_SUCCESS,
    payload: id
})

export const editProductFailure = (error) => ({
    type: ProductTypes.EDIT_PRODUCT_FAILURE,
    payload: error
})

export const deleteProductRequest = (id) => ({
    type: ProductTypes.DELETE_PRODUCT_REQUEST,
    payload: id
})

export const deleteProductSuccess = (id) => ({
    type: ProductTypes.DELETE_PRODUCT_SUCCESS,
    payload: id
})

export const deleteProductFailure = (error) => ({
    type: ProductTypes.DELETE_PRODUCT_FAILURE,
    payload: error
})