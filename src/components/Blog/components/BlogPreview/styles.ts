import styled from "styled-components"
import { motion } from 'framer-motion'

export const BlogEntry = styled(motion.div)`
    display: flex;
    flex-flow: column nowrap;
    gap: 32px;

    @media(min-width: 768px) {
        flex-flow: row nowrap;
    }

    img {
        align-self: flex-start;
        height: auto;
        flex-shrink: 0;
        max-width: 100%;
        width: 350px;

        @media(min-width: 768px) and (max-width: 992px) {
            width: 200px;
        }
    }

    .preview-body {
        display: flex;
        flex-flow: column;
        gap: 18px;

        p {
            font-size: ${({ theme }) => theme.fontSize.xs};

            &.preview-copy {
                display: -webkit-box;
                -webkit-line-clamp: 8;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
        }
    }

    .fade {
        color: ${({ theme }) => theme.colors.text.faded};
    }
`