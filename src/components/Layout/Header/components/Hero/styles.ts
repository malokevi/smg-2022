import styled from "styled-components"

export const Hero = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    position: relative;

    .full-height {
        height: 100%;
        display: flex;
    }

    .hero__pagination {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        width: 100%;
        height: 14px;
        z-index: 2;

        .swiper-pagination-bullet {
            background: #2b2b52;
            opacity: 0.4;
            width: 10px;
            height: 10px;

            &:first-of-type {
                margin-left: auto;
            }

            &:last-of-type {
                margin-right: auto;
            }

            &.swiper-pagination-bullet-active {
                opacity: 1;
            }
        }
    }
`
