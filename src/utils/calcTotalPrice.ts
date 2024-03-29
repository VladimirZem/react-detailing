import { CartItem } from "../redux/Slices/cartSlice"

export const calcTotalPrice = (items: CartItem[]) => {
    return items.reduce((sum, obj) => (obj.price * obj.count) + sum, 0)
}