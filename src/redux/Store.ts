import { configureStore } from '@reduxjs/toolkit'
import filter from './Slices/filterSlice'
import cart from './Slices/cartSlice'
import product from './Slices/productsSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
    reducer: {
        filter,
        cart,
        product,
    },
})

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>()