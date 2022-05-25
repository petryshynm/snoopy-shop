import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Rating } from '@mui/material';
import { Carousel } from 'react-bootstrap';
import { getProductRequest } from '../../store/actions/products/products.actions';
import { Loader } from '../loader'
import { addToModalCart } from '../../store/actions/products/products.actions';
import './productsItem.scss'

export const ProdItem = ({setOpen}) => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { loading, productInfo } = useSelector(state => state.products)
    const { userRole, authentificated } = useSelector(state => state.auth)
    
    useEffect(()=>{
        dispatch(getProductRequest(id))
    }, [id])

    const handleClick = (prod) => {
        dispatch(addToModalCart(prod))
        setOpen(true)
    } 

    const renderedProduct = useMemo(() => {
        if(!productInfo) return <></>
        const { price, newPrice, name,size, color, brand, season, images , fullSize, quantityInStock} = productInfo;
        const isUser = quantityInStock && authentificated && userRole === "User"
        const rating = 5;
        return (
            <>
                <div>
                    <Carousel interval={20000} variant="dark">
                        {images.map((img) => (
                            <Carousel.Item key={img.id}>
                                <div><img src={img?.url} alt="Deck"/></div>
                            </Carousel.Item>
                        ))}
                    </Carousel>

                    <div className="product-profile__info">
                        <div className="product-profile__rating">
                            <div>Оцінка SS:</div>
                            <Rating size="medium" name="read-only" precision={0.5} readOnly value={rating}/>
                        </div>
                        <div className="product-profile__title">Дека {name}</div>
                        <div className="product-profile__available">{quantityInStock ? "Є в наявності" : "Немає в наявності"}</div>
                        <div className="product-profile__price">
                            {newPrice 
                                ? <>
                                    <div className="product-profile__price-new">{newPrice+'₴'}</div>
                                    <div className="product-profile__price-old">{price+'₴'}</div>
                                </>
                                : <div className="product-profile__price-new">{price+'₴'}</div>
                            }
                        </div>
                        
                        <button type="button" 
                            disabled={!isUser} 
                            onClick={() => quantityInStock && handleClick(productInfo)} 
                            className={`button ${isUser ? " button__main" : " button__secondary"}`}>
                            <div className="inner">В кошик</div>
                        </button>
                        
                    </div>
                </div>
                <div className="product-profile__chars">
                    <div className="product-profile__block">
                        <div className="product-profile__header">Опис</div>
                        <ul>
                            <li>Розмір:<span>{fullSize}</span></li>
                            <li>Наждак:<span>-</span></li>
                        </ul>
                    </div>
                    <div className="product-profile__block">
                        <div className="product-profile__header">Характеристики</div>
                        <ul>
                            <li>Бренд:<span>{brand}</span></li>
                            <li>Колір:<span>{color}</span></li>
                            <li>Розмір деки:<span>{size}</span></li>
                            <li>Сезон надходження:<span>{season}</span></li>
                        </ul>
                    </div>
                    
                </div>
            </>
        )
    }, [productInfo])

    return <>
        {loading ? <Loader/> : null}
        <div className="product-profile">
            {renderedProduct}
        </div>
    </>

}