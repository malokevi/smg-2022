import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

import { fade, fadeUp, fadeUpSpring } from "../../shared/motion-variants"

const variants = {
    fadeUp,
    fade,
    fadeUpSpring
}

type AnimateProps = {
    type?: "fade" | "fadeUp" | "fadeUpSpring"
    children: React.ReactNode
    className?: string
}

const Animate = ({ type = "fade", children, className }: AnimateProps) => {
    return (
        <AnimatePresence>
            <StyledAnimate
                className={className}
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
