import React from "react";
import { Link, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import BurgerMenu from "./BurgerMenu";


const list = ['Химчистка', 'Полировка', 'Керамические покрытия', 'Антидождь', 'Бронепленка', 'Тонировка', 'Химчистка подкапотного пространства']

const Header: React.FC = () => {

  const [isOpen, setIsOpen] = React.useState(false)

  const isMounted = React.useRef(false)

  const { items, totalPrice } = useSelector((state: any) => state.cart)

  const { pathname } = useLocation();

  const linkListRef = React.useRef<HTMLDivElement>(null)




  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items)
      localStorage.setItem('cart', json)
    }
    isMounted.current = true;
  }, [items])

  React.useEffect(() => {
    const handelClickOutside = (event: MouseEvent) => {
      if (linkListRef.current && !event.composedPath().includes(linkListRef.current)) {
        setIsOpen(false);
      }
    }
    document.body.addEventListener('click', handelClickOutside);

    return () => {
      document.body.removeEventListener('click', handelClickOutside);
    }
  }, []);


  return (
    <header className="header container">
      <BurgerMenu items={list} totalPrice={totalPrice} />
      <div className="header__link" >
        <div className="left__link">
          <Link className="link__header" to='/shop'>Товары</Link>
          <div>Контакты</div>
        </div>
        <Link to='/'>
          <div className="logo__header">
            <h1 className="logo__title" >AUTOLUX</h1>
            <div className="p__logo" >164</div>
          </div>
        </Link>
        <div className="right__link">
          <div ref={linkListRef} className="list__popup">
            <div onClick={() => setIsOpen(!isOpen)} className="title__popup">
              <span  >Детейлинг</span>
              {isOpen ?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
                  <path d="M12 0L23.2583 16.5H0.74167L12 0Z" fill="white" />
                </svg>

                :
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
                  <path d="M12 17L0.741669 0.5L23.2583 0.5L12 17Z" fill="white" />
                </svg>
              }

            </div>
            {isOpen &&
              <ul className="list__detailing">
                {list.map((name, i) =>
                  <Link className="list__detailing__link" to={`/detailing/${name}`}>
                    <li
                      key={i}
                      onClick={() => setIsOpen(false)}
                      className="item__list"
                    >{name}
                    </li>
                  </Link>
                )}
              </ul>}
          </div>
          {
            pathname !== '/' &&
            <Link to='/Cart'>
              < button className="cart">
                <span>{totalPrice} P</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M10.4999 25.6666C11.1443 25.6666 11.6666 25.1443 11.6666 24.5C11.6666 23.8556 11.1443 23.3333 10.4999 23.3333C9.85559 23.3333 9.33325 23.8556 9.33325 24.5C9.33325 25.1443 9.85559 25.6666 10.4999 25.6666Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M23.3334 25.6666C23.9777 25.6666 24.5001 25.1443 24.5001 24.5C24.5001 23.8556 23.9777 23.3333 23.3334 23.3333C22.6891 23.3333 22.1667 23.8556 22.1667 24.5C22.1667 25.1443 22.6891 25.6666 23.3334 25.6666Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1.16675 1.16669H5.83341L8.96008 16.7884C9.06677 17.3255 9.35897 17.808 9.78555 18.1514C10.2121 18.4948 10.7459 18.6772 11.2934 18.6667H22.6334C23.1809 18.6772 23.7147 18.4948 24.1413 18.1514C24.5679 17.808 24.8601 17.3255 24.9667 16.7884L26.8334 7.00002H7.00008" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </Link>
          }
        </div>
      </div>
    </header >
  )
};

export default Header;