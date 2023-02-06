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
        gap: 12px;
        display: flex;
        flex-flow: column;

        li {
            display: flex;
            flex-flow: column;
            gap: 8px;
            padding-left: 16px;
            position: relative;

            &:has(div) {
                gap: 0;

                & > div > ul {
                    margin-top: 8px;
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