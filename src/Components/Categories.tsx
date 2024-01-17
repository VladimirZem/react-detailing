import React from "react";

type CategoriesProps = {
    value: number;
    onChangeCategory: (i: number) => void;
}


const category = ['Все', 'Шампуни', 'Тряпки для сушки', 'Для интерьера', 'Все для мойки', 'Наборы']


const Categories: React.FC<CategoriesProps> = React.memo(({ value, onChangeCategory }) => {
    return (
        <ul className="category__list" >
            {category.map((categoryName, i) => (
                <li
                    key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : 'item__sort'}>
                    {categoryName}
                </li>
            ))}
        </ul>
    )
});

export default Categories;