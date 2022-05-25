import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/loader";
import { createOrderRequest } from "../../store/actions/user/user.actions";
import { Paths } from '../../services/routes/paths';
import './cart.scss';

export const Cart = () => {
    const navigate = useNavigate()
    const { loading } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [])
    
    const totalPrice = useMemo(() => cart.reduce((prev, curr) => prev += curr.total, 0),[cart]) 

    const handleDelete = (index) => {
        const newArr = [...cart];
        newArr.splice(index,1);
        setCart(newArr)
        localStorage.setItem('cart',JSON.stringify(newArr))
    }

    const handleSubmit = () => {
        const order = {
            products: cart.map((p) => ({ productId: p.id, count: p.amount})),
            totalPrice
        }
        dispatch(createOrderRequest(order))
    }

    return <>
        {loading ? <Loader/> : null}
        <div className="cart__wrapper">
            <div className="cart">
                <ul className="cart-labels bordered">
                    <li className="item">Продукт</li>
                    <li className="price">Ціна</li>
                    <li className="quantity">Кількість</li>
                    <li className="subtotal">Загалом</li>
                </ul>
                <div className="cart-products">
                    {cart.length
                        ? cart.map(({ name, id, amount, price, newPrice, brand, images, size, total, season }, index) => (
                            <div key={id} className="cart-item">
                                <div className="cart-item-info item" onClick={() => navigate(`${Paths.PRODUCT}/${id}`)}>
                                    <div className="product-image">
                                        <img src={images[0].url} alt={name}/>
                                    </div>
                                    <div className="product-details">
                                        <div>
                                            <b><span className="item-quantity">{amount}</span> x {name} </b> 
                                            {brand}
                                        </div>
                                        <div><b>{season}, Розмір {size}</b></div>
                                        <div>Код продукту - {id}</div>
                                    </div>
                                </div>
                                <div className="price">{newPrice || price} ₴</div>
                                <div className="quantity">{amount}</div>
                                <div className="subtotal">{total.toFixed(2)}₴</div>
                                <button className="remove-btn button button__secondary" onClick={() => handleDelete(index)}>
                                    <div className="inner">Видалити</div>
                                </button>
                            </div>
                        ))
                        : <div className="blank-list">Ви ще нічого не обрали</div>
                    }
                </div>
            </div>
            <aside className="summary">
                <div className="summary-total-items">Продуктів у вашому кошику: <span className="total-items">{cart.length}</span></div>
                <div className="summary-total bordered">
                    <div className="title">До сплати</div>
                    <div>{totalPrice} ₴</div>
                </div>
                <button disabled={!cart.length} className="summary-checkout" onClick={handleSubmit}>
                    Зробити замовлення
                </button>
            </aside>

        </div>
    </>
}
