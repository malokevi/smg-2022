import styled from "styled-components"

export const Options = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 12px;

    a, button, p {
        white-space: nowrap;
    }

    & > div {
        display: flex;
        flex-flow: column nowrap;

        p {
            color: ${({ theme }) => theme.colors.text.faded};
            font-size: ${({ theme }) => theme.fontSize.xs};
        }

        & > div {
            display: flex;
            flex-flow: row wrap;
            gap: 8px;

            @media(min-width: 1200px) {
                flex-flow: row nowrap;
            }
        }
    }

    img {
        height: 28px;
        margin: auto 0;
    }
`