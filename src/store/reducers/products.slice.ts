import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

type ProductType = any

export interface ProductsState {
    products: {
        data: ProductType[]
        loading: boolean
        error: string | null
    }
}

const initialState: ProductsState = {
    products: {
        data: [],
        loading: false,
        error: null
    }
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProducts: (state) => {
            state.products = {
                data: state.products.data,
                loading: false,
                error: null
            }
        },
        getProductsSuccess: (state, { payload }) => {
            state.products = {
                data: payload,
                loading: false,
                error: null
            }
        },
        getProductsFailed: (state, { payload }) => {
            state.products = {
                data: [],
                loading: false,
                error: payload
            }
        },
        getProduct: (state, { payload }: PayloadAction<string>) => {},
        getProductSuccess: (state, { payload }) => {},
        getProductFailed: (state, { payload }) => {}
    }
})

export const {
    getProducts,
    getProductsSuccess,
    getProductsFailed,
    getProduct,
    getProductSuccess,
    getProductFailed
} = productsSlice.actions

export default productsSlice.reducer
