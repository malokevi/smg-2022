import { createSlice } from "@reduxjs/toolkit"

export interface UserState {
    cart: string[]
}

const initialState: UserState = {
    cart: []
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            state.cart = [...state.cart, payload]
        },
        removeFromCart: (state, { payload }) => {
            state.cart = state.cart.filter((item) => item !== payload)
        },
        clearCart: (state) => {
            state.cart = []
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = userSlice.actions

export default userSlice.reducer
