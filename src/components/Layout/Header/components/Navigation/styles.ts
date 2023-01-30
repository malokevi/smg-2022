import styled from "styled-components"

import { buttonReset } from "../../../../../theme/mixins/resets"
import { Container } from "../../../Grid"
import { MobileToolbar } from "../../MobileToolbar"

export const StyledContainer = styled(Container)`
    @media(max-width: 767px) {
        height: 100%;
    }
`

export const StyledMobileToolbar = styled(MobileToolbar)`
    &&& {
        @media(min-width: 768px) {
            display: none;
        }
    }    
`

export const Navigation = styled.div<{ isOpenOnMobile: boolean }>`
    display: flex;
    flex-flow: column;
    border-top: 1px solid ${({ theme }) => theme.colors.gray};
    box-shadow: 0 10px 10px -10px rgb(0 0 0 / 10%);
    z-index: 1;

    @media(max-width: 767px) {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 77px;
        background-color: ${({ theme }) => theme.colors.white};
        z-index: 999;
        display: ${({ isOpenOnMobile }) => isOpenOnMobile ? "flex" : "none"};
        overflow: hidden;
    }

    .row {
        position: relative;
        overflow: visible;
    }

    .navigation__item {
        color: #131c4b;
        font-size: 18px;
    }

    ul.navigation {
        display: flex;
        flex-flow: column nowrap;
        list-style: none;
        flex-grow: 2;
        padding: 12px 0 12px 0;
        overflow: hidden;
        height: 200px;
        flex-grow: 2;
        overflow: auto;

        @media(min-width: 768px) {
            height: auto;
            flex-flow: row nowrap;
            margin: 0 0 0 auto;
        }

        .navigation__item {
            padding: 10px 12px 10px 0;

            @media(min-width: 768px) {
                padding: 0 28px;
            }    

            &:first-of-type {
                @media(min-width: 768px) {
                    padding-left: 0;
                }
            }

            &:last-of-type {
                padding-right: 0;
            }

            .dropdown-container {
                border-radius: 0 0 ${({ theme: { borderRadius } }) => `${borderRadius} ${borderRadius}`};
            }

            &.navigation__item--is-active {
                .dropdown-container {
                    display: flex;

                    & > button {
                        img {
                            transform: rotate(0);
                        }
                    }
                }

                & > button img { 
                    transform: rotate(0deg);
                }
            }

            & > button {
                ${buttonReset}
                display: flex;
                flex-flow: row nowrap;
                gap: 12px;

                img {
                    width: 12px;
                    height: 12px;
                    align-self: center;
                    transform: rotate(-90deg);
                    transition: transform .15s ease-in-out;
                }
            }

            & > div {
                display: none;
                padding: 12px 0 0 12px;

                & > ul {
                    display: flex;
                    width: 100%;
                    list-style: none;
                    flex-flow: column wrap;
                    gap: 12px;
                    padding: 0;

                    li {
                        font-size: 18px;
                        
                        a {
                            text-transform: capitalize;
                        }
                    }
                }

                @media(min-width: 768px) {
                    background-color: white;
                    box-shadow: 0 8px 12px rgb(0 0 0 / 8%);
                    left: 0;
                    top: 100%;
                    right: 0;
                    padding: 30px 24px;
                    position: absolute;

                    & > ul {
                        width: 100%;
                        flex-flow: row wrap;
                        gap: 32px;
                        padding: 0;
    
                        li {
                            width: 25%;
                            margin: 0;
    
                            a {
                                padding: 10px;
                                font-size: ${({ theme }) => theme.fontSize.xs};
                            }
                        }
                    }
                }
            }
        }
    }
`