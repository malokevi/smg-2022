import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

import { fade, fadeUp, fadeUpSpring } from "../../shared/motion-variants"

const variants = {
    fadeUp,
    fade,
    fadeUpSpring
}

const Animate = ({
    type = "fade",
    children
}: {
    type?: "fade" | "fadeUp" | "fadeUpSpring"
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
