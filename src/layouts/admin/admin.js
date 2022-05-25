import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Pagination } from "antd";
import { initialValues, AdminValues, validationSchema } from './constants';
import { createNewProductRequest } from "../../store/actions/admin/admin.actions";
import { SForm } from "../../components/form";
import { OrdersTable } from "../../components/ordersTable";
import { getOrdersRequest } from "../../store/actions/admin/admin.actions";
import { ProdTable } from "../../components/productsTable";
import { Loader } from "../../components/loader";
import './admin.scss';

export const Admin = () => {
    const dispatch = useDispatch();
    const [ tabIndex, setTabIndex ] = useState(0)
    const [ pageData, setPageData ] = useState({});
    const { loading, orders, message, ordersTotal, error } = useSelector(state => state.admin)

    useEffect(()=>{
        dispatch(getOrdersRequest(pageData))
    },[pageData])

    const onSubmit = ({files, ...otherFields}) => {
        const form = new FormData();
        Object.entries(otherFields).forEach(([key, value]) => form.append(key.charAt(0).toUpperCase() + key.slice(1), value))
        files.forEach((img) => form.append('Images', img))
        dispatch(createNewProductRequest(form))
    }

    const tabProps = (index) => ({
        id: `vertical-tab--${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    })

    const currentTab = useMemo(() => {
        switch(tabIndex){
            case 0:
                return <div className="orders">
                    <OrdersTable
                        orders={orders}
                        total={ordersTotal}
                        loading={loading}
                        handlePageChange={setPageData}
                        showReceiver
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
            case 1:
                return <ProdTable/>
            case 2:
                return <SForm 
                    loading={loading}
                    message={message}
                    error={error}
                    validationSchema={validationSchema}
                    initialValues={initialValues} 
                    formValues={AdminValues} 
                    onSubmit={onSubmit}
                    buttonText={'Додати'}
                    title={'Додайте продукт'}
                />
            default:
                return <></>
        }
    }, [tabIndex, orders, pageData])
    
    return <div className="admin">
        {loading ? <Loader/> : null}
        <Tabs 
            orientation="vertical"
            variant="scrollable"
            value={tabIndex}
            onChange={(e, index) => setTabIndex(index)}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' } }>
            <Tab label="Замовлення" {...tabProps(0)} />
            <Tab label="Продукти" {...tabProps(1)} />
            <Tab label="Додати продукт" {...tabProps(2)} />
        </Tabs>
        <div className="tab-wrapper">{currentTab}</div>
    </div>
}