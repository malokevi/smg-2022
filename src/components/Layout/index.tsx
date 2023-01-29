import { Outlet } from "react-router"

import { Footer } from "./Footer"
import { Header } from "./Header"

import * as S from "./styles"

export const Layout = () => {
    return (
        <S.Layout>
            <Header />
            <Outlet />
            <Footer />
        </S.Layout>
    )
}