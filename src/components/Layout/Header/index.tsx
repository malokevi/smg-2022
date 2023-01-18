import styled from "styled-components"

import HeaderBody from "./components/HeaderBody"
import Navigation from "./components/Navigation"
import QuickLinks from ".//components/QuickLinks"
import Breadcrumb from "./components/Breadcrumb"

export const Header = () => {
    return (
        <StyledHeader>
            <QuickLinks />
            <HeaderBody />
            <Navigation />
            <Breadcrumb />
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    display: flex;
    flex-flow: column;
    background-color: ${({ theme }) => theme.colors.white};
    z-index: 2;
    overflow: hidden;
`
