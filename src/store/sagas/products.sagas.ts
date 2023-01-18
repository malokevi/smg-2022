import { call, put, takeLatest } from "redux-saga/effects"

import { getProductsService } from "../../services/products"
import {
    getProducts,
    getProductsFailed,
    getProductsSuccess
} from "../reducers/products.slice"

// todo - stronger typing?
function* fetchProducts(): Generator<any> {
    try {
        const products = yield call(getProductsService)
        yield put({ type: getProductsSuccess.type, payload: products })
    } catch (e: any) {
        yield put({ type: getProductsFailed.type, message: e.message })
    }
}

export default function* fetchProductsSaga() {
    yield takeLatest(getProducts.type, fetchProducts)
}
