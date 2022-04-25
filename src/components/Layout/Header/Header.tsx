import styled from "styled-components"
import HeaderBody from "./HeaderBody"
import Navigation from "./Navigation"
import QuickLinks from "./QuickLinks"
import Breadcrumb from "./Breadcrumb"

const Header = () => {
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
    z-index: 1;
`

export default Header
