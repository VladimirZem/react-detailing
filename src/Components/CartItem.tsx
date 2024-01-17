import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem, minusItem, CartItem } from "../redux/Slices/cartSlice";

type CartItemProps = {
    id: number;
    title: string;
    imageUrl: string;
    price: number;
    count: number;
}

const CartItemBlock: React.FC<CartItemProps> = ({ id, title, imageUrl, price, count }) => {

    const dispatch = useDispatch();

    const onClickPlus = () => {
        dispatch(addItem({
            id,
        } as CartItem));
    }
    const onClickMinus = () => {
        dispatch(minusItem(id));
    }

    const removeProduct = () => {
        dispatch(removeItem(id))
    }

    return (
        <div className="CartItem container">
            <div className="image__name">
                <img width={150} height={150} src={imageUrl} alt='' />
                <div className="name__product">{title}</div>
            </div>
            <div className="count__product">
                <button onClick={onClickMinus} className="minus__cart">-</button>
                <span>{count}</span>
                <button onClick={onClickPlus} className="plus__cart">+</button>
            </div>
            <div className="total__price">{price * count}p</div>
            <button onClick={removeProduct} className="remove__product">Х</button>
        </div>
    )
};

export default CartItemBlock;