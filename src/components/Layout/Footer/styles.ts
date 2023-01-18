import styled from "styled-components"

export const Footer = styled.div`
    display: flex;
    flex-flow: column;
    border-top: 1px solid #eee;
    margin-top: auto;

    .container {
        padding: ${({ theme }) => theme.padding.gap} 0;

        .col {
            & > img {
                margin-bottom: 42px;
                max-width: 90%;
            }

            &.f-logos {
                p {
                    margin-bottom: 12px;
                }
            }

            &.footer-nav {
                & > div {
                    display: flex;
                    flex-flow: column nowrap;
                    margin-left: auto;

                    p {
                        margin-bottom: 18px;
                        font-weight: bold;
                    }

                    ul {
                        display: flex;
                        flex-flow: column nowrap;
                        gap: 18px;
                        list-style: none;
                        padding: 0;
                        margin-left: auto;
                    }
                }
            }
        }
    }

    .copyright {
        border-top: 1px solid ${({ theme }) => theme.colors.gray};
        display: flex;
        padding: 24px 0;

        p {
            color: #abadbc;
            margin: auto;
            font-size: ${({ theme }) => theme.fontSize.xs};
        }
    }
`
