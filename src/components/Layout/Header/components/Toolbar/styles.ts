import styled from "styled-components"
import { Hamburger } from "../Hamburger"

export const Toolbar = styled.div`
    display: flex;
    flex-flow: column;
    gap: 12px 28px;
    margin: auto 0 auto auto;
    flex-direction: column-reverse;
    width: 100%;
    max-width: 450px;

    @media (min-width: 1320px) {
        flex-flow: row nowrap;
    }

    .menu-tools__section {
        display: none;
        flex-flow: row nowrap;
        gap: 28px;
        align-self: flex-end;

        @media(min-width: 768px) {
            display: flex;
        }

        &.menu-tools__section--search {
            width: 100%;
        }
    }

    .menu-tools__section__favorites {
        display: none;

        @media (min-width: 860px) {
            display: flex;
        }
    }
`

export const StyledHamburger = styled(Hamburger)`
    align-self: flex-end;

    @media(min-width: 768px) {
        display: none;
    }
`