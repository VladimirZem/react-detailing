import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import axios from "axios";


export type SearchProductParams = {
    sortBy: string;
    category: string;
    search: string;
    currentPage: string;
    limitProduct: number;
}

export const fetchProducts = createAsyncThunk<itemProduct[], SearchProductParams>(
    'product/fetchProductsStatus', async (params) => {
        const { sortBy, category, search, currentPage, limitProduct } = params;
        const { data } = await axios.get(`https://41f1aaf4b6b26e63.mokky.dev/items?${category}&${sortBy}&title=*${search}&page=${currentPage}&limit=${limitProduct}`)
        return data?.items
    })


type itemProduct = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    count: number;
    category: number;
    raiting: number;
    brand: 'string'
    categoryName: 'string'
    description: 'string'
    method: 'string'
}



export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

interface productSliceState {
    items: itemProduct[];
    status: Status;
}


const initialState: productSliceState = {
    items: [],
    status: Status.LOADING,
}



const productsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<itemProduct[]>) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = Status.LOADING
                state.items = []
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.items = action.payload
                state.status = Status.SUCCESS
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = Status.ERROR
                state.items = []
            })
    }
});

export const { setItems, } = productsSlice.actions;

export default productsSlice.reducer;