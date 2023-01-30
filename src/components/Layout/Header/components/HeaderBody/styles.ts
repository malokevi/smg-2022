import styled, { css } from "styled-components"

export const Layout = styled.div<{ mobileNavIsOpen: boolean }>`
    display: flex;
    flex-flow: column;
    padding: 12px 0;

    ${({ mobileNavIsOpen }) => mobileNavIsOpen && css`
        @media(max-width: 767px) {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background-color: #fff;
        }
    `}}

    @media (max-width: 640px) {
        overflow: hidden;
    }

    .logo-link {
        margin: auto 0;
        display: flex;

        .logo-link__logo-mobile {
            width: 100px;
            magin: auto 0;

            @media (min-width: 768px) {
                display: none;
            }
        }

        .logo-link__logo {
            max-height: 105px;
            max-width: 100%;
            align-self: center;
            transition: max-height 0.25s ease-in-out;
            display: none;

            @media (min-width: 768px) {
                display: block;
            }
            
            @media (min-width: 1200px) {
                max-height: 130px;
            }
        }
    }
`