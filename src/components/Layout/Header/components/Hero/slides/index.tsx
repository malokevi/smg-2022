import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import SleepCartoon from "../../../../../../assets/images/sleep-cartoon.png"
import { Col, Container, Row } from "../../../../Grid"
import {
    fadeLeft,
    fadeUpSpring,
    staggerChildren
} from "../../../../../../shared/motion-variants"

import * as S from "./styles"

export const SlideOne = () => {
    return (
        <S.SlideOne>
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
        </S.SlideOne>
    )
}

export const SlideTwo = () => {
    return (
        <S.SlideTwo>
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
        </S.SlideTwo>
    )
}
