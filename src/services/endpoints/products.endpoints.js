import { axiosInstance } from "../axiosInterceptor/interceptor";

// export const createFiltersQuery = (filters) => {
//     return filtrationRules.reduce((prev, curr) => {
//         const {filterName, dependence, dependencyValue} = curr;
//         const filterValue = filters[filterName];
//         if(filterValue){
//             if(dependence && filterValue === dependence){
//                 return prev + dependencyValue 
//             }
//             return prev + `${filterName}=${filterValue}&`
//         }
//         return prev
//     }, '')
//   }

// export const filtrationRules = [
//     {filterName: 'from_date'},
//     {filterName: 'to_date'},
//     {filterName: 'type'},
//     {filterName: 'page',},
//     {filterName: 'per_page',},
//     {filterName: 'search',},
//     {filterName: 'sort_on',},
//     {
//         filterName: 'statuses',
//         dependence: 'all',
//         dependencyValue: ''
//     },
//     {
//         filterName: 'sort_order',
//         dependence: 'desc',
//         dependencyValue: 'sort_order=desc'
//     },
// ]


// return Backend.client.get(`/v2/orders?${createFiltersQuery({page,per_page,search, statuses, sort_on, sort_order})}`); 


export const getProductsEndpoint = ({ page = 1, pageSize = 6, filters = {}, sortBy = '', order = 0, search = '' }) => {
    let filter = '';
    sortBy = sortBy && `SortBy=${sortBy}`
    search = search && `&Search=${search}`
    for (const key in filters) {
        if (Object.hasOwnProperty.call(filters, key)) {
            if(filters[key].length===0) continue
            filter+=`${key}=${filters[key].join(",")}&`
        }
    }
    return axiosInstance.get(`/products?${filter}&PageSize=${pageSize}&PageNumber=${page}&${sortBy}&OrderBy=${order}${search}`);
};

export const getBrandsEndpoint = () => {
    return axiosInstance.get('/brands');
};

export const getSizesEndpoint = () => {
    return axiosInstance.get('/sizes');
};

export const getSeasonsEndpoint = () => {
    return axiosInstance.get('/seasons');
};

export const getProductEndpoint = (id) => {
    return axiosInstance.get(`/products/${id}`);
};

export const editProductEndpoint = (productId, product) => {
    return axiosInstance.put(`/products/${productId}`, product)
}

export const deleteProductEndpoint = (productId) => {
    return axiosInstance.delete(`/products/${productId}`)
}