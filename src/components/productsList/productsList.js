import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Rating } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { addToModalCart } from '../../store/actions/products/products.actions'
import { Pagination } from 'antd';
import { Paths } from '../../services/routes/paths';
import './productsList.scss'

export const ProdList = ({handleOpen, setPageData}) => {
    const { products, productsTotal } = useSelector(state => state.products)
    const { userRole, authentificated } = useSelector(state => state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (prod) => {
        dispatch(addToModalCart(prod))
        handleOpen()
    } 
    
    return <div className="products">
        {!products.length 
            ? <span className="not-found">Не знайдено жодного продукту</span> 
            : products.map((prod) => {
                const { price, newPrice, name, images, id,  quantityInStock} = prod;
                const rating = 5;
                const isUser = quantityInStock && authentificated && userRole === "User"
                return (
                    <div className="products-card" key={id}>
                        <div className="products-card__img" onClick={()=> navigate(`${Paths.PRODUCT}/${id}`)}>
                            <img className="products-card__img-in" src={images[0].url} alt="Board" />
                            <img className="products-card__img-out" src={images[1]?.url || images[0].url} alt="Board" />
                        </div>
                        <div className="products-card__info">
                            <div className="products-card__title">Дека {name}</div>
                            <Rating size="small" name="read-only" precision={0.5} readOnly value={rating}/>
                            <div className="products-card__price">
                                {newPrice 
                                    ? <>
                                        <div className="products-card__price-old">{price+'₴'}</div>
                                        <div className="products-card__price-new">{newPrice+'₴'}</div>
                                    </>
                                    : <div className="products-card__price-new">{price+'₴'}</div>
                                }
                            </div>
                        </div>
                        <button 
                            type="button" 
                            onClick={() => quantityInStock && handleClick(prod)} 
                            disabled={!isUser} 
                            className={`button products-card__buy ${isUser ? "button__main" : "button__secondary"}`}>
                            <div className="inner">В кошик</div>
                        </button>
                    </div>
                )
            })
        }
        <Pagination
            showSizeChanger
            onChange={(page, pageSize) => setPageData({page, pageSize})}
            pageSizeOptions={[6, 12, 24, 48]}
            defaultCurrent={1}
            defaultPageSize={6}
            total={productsTotal}
        />
    </div>
}