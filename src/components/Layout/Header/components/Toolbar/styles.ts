import styled from "styled-components"

export const Toolbar = styled.div`
    display: flex;
    flex-flow: column;
    gap: 12px 28px;
    margin: auto 0 auto auto;
    flex-direction: column-reverse;

    @media (min-width: 1320px) {
        flex-flow: row nowrap;
    }

    .menu-tools__section {
        display: flex;
        flex-flow: row nowrap;
        gap: 28px;
    }

    .menu-tools__section__favorites {
        display: none;

        @media (min-width: 860px) {
            display: flex;
        }
    }
`