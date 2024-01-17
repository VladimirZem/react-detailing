import { Link } from "react-router-dom";


const CartEmpty: React.FC = () => {
    return (
        <div className="cart__empty container ">
            <h1>Корзина пуста <span>&#128530;</span> </h1>
            <p className="description__empty" >Попробуйте добавить товар, может поможет <span>&#128513;</span></p>
            <img width={500} src='/image/Cart/Empty.png' alt='' />
            <Link to='/shop' >
                <button className="btn__empty">В магазин</button>
            </Link>
        </div>
    )
};

export default CartEmpty;