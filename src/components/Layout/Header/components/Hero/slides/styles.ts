import styled, { css } from "styled-components"

import PinkGirl from "../../../../../../assets/images/pink-girl-banner.jpg"

const SlideStyles = css`
    padding: 32px 0 56px;
    width: 100%;

    h1 {
        font-size: ${({ theme }) => theme.fontSize.xl};

        @media (min-width: 768px) {
            font-size: ${({ theme }) => theme.fontSize.xxl};
        }
    }

    p,
    a {
        font-size: ${({ theme }) => theme.fontSize.md};

        @media (min-width: 768px) {
            font-size: ${({ theme }) => theme.fontSize.lg};
        }
    }
`

export const SlideOne = styled.div`
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.lightblue};

    ${SlideStyles}

    .hero-text {
        display: flex;
        flex-flow: column nowrap;
        gap: 16px;
        max-width: 400px;
        margin: auto auto auto 0;

        @media (min-width: 768px) {
            max-width: 600px;
        }

        a {
            margin: auto auto auto 0;
            font-weight: bold;
        }
    }

    .cartoon-right {
        position: absolute;
        right: -225px;
        width: 800px;
        bottom: 0;
        opacity: 0.3 !important;
        display: none;
        transition: opacity 0.25s ease-in-out;

        @media (min-width: 500px) {
            width: 850px;
            right: -325px;
            display: block;
        }

        @media (min-width: 768px) {
            width: 1028px;
        }

        @media (min-width: 1250px) {
            opacity: 0.9 !important;
        }

        @media (min-width: 1650px) {
            right: -225px;
            width: 1228px;
        }
    }
`

export const SlideTwo = styled.div`
    display: flex;
    flex-flow: row nowrap;
    flex-grow: 2;
    background-image: url(${PinkGirl});
    background-size: cover;
    background-position: 50% 6%;

    ${SlideStyles}

    .slide-content {
        z-index: 1;
    }

    .overlay-dark {
        opacity: 0.2;
        background: rgba(0, 0, 0, 0.8);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        @media (min-width: 860px) {
            background: rgba(0, 0, 0, 0.6);
            background: linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.6) 40%,
                rgba(0, 0, 0, 0) 100%
            );
        }
    }

    .hero-text {
        display: flex;
        flex-flow: column nowrap;
        gap: 16px;
        max-width: 400px;
        margin: auto auto auto 0;
        color: white;
        position: relative;

        @media (min-width: 768px) {
            max-width: 600px;
        }

        a {
            /* color: white; */
            margin: auto auto auto 0;
            font-weight: bold;
        }
    }
`
