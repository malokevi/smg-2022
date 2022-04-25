import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

const DURATION = 0.25

const variants = {
    fade: {
        hide: {
            opacity: 0,
            transition: {
                type: "tween",
                duration: DURATION
            }
        },
        show: {
            opacity: 1,
            transition: {
                type: "tween",
                duration: DURATION
            }
        }
    },
    fadeUp: {}
}

const Animate = ({
    type = "fade",
    children
}: {
    type?: "fade" | "fadeUp"
    children: React.ReactNode
}) => {
    return (
        <AnimatePresence>
            <StyledAnimate
                variants={variants[type]}
                initial="hide"
                animate="show"
            >
                {children}
            </StyledAnimate>
        </AnimatePresence>
    )
}

const StyledAnimate = styled(motion.div)`
    display: flex;
    flex-grow: 2;
`

export default Animate
