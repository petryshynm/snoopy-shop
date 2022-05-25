import { Table } from 'antd';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductRequest, editProductRequest, getProductsRequest } from '../../store/actions/products/products.actions';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Popconfirm, Pagination } from "antd";
import './productsTable.scss';


export const ProdTable = () => {
    const dispatch = useDispatch();
    const [ pageData, setPageData] = useState({});
    const { loading, products, productsTotal } = useSelector(state => state.products)


    useEffect(() => {
        dispatch(getProductsRequest({...pageData}))
    }, [pageData])

    const handleDelete = (id) => {
        dispatch(deleteProductRequest(id))
    }

    const handleEdit = (id) => {
        dispatch(editProductRequest(id))
    }

    const columns = [
        {
          title: 'Назва',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Бренд',
          dataIndex: 'brand',
          key: 'brand',
        },
        {
            title: 'Ціна',
            render: (text, prod, index) => prod.newPrice || prod.price
        },
        {
            title: 'Кількість на складі',
            dataIndex: 'quantityInStock',
            key: 'quantityInStock',
        },
        {
            title: "Видалити",
            align: "center",
            width: "100px",
            render: (text, { id }, index) => (
              <span>
                <Popconfirm title="Ви впевнені, що бажаєте видалити?" onConfirm={() => handleDelete(id)}>
                    <DeleteOutlined style={{ color: "red", marginLeft: "20px" }} />
                </Popconfirm>
                {/* <EditOutlined style={{ marginLeft: "20px" }} onClick={() => handleEdit(id)} /> */}
              </span>
            ),
        },
        
    ];

    return <>
        <Table
            pagination={false}
            dataSource={products} 
            columns={columns}
            loading={loading}
        />;
        <Pagination
            showSizeChanger
            onChange={(page, pageSize) => setPageData({page, pageSize})}
            pageSizeOptions={[4, 6, 8, 12]}
            defaultCurrent={1}
            defaultPageSize={6}
            total={productsTotal}
        />
    </>
    
}