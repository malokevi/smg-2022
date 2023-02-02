import styled, { css } from "styled-components";
import { buttonReset } from "../../../../../theme/mixins/resets";

// TODO : Improve responsiveness down to 320px
export const MobileToolbar = styled.div<{ showSearch: boolean }>`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    padding-bottom: 22px;
    border-bottom: 1px solid #efefef;
    margin-bottom: 0;

    .mt__searchBar {
        height: 0;
        opacity: 0;
        margin: 0 0 0 0;
        transition: all .25s ease-in-out;
        overflow: hidden;

        ${({ showSearch }) => showSearch && css`
            opacity: 1;
            height: 42px;
            margin: 12px 0 0 0;
        `}
    }

    .mt__inner {
        display: flex;
        flex-flow: row nowrap;
        margin-top: 18px;
        gap: 12px;

        .mt__inner__searchBtn {
            ${buttonReset}
            margin: auto 0 4px auto;
            display: flex;

            img {
                width: 28px;
                height: auto;
            }
        }
    }
`