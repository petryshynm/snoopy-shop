import { Modal } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TextField } from '@mui/material';

export const CartModal = ({open, onClose}) => {
    const { modalCart } = useSelector(state => state.products)
    const [ amount, setAmount ] = useState(1);

    const handleClick = () => {
        const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
        const cartProduct = {
            ...modalCart,
            amount,
            total: ( modalCart.newPrice || modalCart.price )  * amount
        };
        const index = cart.findIndex(p => p.id === cartProduct.id);
        if (index === -1) {
            cart.push(cartProduct);
        } else {
            cart[index].amount += cartProduct.amount;
            cart[index].total +=  ( cartProduct.newPrice || cartProduct.price ) * cartProduct.amount;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        setAmount(1)
        onClose()
    }

    return <Modal
        aria-describedby="parent-modal-description"
        aria-labelledby="parent-modal-title"
        open={open}
        onClose={onClose}
        >
        <div className="ss-modal">
                <div>Продукт: {modalCart?.name}</div>
                <div>
                    Кількість:
                    <TextField 
                        fullWidth
                        max={modalCart?.quantityInStock} 
                        onChange={(e) => setAmount(parseInt(e.target.value))}
                        value={amount}
                        min="1" 
                        type="number" 
                        variant="standard"
                        error={!(amount && modalCart?.quantityInStock)}
                    />
                </div>
            <button 
                disabled={!(amount && amount <= modalCart?.quantityInStock)} 
                className={`button ${amount && amount <= modalCart?.quantityInStock ? "button__main" : "button__secondary"}`}
                onClick={handleClick}
                ><div className="inner">Додати в кошик</div>
            </button>
        </div>
    </Modal>
}