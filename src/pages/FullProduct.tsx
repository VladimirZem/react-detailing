import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Item from "../Components/itemShop";

import { addItem, minusItem, removeItem } from "../redux/Slices/cartSlice";




type ProductItems = {
    category: number;
    id: number;
    size: string;
    title: string;
    imageUrl: string;
    price: number;
    categoryName: string;
    brand: string;
    method: string;
    description: string;
    raiting: number;
    count: number;
}

const FullProduct: React.FC = () => {
    const { productId } = useParams();
    const [product, setProduct] = React.useState<ProductItems>();
    const [similarList, setSemilarList] = React.useState<ProductItems[]>();
    const [oftenList, setOftenList] = React.useState<ProductItems[]>()
    const itemCount = useSelector((state: any) => state.cart.items.find((obj: ProductItems) => product && obj.id === product.id))
    const addedCount = itemCount ? itemCount.count : 0



    const [description, setDescription] = React.useState(true)
    const [other, setOther] = React.useState(true)



    const dispatch = useDispatch();


    const onChangeDescriptionBtn: any = () => {
        setDescription(!description)
    }
    const onClickOtherBtn: any = () => {
        setOther(!other)
    }






    const category = product ? `category=${product.category}` : '';
    React.useEffect(() => {
        window.scroll(0, 0)


        async function fetchProduct() {
            try {
                Promise.all([
                    await axios.get(`https://41f1aaf4b6b26e63.mokky.dev/items/` + productId),
                    await axios.get(`https://41f1aaf4b6b26e63.mokky.dev/items?${category}`),
                    await axios.get(`https://41f1aaf4b6b26e63.mokky.dev/items?&sortBy=raiting`)
                ]).then(([
                    indexProduct,
                    products,
                    oftenBuy
                ]) => {
                    setProduct(indexProduct.data);
                    setSemilarList(products.data)
                    setOftenList(oftenBuy.data)
                })

            } catch (error) {
                alert('АХТУНГ ЕРОРРРРР');
                console.log(error);
            }

        }
        fetchProduct();

    }, [productId, category])





    if (!product || !similarList || !oftenList) {
        return (<span>Loading</span>)
    }


    const onClickAdd = () => {
        dispatch(addItem(product))
    }

    const onClickMinus = () => {
        dispatch(minusItem(product.id));
    }
    const removeProduct = () => {
        dispatch(removeItem(product.id))
    }

    const similar = similarList.map((obj: ProductItems) => obj.id !== product.id && <Item key={obj.id}  {...obj} />)
    similar.length = 4

    const often = oftenList.sort(() => Math.random() - 0.5).map((obj: ProductItems) => <Item key={obj.id}  {...obj} />);
    often.length = 4

    return (
        <div className="fullproduct container ">
            <div className="fullproduct__main">
                <div className="fullproduct__left-block">
                    {
                        product.size &&
                        <div className="fullproduct__size">
                            {product.size}
                        </div>
                    }
                    <img width={350} src={product.imageUrl} alt="" className="fullproduct__img" />
                </div>
                <div className="fullproduct__right-block">
                    <h1 className="fullproduct__product-title" >{product.title + ' ' + product.size}</h1>
                    <span className="fullproduct__product-brand"> Бренд: {product.brand}</span>
                    <div className="fullproduct__product-category"> Категория: {product.categoryName}</div>
                    <p className="fullproduct__price"> Цена:
                        <span>{product.price}</span>
                    </p>
                    {
                        addedCount > 0 ?
                            <div className="fullproduct__counter">
                                <div className="fullproduct__counter__inner" >
                                    <button onClick={onClickMinus} >
                                        -
                                    </button>
                                    <i>{addedCount}</i>
                                    <button onClick={onClickAdd}>
                                        +
                                    </button>
                                </div>
                                <button className="fullproduct__remove" onClick={removeProduct}>
                                    Удалить из корзины
                                </button>
                            </div>
                            :
                            <button onClick={onClickAdd} className="fullproduct__addCart">В корзину
                                <svg
                                    xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"
                                    fill="none" stroke="#069726" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h13M12 5l7 7-7 7" /></svg>
                            </button>
                    }
                </div>
            </div>
            <div className="fullproduct__description">
                <div className="description__inner">
                    <button onClick={() => { onChangeDescriptionBtn(!description) }} className={description ? 'active' : ''}> ОПИСАНИЕ </button>
                    <button onClick={() => { onChangeDescriptionBtn(!description) }} className={!description ? 'active' : ''}> СПОСОБ ПРИМЕНЕНИЯ </button>
                </div>
                <div className="desctiprion__text" >
                    {description ? product.description : product.method}
                </div>
            </div>
            <div className="fullproduct__similar">
                <div className="fullproduct__similar__btn">
                    <li onClick={() => { onClickOtherBtn(!other) }} className={other ? 'active' : 'fullproduct__simlar__btn'}>ПОХОЖИЕ </li>
                    <li onClick={() => { onClickOtherBtn(!other) }} className={!other ? 'active' : 'fullproduct__simlar__btn'}>С ЭТИМ ЧАСТО ПОКУПАЮТ </li>
                </div>
                <div className="fullproduct__similar__inner" >
                    {other ? similar : often}
                </div>
            </div>
        </div >
    )
};

export default FullProduct;