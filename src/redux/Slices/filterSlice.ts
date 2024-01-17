import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export enum SortPropertyEnum {
    RAITING_DESC = 'raiting',
    RAITING_ASC = '-raiting',
    PRICE_DESC = 'price',
    PRICE_ASC = '-price',
    TITLE_DESC = 'title',
    TITLE_ASC = '-title'
}

export type filterSort = {
    name: string;
    sortProperty: SortPropertyEnum;
}

export interface filterSliceState {
    searchValue: string;
    categoryId: number;
    currentPage: number;
    sort: filterSort;
    limitProduct: number
}




const initialState: filterSliceState = {
    searchValue: '',
    categoryId: 0,
    currentPage: 1,
    limitProduct: 12,
    sort: {
        name: 'популярности',
        sortProperty: SortPropertyEnum.RAITING_DESC
    }
}



const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setSort(state, action: PayloadAction<filterSort>) {
            state.sort = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
            console.log(state.searchValue)
        },
        setFilters(state, action: PayloadAction<filterSliceState>) {
            if (Object.keys(action.payload).length) {
                state.sort = action.payload.sort;
                state.currentPage = Number(action.payload.currentPage);
                state.categoryId = Number(action.payload.categoryId);
            } else {
                state.currentPage = 1;
                state.categoryId = 0;
                state.sort = {
                    name: 'Популярности',
                    sortProperty: SortPropertyEnum.RAITING_DESC
                }
            }
        }
    },
})

export const { setCategoryId, setSort, setSearchValue, setFilters } = filterSlice.actions;

export default filterSlice.reducer;