import React from "react";

import qs from "qs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



import Item from "../Components/itemShop"
import Categories from "../Components/Categories";
import { setCategoryId, setFilters } from "../redux/Slices/filterSlice";
import Sort, { sortList } from "../Components/Sort";
import Search from "../Components/Search";
import { SearchProductParams, fetchProducts } from "../redux/Slices/productsSlice";
import { useAppDispatch } from "../redux/Store";





const Shop: React.FC = () => {
    const { items, status } = useSelector((state: any) => state.product);
    const [isLoading, setIsLoading] = React.useState(true)
    const { categoryId, sort, searchValue, limitProduct } = useSelector((state: any) => state.filter);
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const isSearch = React.useRef(false)
    const isMounted = React.useRef(false)


    const onChangeCategory = React.useCallback((id: number) => {
        dispatch(setCategoryId(id))
    }, [])

    const getProducts = async () => {
        setIsLoading(true);

        const sortBy = `sortBy=${sort?.sortProperty}`;
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue;
        const currentPage = '1'

        dispatch(
            fetchProducts({
                sortBy,
                category,
                search,
                currentPage,
                limitProduct
            }))

    };

    // Был ли первый рендер?
    React.useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
            });
            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [categoryId, sort.sortProperty, searchValue])


    // Первый рендер, проверка URL-параметров и сохраняем в редукс
    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1)) as unknown as SearchProductParams
            const sort = sortList.find(obj => obj.sortProperty === params.sortBy);
            dispatch(setFilters({
                sort: sort || sortList[0],
                categoryId: Number(params.category),
                searchValue: params.search,
                currentPage: Number(params.currentPage),
                limitProduct: params.limitProduct
            }));
            isSearch.current = true
        }
    }, []);


    // Если был первый рендер, то запрашиваем товары
    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!isSearch.current) {
            getProducts();
        }

        isSearch.current = false
    }, [categoryId, sort.sortProperty, searchValue])



    const products = items.map((obj: any) => <Item key={obj.id}  {...obj} />);


    return (
        <div className="shop__block container" >
            <h1 className="shop__block__title" >Поддерживай состояние авто сам!</h1>
            <div className="shop__block__filters">
                <Categories value={categoryId} onChangeCategory={onChangeCategory} />
                <Sort />
                <Search />
            </div>
            {status === 'error' ?
                (<div className="shop__block__error-info" >
                    <h2> ПРОИЗОШЛА ОШИБКА</h2>
                    <p>Нам грустно до слез. <span>&#128557;</span><br /> Попробуйте повторить попытку позже </p>
                </div>)
                : (<div className="items__list " > {products} </div>)
            }

        </div >
    )
};

export default Shop;


// {status === 'loading' ? skeletons : products}