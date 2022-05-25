import { axiosInstance } from "../axiosInterceptor/interceptor";

export const createProductEndpoint = (product) => {
    return axiosInstance.post('/products', product);
};

export const getOrdersEndpoint = ({ page = 1, pageSize = 3}) => {
    return axiosInstance.get(`/orders?PageSize=${pageSize}&PageNumber=${page}`)
}