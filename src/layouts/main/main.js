import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsRequest } from '../../store/actions/products/products.actions'
import { Filters } from '../../components/filters'
import { Loader } from '../../components/loader'
import { ProdList } from '../../components/productsList';
import './main.scss'

export const Main = ({search, setOpen}) => {
    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.products)
    const [filterData, setFilterData] = useState({})
    const [order, setOrder] = useState(1); //asc
    const [pageData, setPageData] = useState({});

    useEffect(() => {
        dispatch(getProductsRequest({...pageData, order, ...filterData, search}))
    }, [pageData, order, filterData, search])
        
    return <>
        {loading ? <Loader/> : null}
        <div className="main">
            <Filters setFilterData={setFilterData} setOrder={setOrder}/>
            <ProdList 
                handleOpen={() => setOpen(true)}
                setPageData={setPageData}
            />
        </div>
    </>
}