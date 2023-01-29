import styled from "styled-components"

export const Options = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 12px;

    & > div {
        display: flex;
        flex-flow: column nowrap;

        p {
            color: ${({ theme }) => theme.colors.text.faded};
            font-size: ${({ theme }) => theme.fontSize.xs};
        }

        & > div {
            display: flex;
            flex-flow: row nowrap;
            gap: 8px;
        }
    }

    img {
        height: 28px;
        margin: auto 0;
    }
`