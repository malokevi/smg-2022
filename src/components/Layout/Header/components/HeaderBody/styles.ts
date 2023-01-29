import styled from "styled-components"

export const Layout = styled.div`
    display: flex;
    flex-flow: column;
    padding: 12px 0;

    @media (max-width: 640px) {
        overflow: hidden;
    }

    .logo {
        max-height: 105px;
        align-self: center;
        transition: max-height 0.25s ease-in-out;

        @media (min-width: 1200px) {
            max-height: 130px;
        }
    }
`