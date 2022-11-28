import { Link } from "react-router-dom"
import styled from "styled-components"
import { motion } from "framer-motion"

import Carousel from "../../Carousel"
import Animate from "../../Utilities/Animate"
import SleepCartoon from "../../../assets/images/sleep-cartoon.png"
import PinkGirl from "../../../assets/images/pink-girl-banner.jpg"
import { Col, Container, Row } from "../Grid"
import {
    fadeUpSpring,
    staggerChildren,
    fadeLeft
} from "../../../shared/motion-variants"

const SlideOne = () => {
    return (
        <Animate>
            <StyledSlideOne draggable={false}>
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
                                    Providing Sleep Apnea Therapy Equipment For
                                    Over 15 Years
                                </motion.h1>
                                <motion.p variants={fadeUpSpring}>
                                    At Sleep Management Group we have been
                                    working closely with our clients and their
                                    physicians, partnering to provide the
                                    support needed to achieve positive outcomes.
                                    SMG is focused on creating success stories.
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
        </Animate>
    )
}

const SlideTwo = () => {
    return (
        <Animate>
            <StyledSlideTwo draggable={false}>
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
                                    Get The Sleep You've Been Dreaming Of
                                </motion.h1>
                                <motion.p variants={fadeUpSpring}>
                                    Stay informed on the latest information in
                                    the field of sleep medicine. We've got the
                                    facts!
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
        </Animate>
    )
}

const Hero = () => {
    return (
        <div draggable={false} style={{ height: "632px" }}>
            <Carousel slides={[SlideOne, SlideTwo]} />
        </div>
    )
}

const StyledSlideOne = styled.div`
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    overflow: hidden;
    flex-grow: 2;
    background-color: ${({ theme }) => theme.colors.lightblue};

    .hero-text {
        display: flex;
        flex-flow: column nowrap;
        gap: 16px;
        max-width: 600px;
        margin: auto auto auto 0;

        h1 {
            font-size: ${({ theme }) => theme.fontSize.xxl};
        }

        p,
        a {
            font-size: ${({ theme }) => theme.fontSize.lg};
        }

        a {
            margin: auto auto auto 0;
            font-weight: bold;
        }
    }

    .cartoon-right {
        position: absolute;
        right: -225px;
        bottom: 0;
        width: 1228px;
        opacity: 0.9;
    }
`

const StyledSlideTwo = styled.div`
    display: flex;
    flex-flow: row nowrap;
    flex-grow: 2;
    background-image: url(${PinkGirl});
    background-size: cover;
    background-position: 50% 6%;

    .hero-text {
        display: flex;
        flex-flow: column nowrap;
        gap: 16px;
        max-width: 600px;
        margin: auto auto auto 0;

        h1 {
            font-size: ${({ theme }) => theme.fontSize.xxl};
        }

        p,
        a {
            font-size: ${({ theme }) => theme.fontSize.lg};
        }

        a {
            margin: auto auto auto 0;
            font-weight: bold;
        }
    }
`

export default Hero
