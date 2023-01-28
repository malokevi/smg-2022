import styled from "styled-components"

export const StyledTestimonial = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    background-color: white;
    text-align: center;
    box-shadow: 0 0px 14px rgb(0 0 0 / 8%);
    padding: 48px 24px;
    margin: 18px auto;
    gap: 32px;
    width: auto;
    flex-grow: 2;

    @media (min-width: 1300px) {
        width: 356px;
    }

    && {
        margin: 18px 24px;
    }

    p {
        font-size: ${({ theme }) => theme.fontSize.sm};
        line-height: 1.8;
    }

    & > div {
        p {
            &.regards {
                font-style: italic;
                font-size: ${({ theme }) => theme.fontSize.xs};
            }

            &:last-of-type {
                font-weight: bold;
                text-transform: capitalize;
            }
        }
    }

    img {
        opacity: 0.8;
        width: 40px;
        margin: 0 auto;
    }

    .swiper-button-next,
    .swiper-button-prev {
        bottom: 6px;
        right: 6px;
        top: auto;
        color: ${({ theme }) => theme.colors.blue};

        &::after {
            font-weight: bold;
            font-size: 24px;
        }
    }
`
