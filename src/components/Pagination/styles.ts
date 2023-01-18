import styled from "styled-components"

export const Pagination = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 32px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    padding: 12px 24px;
    border-radius: ${({ theme }) => theme.borderRadius};

    .fade {
        color: ${({ theme }) => theme.colors.text.faded};
    }

    p {
        margin: auto 0;
        font-size: ${({ theme }) => theme.fontSize.sm};
    }

    .show {
        display: flex;
        flex-flow: row nowrap;
        gap: 12px;
    }
`
