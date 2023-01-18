import styled from "styled-components"

export const Brands = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    justify-content: space-between;

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
        max-height: 100px;
    }
`
