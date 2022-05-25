import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/loader";
import { OrdersTable } from "../../components/ordersTable";
import { getUserOrdersRequest } from '../../store/actions/user/user.actions';
import { Pagination } from 'antd';
import './account.scss';
import { Paths } from "../../services/routes/paths";

export const Account = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [pageData, setPageData] = useState({});
    const { loading, orders, ordersTotal } = useSelector(state => state.user)

    useEffect(()=>{
        dispatch(getUserOrdersRequest(pageData))
    },[pageData])

    return <>
        {loading ? <Loader/> : null}
        <div className="order-wrapper">
            <button type="button" onClick={()=> navigate(Paths.CART)} className="button button__main">
                <div className="inner">Кошик</div>
            </button>
            <div className="orders">
                <div className="orders__header">Мої покупки:</div>
                <OrdersTable
                    handlePageChange={setPageData}
                    total={ordersTotal}
                    orders={orders}
                    loading={loading}
                />
                <Pagination
                    showSizeChanger
                    onChange={(page, pageSize) => setPageData({page, pageSize})}
                    pageSizeOptions={[3, 4, 6, 8]}
                    defaultCurrent={1}
                    defaultPageSize={3}
                    total={ordersTotal}
                />
            </div>
        </div>
    </>
}