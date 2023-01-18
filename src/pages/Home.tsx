import styled from "styled-components"

import Hero from "../components/Layout/Header/components/Hero"
import { Trail } from "../components/Trail"
import { Vendors } from "../components/Vendors/Brands"

const Home = () => {
    return (
        <StyledHome>
            <Hero />
            <Trail />
            <Vendors />
        </StyledHome>
    )
}

const StyledHome = styled.div`
    display: flex;
    flex-flow: column nowrap;
`

export default Home
