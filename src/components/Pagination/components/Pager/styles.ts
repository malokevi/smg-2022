import styled from "styled-components"

import { buttonReset } from "../../../../theme/mixins/resets"

export const Pager = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-right: auto;
    gap: 4px;

    & > button {
        ${buttonReset}
        padding: 8px;

        &.active {
            font-weight: bold;
        }
        &:disabled {
            opacity: 0.3;
        }
    }
`
