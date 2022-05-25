import { Loader } from '../loader';
import './ordersTable.scss';

export const OrdersTable = ({loading, orders, showReceiver}) => {

    return <>
        {loading ? <Loader/> : null}
        {orders.length
            ? <ul className="orders__list">
                {orders?.map((order) => (
                    <li className="orders__item" key={order.id}>
                        <div className="orders__date">
                            <div>
                                {order.date.split('T')[0]} {order.date.split('T')[1].split('.')[0]}
                            </div>
                            <div>{showReceiver && order.receiverEmail}</div>
                        </div>
                        <div className='orders__labels'>
                            <div>Назва продукту</div>
                            <div>Кількість</div>
                        </div>
                        <ul>
                            {order.details.map((detail) => (
                                <li className="order" key={detail.id}>
                                    <div className="order__title">{detail.product.name}</div>
                                    <div className="order__amount">{detail.count}</div>
                                </li>
                            ))}
                        </ul>
                        <div className="orders__price">Ціна: {order.totalPrice}₴</div>
                    </li>
                ))}
            </ul>
            : <div className="blank-list">Ви ще нічого не купили</div>
        }
    </>
}