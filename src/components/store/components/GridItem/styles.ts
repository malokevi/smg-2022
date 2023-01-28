import { motion } from "framer-motion"
import styled from "styled-components"

export const GridItem = styled(motion.div)<{ image: any }>`
    display: flex;
    flex-flow: column nowrap;
    border: 1px solid #eee;
    border-radius: ${({ theme }) => theme.borderRadius};
    overflow: hidden;
    cursor: pointer;
    transition: box-shadow 0.25s ease-in-out;

    &:hover {
        box-shadow: 0 0 20px rgb(0 0 0 / 10%);
    }

    .product-image {
        background-image: url(${({ image }) => image});
        height: 300px;
        background-size: 80%;
        background-repeat: no-repeat;
        background-position: 50%;
    }

    .product-details {
        display: flex;
        flex-flow: column nowrap;
        padding: 12px;
        gap: 18px;

        & > div {
            display: flex;
            flex-flow: row nowrap;
            border-top: 1px solid ${({ theme }) => theme.colors.gray};
            padding-top: 18px;
            gap: 18px;

            button {
                padding: 17px 24px;
                color: #fff;
                background: #70cddd;
                font-size: 16px;
                line-height: unset;
                border-radius: 5px;
                border: none;
                transition: opacity 0.25s ease-in-out;

                &:hover {
                    opacity: 0.8;
                }
            }

            .price {
                margin-left: auto;

                p {
                    color: #c1282d;
                    font-size: ${({ theme }) => theme.fontSize.md};

                    &:nth-child(2) {
                        color: ${({ theme }) => theme.colors.text.dark};
                        opacity: 0.4;
                        text-decoration: line-through;
                        font-size: ${({ theme }) => theme.fontSize.xs};
                    }
                }
            }
        }
    }
`
