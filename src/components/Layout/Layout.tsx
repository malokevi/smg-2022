import { Suspense } from "react"
import { Outlet } from "react-router"
import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header/Header"

const Layout = () => {
    return (
        <StyledLayout>
            <Header />
            <Suspense fallback={<></>}>
                <Outlet />
            </Suspense>
            <Footer />
        </StyledLayout>
    )
}

const StyledLayout = styled.div`
    display: flex;
    flex-flow: column;
    position: relative;
    flex-grow: 2;
`

export default Layout
