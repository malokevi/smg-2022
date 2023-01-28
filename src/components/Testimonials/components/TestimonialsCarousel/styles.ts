import styled from "styled-components";

import { Swiper } from "../../../swiper";

export const TestimonialSwiper = styled(Swiper)`
    & > .swiper-button-prev,
    & > .swiper-button-next {
        display: none;
    }
`