import { useSelector, useDispatch } from "react-redux";
import styles from "./ItemShop.module.scss"
import { CartItem, addItem } from "../../redux/Slices/cartSlice";
import { Link } from "react-router-dom";

type itemShopProps = {
    id: number;
    title: string;
    imageUrl: string;
    price: number;
}

type cartItem = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    count: number;
}


const Item: React.FC<itemShopProps> = ({ id, title, imageUrl, price }) => {
    const dispatch = useDispatch();
    const itemCount = useSelector((state: any) => state.cart.items.find((obj: cartItem) => obj.id === id))

    const addedCount = itemCount ? itemCount.count : 0
    const onClickAdd = () => {
        const item: CartItem = {
            id,
            title,
            price,
            imageUrl,
            count: 0
        };
        dispatch(addItem(item))
    }

    return (
        <div className={styles.сontent} >
            <div className={styles.cards__list} >
                <div className={styles.card} >
                    <span className={styles.availability} >В наличии</span>
                    <Link to={`/shop/${id}`}>
                        <img className={styles.image__item} src={imageUrl} alt='' />
                    </Link>
                    <span className={styles.title__card} >{title}</span>
                    <div className={styles.footer__card} >
                        <span className={styles.card__price} >{price} руб.</span>
                        <button onClick={onClickAdd} className={styles.btn__card} > В корзину
                            {addedCount > 0 && <i className={styles.count} >{addedCount}</i>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Item;

