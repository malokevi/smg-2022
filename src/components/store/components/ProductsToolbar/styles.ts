import styled from "styled-components"

export const ProductsToolbar = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.gray};
    padding: 12px 24px;
    border-radius: ${({ theme }) => theme.borderRadius};
    display: flex;
    flex-flow: row nowrap;
    gap: 12px;

    .fade {
        margin: auto auto auto 0;
    }

    p {
        font-size: ${({ theme }) => theme.fontSize.sm};
        margin: auto 0 auto auto;
    }
`
