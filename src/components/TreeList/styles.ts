import styled from "styled-components"

import Button from "../Button"

export const TreeList = styled.div`
    display: flex;
    flex-flow: column;
    gap: 16px;   

    .tree-list__title {
        font-size: ${({ theme }) => theme.fontSize.xl};
        font-weight: 600;
    }

    & > ul {
        gap: 24px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        gap: 12px;
        display: flex;
        flex-flow: column;

        li {
            display: flex;
            flex-flow: column;
            gap: 8px;
            padding-left: 16px;
            position: relative;

            & > ul > li {
                font-size: ${({ theme }) => theme.fontSize.sm};
            }
        }
    }
`

export const StyledButton = styled(Button)`
    align-self: flex-start;
    font-size: ${({theme}) => theme.fontSize.md};
`