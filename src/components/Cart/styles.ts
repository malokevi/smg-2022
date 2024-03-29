import styled from "styled-components"

export const Cart = styled.div`
    position: relative;
    z-index: 2;

    &:hover {
        .cart-list {
            display: flex;
        }
    }

    .cart {
        display: flex;
        margin: auto 0;
        padding: 12px 0;
        cursor: pointer;

        img {
            height: 28px;
        }
    }

    .cart-list {
        cursor: auto;
        position: absolute;
        top: 100%;
        right: 0;
        padding: 24px;
        background-color: ${({ theme }) => theme.colors.white};
        box-shadow: ${({ theme }) => theme.boxShadow};
        width: 360px;
        height: 130px;
        display: flex;
        flex-flow: column;
        display: none;

        & > p {
            font-size: ${({ theme }) => theme.fontSize.xxs};
            margin: auto;
        }
    }
`
