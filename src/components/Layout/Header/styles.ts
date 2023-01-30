import styled from "styled-components"

export const Header = styled.div`
    display: flex;
    flex-flow: column;
    background-color: ${({ theme }) => theme.colors.white};
    z-index: 2;
`
