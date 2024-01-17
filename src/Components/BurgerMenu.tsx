import React from 'react'
import { Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";

type BurgerMenuProps = {
    items: string[];
    totalPrice: number;
}


const BurgerMenu: React.FC<BurgerMenuProps> = ({ items, totalPrice }) => {
    const [burgerActive, setBurgerActive] = React.useState(false)
    const [burgerDetailingActive, setBurgerDetailingActive] = React.useState(false)
    const burger = React.useRef<HTMLImageElement>(null);
    const burgerImage = React.useRef<HTMLImageElement>(null);

    return (
        <div>
            <button className="burger__btn"
                onClick={() => setBurgerActive(!burgerActive)}
            >
                <CSSTransition
                    in={burgerActive}
                    nodeRef={burgerImage}
                    timeout={300}
                    classNames="burgerBtnChange"
                >
                    <img ref={burgerImage} src={burgerActive ? "/image/icon/cross.svg" : "/image/icon/menuOpen.svg"} alt='plus' className='burgerBtnChange' />
                </CSSTransition>

            </button>
            <CSSTransition
                in={burgerActive}
                nodeRef={burger}
                timeout={300}
                unmountOnExit
                classNames="burger"
            >
                <div ref={burger} className="burger__navBar burger">
                    <div className="burger__main">
                        <div className="burger__main__inner ">
                            <Link className="burger__link" to='/shop'>Товары</Link>
                            <div className="burger__main__detailing burger__link">
                                <span
                                    onClick={() => setBurgerDetailingActive(!burgerDetailingActive)}
                                >
                                    Детейлинг
                                </span>
                                {burgerDetailingActive ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
                                        <path d="M12 0L23.2583 16.5H0.74167L12 0Z" fill="white" />
                                    </svg>

                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
                                        <path d="M12 17L0.741669 0.5L23.2583 0.5L12 17Z" fill="white" />
                                    </svg>
                                }
                            </div>
                            {
                                burgerDetailingActive &&
                                <ul className="burger__main__list">
                                    {items.map((name, i) =>
                                        <div className="burger__main__container"
                                            key={i}
                                        >
                                            <Link className="burger__main__container__link" to={`/detailing/${name}`}
                                                onClick={() => setBurgerActive(false)}
                                            >
                                                {name}
                                            </Link>
                                        </div>
                                    )}
                                </ul>
                            }
                            <div className="burger__link" >Контакты</div>
                            <Link
                                to='/Cart'
                                className="burger__cart"
                                onClick={() => setBurgerActive(false)}
                            >
                                <span>Корзина товаров</span>
                                < button className="cart">
                                    <span>{totalPrice} P</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                        <path d="M10.4999 25.6666C11.1443 25.6666 11.6666 25.1443 11.6666 24.5C11.6666 23.8556 11.1443 23.3333 10.4999 23.3333C9.85559 23.3333 9.33325 23.8556 9.33325 24.5C9.33325 25.1443 9.85559 25.6666 10.4999 25.6666Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M23.3334 25.6666C23.9777 25.6666 24.5001 25.1443 24.5001 24.5C24.5001 23.8556 23.9777 23.3333 23.3334 23.3333C22.6891 23.3333 22.1667 23.8556 22.1667 24.5C22.1667 25.1443 22.6891 25.6666 23.3334 25.6666Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M1.16675 1.16669H5.83341L8.96008 16.7884C9.06677 17.3255 9.35897 17.808 9.78555 18.1514C10.2121 18.4948 10.7459 18.6772 11.2934 18.6667H22.6334C23.1809 18.6772 23.7147 18.4948 24.1413 18.1514C24.5679 17.808 24.8601 17.3255 24.9667 16.7884L26.8334 7.00002H7.00008" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default BurgerMenu
