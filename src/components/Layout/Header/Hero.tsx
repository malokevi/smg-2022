import { Link } from "react-router-dom"
import styled, { css } from "styled-components"
import { motion } from "framer-motion"

import SleepCartoon from "../../../assets/images/sleep-cartoon.png"
import PinkGirl from "../../../assets/images/pink-girl-banner.jpg"
import { Col, Container, Row } from "../Grid"
import {
    fadeUpSpring,
    staggerChildren,
    fadeLeft
} from "../../../shared/motion-variants"
import { Swiper } from "../../swiper"

const SlideOne = () => {
    return (
        <StyledSlideOne>
            <Container>
                <Row>
                    <Col>
                        <motion.div
                            initial="hide"
                            animate="show"
                            variants={staggerChildren}
                            className="hero-text"
                        >
                            <motion.h1 variants={fadeUpSpring}>
                                Providing Sleep Apnea Therapy Equipment For Over
                                15 Years
                            </motion.h1>
                            <motion.p variants={fadeUpSpring}>
                                At Sleep Management Group we have been working
                                closely with our clients and their physicians,
                                partnering to provide the support needed to
                                achieve positive outcomes. SMG is focused on
                                creating success stories.
                            </motion.p>
                            <motion.span variants={fadeUpSpring}>
                                <Link to="store">Visit The Store</Link>
                            </motion.span>
                        </motion.div>
                        <motion.img
                            variants={fadeLeft}
                            initial="hide"
                            animate="show"
                            alt=""
                            className="cartoon-right"
                            src={SleepCartoon}
                        />
                    </Col>
                </Row>
            </Container>
        </StyledSlideOne>
    )
}

const SlideTwo = () => {
    return (
        <StyledSlideTwo>
            <div className="overlay-dark" />
            <Container className="slide-content">
                <Row>
                    <Col>
                        <motion.div
                            initial="hide"
                            animate="show"
                            variants={staggerChildren}
                            className="hero-text"
                        >
                            <motion.h1 variants={fadeUpSpring}>
                                Get The Sleep You've Been Dreaming Of
                            </motion.h1>
                            <motion.p variants={fadeUpSpring}>
                                Stay informed on the latest information in the
                                field of sleep medicine. We've got the facts!
                            </motion.p>
                            <motion.span variants={fadeUpSpring}>
                                <Link to="/store">
                                    Visit Our Knowledge Center
                                </Link>
                            </motion.span>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </StyledSlideTwo>
    )
}

const Hero = () => {
    return (
        <StyledHero>
            <Swiper
                settings={{
                    pagination: {
                        el: ".hero__pagination",
                        clickable: true
                    }
                }}
            >
                <Swiper.Slide>
                    <div className="full-height">
                        <SlideOne />
                    </div>
                </Swiper.Slide>
                <Swiper.Slide>
                    <div className="full-height">
                        <SlideTwo />
                    </div>
                </Swiper.Slide>
            </Swiper>
            <div className="hero__pagination" />
        </StyledHero>
    )
}

const StyledHero = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    position: relative;

    .full-height {
        height: 100%;
        display: flex;
    }

    .hero__pagination {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        width: 100%;
        height: 14px;
        z-index: 2;

        .swiper-pagination-bullet {
            background: #2b2b52;
            opacity: 0.4;
            width: 10px;
            height: 10px;

            &:first-of-type {
                margin-left: auto;
            }

            &:last-of-type {
                margin-right: auto;
            }

            &.swiper-pagination-bullet-active {
                opacity: 1;
            }
        }
    }
`

const SlideStyles = css`
    padding: 32px 0 56px;
    width: 100%;

    h1 {
        font-size: ${({ theme }) => theme.fontSize.xl};

        @media (min-width: 768px) {
            font-size: ${({ theme }) => theme.fontSize.xxl};
        }
    }

    p,
    a {
        font-size: ${({ theme }) => theme.fontSize.md};

        @media (min-width: 768px) {
            font-size: ${({ theme }) => theme.fontSize.lg};
        }
    }
`

const StyledSlideOne = styled.div`
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.lightblue};

    ${SlideStyles}

    .hero-text {
        display: flex;
        flex-flow: column nowrap;
        gap: 16px;
        max-width: 400px;
        margin: auto auto auto 0;

        @media (min-width: 768px) {
            max-width: 600px;
        }

        a {
            margin: auto auto auto 0;
            font-weight: bold;
        }
    }

    .cartoon-right {
        position: absolute;
        right: -225px;
        width: 800px;
        bottom: 0;
        opacity: 0.3 !important;
        display: none;
        transition: opacity 0.25s ease-in-out;

        @media (min-width: 500px) {
            width: 850px;
            right: -325px;
            display: block;
        }

        @media (min-width: 768px) {
            width: 1028px;
        }

        @media (min-width: 1250px) {
            opacity: 0.9 !important;
        }

        @media (min-width: 1650px) {
            right: -225px;
            width: 1228px;
        }
    }
`

const StyledSlideTwo = styled.div`
    display: flex;
    flex-flow: row nowrap;
    flex-grow: 2;
    background-image: url(${PinkGirl});
    background-size: cover;
    background-position: 50% 6%;

    ${SlideStyles}

    .slide-content {
        z-index: 1;
    }

    .overlay-dark {
        opacity: 0.2;
        background: rgba(0, 0, 0, 0.8);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        @media (min-width: 860px) {
            background: rgba(0, 0, 0, 0.6);
            background: linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.6) 40%,
                rgba(0, 0, 0, 0) 100%
            );
        }
    }

    .hero-text {
        display: flex;
        flex-flow: column nowrap;
        gap: 16px;
        max-width: 400px;
        margin: auto auto auto 0;
        color: white;
        position: relative;

        @media (min-width: 768px) {
            max-width: 600px;
        }

        a {
            /* color: white; */
            margin: auto auto auto 0;
            font-weight: bold;
        }
    }
`

export default Hero
