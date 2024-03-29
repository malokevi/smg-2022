import { motion } from "framer-motion"
import styled from "styled-components"

export enum LoaderPositionType {
    RELATIVE = "relative",
    ABSOLUTE = "absolute",
    FIXED = "fixed"
}

export const Loader = styled(motion.div)<{ position: LoaderPositionType }>`
    position: ${({ position }) => position};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #00378b36;
    z-index: 999;
    display: flex;
    flex-flow: column;

    .lds-grid {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
        margin: auto;
    }
    .lds-grid div {
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #fff;
        animation: lds-grid 1.2s linear infinite;
    }
    .lds-grid div:nth-child(1) {
        top: 8px;
        left: 8px;
        animation-delay: 0s;
    }
    .lds-grid div:nth-child(2) {
        top: 8px;
        left: 32px;
        animation-delay: -0.4s;
    }
    .lds-grid div:nth-child(3) {
        top: 8px;
        left: 56px;
        animation-delay: -0.8s;
    }
    .lds-grid div:nth-child(4) {
        top: 32px;
        left: 8px;
        animation-delay: -0.4s;
    }
    .lds-grid div:nth-child(5) {
        top: 32px;
        left: 32px;
        animation-delay: -0.8s;
    }
    .lds-grid div:nth-child(6) {
        top: 32px;
        left: 56px;
        animation-delay: -1.2s;
    }
    .lds-grid div:nth-child(7) {
        top: 56px;
        left: 8px;
        animation-delay: -0.8s;
    }
    .lds-grid div:nth-child(8) {
        top: 56px;
        left: 32px;
        animation-delay: -1.2s;
    }
    .lds-grid div:nth-child(9) {
        top: 56px;
        left: 56px;
        animation-delay: -1.6s;
    }
    @keyframes lds-grid {
        0%,
        100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }
`
