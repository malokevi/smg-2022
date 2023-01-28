import styled from "styled-components"

export const SearchBar = styled.div`
    display: flex;
    flex-flow: row nowrap;
    flex-grow: 2;

    .searchBar__button,
    .input-text {
        border: 2px solid ${({ theme }) => theme.colors.blue};
        padding: 4px 8px;
        font-size: ${({ theme }) => theme.fontSize.xs};

        @media (min-width: 1200px) {
            padding: 8px 14px;
            font-size: ${({ theme }) => theme.fontSize.sm};
        }
    }

    .input-text {
        flex-grow: 2;
        border-radius: ${({ theme }) => theme.borderRadius} 0 0
            ${({ theme }) => theme.borderRadius} !important;

        &:focus,
        &:focus-visible {
            outline: ${({ theme }) => theme.colors.blue};
        }
    }

    .searchBar__button {
        display: flex;
        overflow: hidden;
        width: 100px;
        background-color: ${({ theme }) => theme.colors.blue};
        border-radius: 0 ${({ theme }) => theme.borderRadius}
            ${({ theme }) => theme.borderRadius} 0 !important;

        .searchBar__button__image {
            height: 24px;
            margin: auto;
        }
    }
`
