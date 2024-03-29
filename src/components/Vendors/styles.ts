import styled from "styled-components"

export const Brands = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: space-around;
    gap: 42px;

    img {
        align-self: center;
    }
`
export const BrandsContainer = styled.div`
    display: flex;
    overflow: hidden;
    padding: 42px 0;
    background-color: ${({ theme }) => theme.colors.lightblue};

    img {
        max-height: 60px;

        @media (min-width: 768px) {
            max-height: 100px;
        }
    }
`
