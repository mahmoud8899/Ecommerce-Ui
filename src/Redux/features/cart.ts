import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Items } from '../../Components/Data/index'
import * as  ActionTypes from './Types'
interface Inital {
    cart: Items[],
}
const initialState: Inital = {

    cart: JSON.parse(localStorage.getItem(ActionTypes.ADD_ITEM_CARD) || "") ?? []

}


const TheCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Items>) => {


            const item = action.payload
            const checkItems = state?.cart?.find((x) => x?._id === item?._id)

            if (checkItems) {
                state.cart = state?.cart.map((x) => x?._id === checkItems?._id ? item : x)
            } else {
                const product = { ...item };
                state.cart.push(product);
            }

            localStorage.setItem(ActionTypes.ADD_ITEM_CARD, JSON.stringify(state.cart))

        },
        RemoveCart: (state, action: PayloadAction<{ _id: number }>) => {

            const updatedCart = state.cart.filter((x) => x._id !== action.payload._id)
            state.cart = updatedCart;
            localStorage.setItem(ActionTypes.ADD_ITEM_CARD, JSON.stringify(state.cart))

        }
    }

})


export default TheCart.reducer
export const { addToCart, RemoveCart } = TheCart.actions