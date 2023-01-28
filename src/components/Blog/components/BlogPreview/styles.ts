import styled from "styled-components"
import { motion } from 'framer-motion'

export const BlogEntry = styled(motion.div)`
    display: flex;
    flex-flow: row nowrap;
    gap: 32px;

    img {
        width: 350px;
        height: 220px;
        align-self: flex-start;
        flex-shrink: 0;
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