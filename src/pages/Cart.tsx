import CartEmpty from '../Components/CartEmpty';
import CartItem from '../Components/CartItem';
import { useSelector, useDispatch } from "react-redux";
import { clearItems, selectCart } from '../redux/Slices/cartSlice';


type cartItem = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    count: number;
}

const Cart: React.FC = () => {
    const { totalPrice, items } = useSelector(selectCart)
    const dispatch = useDispatch();
    const totalCount = items.reduce((sum: number, item: cartItem) => sum + item.count, 0)

    const onClickClear = () => {
        if (window.confirm('Точно очистить?')) {
            dispatch(clearItems())
        }
    }

    if (!totalPrice) {
        return <CartEmpty />
    }

    return (
        <div className="cart__inner container">
            <div className="cart__header">
                <h1 className='title__cart' >Корзина</h1>
                <button onClick={onClickClear} className="clear__cart">Очистить корзину</button>
            </div>
            <div className='cart__items__list'>
                {
                    items.map((item: cartItem) => <CartItem key={item.id} {...item} />)
                }
            </div>
            <div className="cart__footer">
                <span>Количество товаров: {totalCount} шт. </span>
                <div>Сумма заказа: <span className='total__price__cart'>{totalPrice} руб.</span>  </div>
            </div>
            <div className="btn__inner">
                <button className="cart__buy">Оформить</button>
            </div>
        </div>
    )
};

export default Cart;