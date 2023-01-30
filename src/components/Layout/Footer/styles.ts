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
                max-width: 100%;
                width: 360px;
                margin: 0 auto 48px auto;

                @media(min-width: 768px) {
                    margin: 0 0 42px 0;
                    max-width: 90%;
                }
            }

            &.f-logos {
                p {
                    margin-bottom: 12px;

                    @media(max-width: 767px) {
                        text-align: center;
                    }
                }

                & > div {
                    @media(max-width: 767px) {
                        margin: auto;
                    }
                }
            }

            &.footer-nav {
                @media(max-width: 767px) {
                    margin-top: 48px;

                }

                & > div {
                    display: flex;
                    flex-flow: column nowrap;
                    text-align: center;

                    @media(min-width: 768px) {
                        margin-left: auto;
                        text-align: left;
                    }

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

                        @media(min-width: 768px) {
                            margin-left: auto;
                        }
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
            text-align: center;
        }
    }
`
