import styled from "styled-components"

export const QuickLinks = styled.div`
    display: flex;
    flex-flow: column;
    padding: 12px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

    .quick-links {
        display: flex;
        flex-flow: column;
        gap: 8px 32px;
        text-transform: uppercase;
        margin: auto;

        @media (min-width: 500px) {
            flex-flow: row nowrap;
        }
    }

    .quick-links__text {
        font-size: ${({ theme }) => theme.fontSize.xxs};

        @media (min-width: 768px) {
            font-size: ${({ theme }) => theme.fontSize.xs};
        }

        & > span {
            color: ${({ theme }) => theme.colors.red};
            font-weight: bold;
        }
    }
`
