import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import createSagaMiddleware from "redux-saga"

import user from "./reducers/user.slice"
import products from "./reducers/products.slice"
import productsSaga from "./sagas/products.sagas"

let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const store = configureStore({
    reducer: {
        products,
        user
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

sagaMiddleware.run(productsSaga)
