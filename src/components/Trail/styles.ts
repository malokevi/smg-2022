import TrailBG from "../../assets/images/wavy-lines-bg.svg"

import styled from "styled-components"

export const Testimonials = styled.div`
    display: flex;

    .testimonials__desktop {
        display: none;

        @media (min-width: 1300px) {
            display: flex;
        }
    }

    .testimonials__mobile {
        display: flex;

        @media (min-width: 1300px) {
            display: none;
        }
    }
`

export const Trail = styled.div`
    display: flex;
    flex-flow: column;
    padding: ${({ theme }) => theme.padding.page.mobile} 0;
    background-image: url(${TrailBG});
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 1400px 100%;
    gap: ${({ theme }) => theme.padding.gap};

    @media (min-width: 768px) {
        padding: ${({ theme }) => theme.padding.page.desktop} 0;
    }

    .row {
        gap: 48px 0;
    }

    .col {
        position: relative;

        &.image-col {
            &.hidden-sm {
                display: none;

                @media (min-width: 768px) {
                    display: flex;
                }
            }

            @media (min-width: 768px) {
                display: flex;
            }
        }

        img {
            position: sticky;
            top: 18px;
            width: 100%;
            border-radius: 30px;

            @media (max-width: 768px) {
                height: 300px;
                object-fit: cover;
                object-position: 100% 70%;
            }
        }

        h2 {
            font-size: 42px;
        }

        @media (min-width: 768px) {
            &:first-of-type {
                padding-right: 20px;
            }
            &:last-of-type {
                padding-left: 20px;
            }
        }
    }

    .text-right {
        margin: 0 auto auto;
        display: flex;
        flex-flow: column nowrap;
        gap: 24px;
    }
`
