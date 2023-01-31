import styled from "styled-components"

export const Breadcrumb = styled.div<{ isHiddenOnMobile: boolean }>`
    padding: 24px 0;

    @media (max-width: 767px) {
        display: ${({ isHiddenOnMobile }) => isHiddenOnMobile ? "none" : "block"};
    }

    ul {
        display: flex;
        flex-flow: row nowrap;
        gap: 24px;
        list-style: none;
        padding: 0;

        li,
        p,
        span {
            font-size: ${({ theme }) => theme.fontSize.xs};
            text-transform: capitalize;
        }

        .fade {
            opacity: 0.7;
        }

        li {
            .link-slash {
                display: flex;
                flex-flow: row nowrap;
                gap: 24px;
            }
        }
    }
`
