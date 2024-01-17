import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SortPropertyEnum, setSort } from '../redux/Slices/filterSlice';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
type sortItems = {
    name: string;
    sortProperty: SortPropertyEnum;
}

export const sortList: sortItems[] = [
    { name: 'популярности (DESC)', sortProperty: SortPropertyEnum.RAITING_DESC },
    { name: 'популярности (ASC)', sortProperty: SortPropertyEnum.RAITING_ASC },
    { name: 'цене (DESC)', sortProperty: SortPropertyEnum.PRICE_DESC },
    { name: 'цене (ASC)', sortProperty: SortPropertyEnum.PRICE_ASC },
    { name: 'алфавиту (DESC)', sortProperty: SortPropertyEnum.TITLE_DESC },
    { name: 'алфавиту (ASC)', sortProperty: SortPropertyEnum.TITLE_ASC }
];


const SortPopup: React.FC = React.memo(() => {

    const dispatch = useDispatch();
    const sort = useSelector((state: any) => state.filter.sort)

    const [open, setOpen] = React.useState(false);
    const sortRef = React.useRef<HTMLDivElement>(null)
    const PopUpSort = React.useRef<HTMLDivElement>(null)


    const onClickListItem = (obj: sortItems) => {
        dispatch(setSort(obj));
        setOpen(false);
    };

    React.useEffect(() => {
        const handelClickOutside = (event: MouseEvent) => {
            if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
                setOpen(false);
            }
        }
        document.body.addEventListener('click', handelClickOutside);

        return () => {
            document.body.removeEventListener('click', handelClickOutside);
        }
    }, []);
    return (
        <div ref={sortRef} className="sort" >
            <div className="sort__label">
                <b>Сортировка по:</b>
                <div onClick={() => setOpen(!open)} className='sort__btn' >
                    <div >{sort.name}</div>
                    {open ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
                            <path d="M12 0L23.2583 16.5H0.74167L12 0Z" fill="white" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
                            <path d="M12 17L0.741669 0.5L23.2583 0.5L12 17Z" fill="white" />
                        </svg>
                    }

                </div>
            </div>
            <CSSTransition
                in={open}
                nodeRef={PopUpSort}
                timeout={300}
                classNames='sortPopUp'
                unmountOnExit
            >
                <div ref={PopUpSort} className="sort__popup" >

                    <ul>
                        {sortList.map((obj, i) => (

                            <li
                                key={i}

                                onClick={() => onClickListItem(obj)}
                                className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>
                                {obj.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </CSSTransition>
        </div >
    )
})

export default SortPopup;