import styled from "styled-components"

import { Swiper } from "./swiper"

const Carousel = ({ slides }: { slides: (() => JSX.Element)[] }) => {
    return <StyledCarousel></StyledCarousel>
}

const StyledCarousel = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 100%;
    position: relative;
`

export default Carousel
