import styled from "styled-components"

export const TreeList = styled.div`
    display: flex;
    flex-flow: column;
    gap: 16px;

    .tree-list__title {
        font-size: ${({ theme }) => theme.fontSize.xl};
        font-weight: 600;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        gap: 16px;
        display: flex;
        flex-flow: column;

        li {
            display: flex;
            flex-flow: column;
            gap: 8px;
            padding-left: 22px;
            position: relative;
            font-size: 18px;
            line-height: 1.4;

            &:has(div) {
                gap: 0;

                & > div > ul {
                    padding-top: 16px;
                    padding-left: 16px;
                }
            }

            & > ul > li {
                font-size: ${({ theme }) => theme.fontSize.sm};
            }
        }
    }

    & > ul {
        gap: 24px;

        & > li {
            padding-left: 0;
        }
    }
`
