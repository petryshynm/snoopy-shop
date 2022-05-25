import { axiosInstance } from "../axiosInterceptor/interceptor";

export const createOrderEndpoint = (order) => {
    return axiosInstance.post('/orders', order);
};

export const getUserOrdersEndpoint = ({ page = 1, pageSize = 3}) => {
    return axiosInstance.get(`/user/orders?PageSize=${pageSize}&PageNumber=${page}`)
}