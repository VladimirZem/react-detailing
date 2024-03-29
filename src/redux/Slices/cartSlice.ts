import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Store";
import { getCartFromLS } from "../../utils/getCartFromLS";
import { calcTotalPrice } from "../../utils/calcTotalPrice";



export type CartItem = {
    id: number;
    title: string;
    imageUrl: string;
    price: number;
    count: number;
}

interface cartSliceState {
    totalPrice: number;
    items: CartItem[];
}

const { items, totalPrice } = getCartFromLS()

const initialState: cartSliceState = {
    totalPrice: totalPrice,
    items: items
}



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            const findItem = state.items.find(obj => obj.id === action.payload.id)

            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }
            state.totalPrice = calcTotalPrice(state.items)
        },
        minusItem(state, action: PayloadAction<number>) {
            const findItem = state.items.find(obj => obj.id === action.payload)

            if (findItem && findItem.count > 1) {
                findItem.count--;
                state.totalPrice = calcTotalPrice(state.items)
            }

        },
        removeItem(state, action: PayloadAction<number>) {
            state.items = state.items.filter(obj => obj.id !== action.payload)

            state.totalPrice = calcTotalPrice(state.items)
        },
        clearItems(state) {
            state.items = []
            state.totalPrice = 0
        },
    },
})

export const selectCart = (state: RootState) => state.cart


export const { addItem, removeItem, minusItem, clearItems, } = cartSlice.actions;

export default cartSlice.reducer;