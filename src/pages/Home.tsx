import styled from "styled-components"

import { Col, Container, Row } from "../components/Layout/Grid"
import Hero from "../components/Layout/Header/Hero"
import { Testimonials, TestimonialsCarousel } from "../components/Testimonials"
import Brands from "../components/Brands"
import ElderlySleep from "../assets/images/elderly-sleep.jpeg"
import WeightImage from "../assets/images/sleep-apnea-weight.jpeg"
import Trail from "../assets/images/wavy-lines-bg.svg"
import TestimonialsData from "../static/testimonials.json"
import HomeCopy from "../static/homepage.json"
import { objectToElem } from "../helpers/stringToElement"
import { HomePageCopyType } from "../@types/copy"

const Home = () => {
    const copyText: HomePageCopyType[][] = HomeCopy

    return (
        <StyledHome>
            <Hero />
            <StyledTrail>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={8}>
                            <div className="text-right">
                                {copyText[0].map(
                                    (item: HomePageCopyType, index) => {
                                        return objectToElem({ ...item, index })
                                    }
                                )}
                            </div>
                        </Col>
                        <Col
                            className="image-col hidden-sm"
                            sm={12}
                            md={6}
                            lg={4}
                        >
                            <img
                                src={WeightImage}
                                alt=""
                                className="image-left"
                            />
                        </Col>
                    </Row>
                </Container>
                <StyledTestimonials>
                    <Container>
                        <Row>
                            <Testimonials
                                className="testimonials__desktop"
                                data={TestimonialsData}
                            />
                            <TestimonialsCarousel
                                className="testimonials__mobile"
                                data={TestimonialsData}
                            />
                        </Row>
                    </Container>
                </StyledTestimonials>
                <Container>
                    <Row>
                        <Col className="image-col" sm={12} md={6} lg={4}>
                            <img
                                src={ElderlySleep}
                                alt=""
                                className="image-left"
                            />
                        </Col>
                        <Col sm={12} md={6} lg={8}>
                            <div className="text-right">
                                {copyText[1].map(
                                    (item: HomePageCopyType, index) => {
                                        return objectToElem({ ...item, index })
                                    }
                                )}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </StyledTrail>
            <StyledBrands>
                <Container>
                    <Row>
                        <Brands />
                    </Row>
                </Container>
            </StyledBrands>
        </StyledHome>
    )
}

const StyledTestimonials = styled.div`
    display: flex;

    .testimonials__desktop {
        display: none;

        @media (min-width: 1300px) {
            display: flex;
        }
    }

    .testimonials__mobile {
        display: flex;

        @media (min-width: 1300px) {
            display: none;
        }
    }
`

const StyledBrands = styled.div`
    display: flex;
    padding: 42px 0;
    background-color: ${({ theme }) => theme.colors.lightblue};

    img {
        max-height: 100px;
    }
`

const StyledTrail = styled.div`
    display: flex;
    flex-flow: column;
    padding: ${({ theme }) => theme.padding.page.mobile} 0;
    background-image: url(${Trail});
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 1400px 100%;
    gap: ${({ theme }) => theme.padding.gap};

    @media (min-width: 768px) {
        padding: ${({ theme }) => theme.padding.page.desktop} 0;
    }

    .row {
        gap: 48px 0;
    }

    .col {
        position: relative;

        &.image-col {
            &.hidden-sm {
                display: none;

                @media (min-width: 768px) {
                    display: flex;
                }
            }

            @media (min-width: 768px) {
                display: flex;
            }
        }

        img {
            position: sticky;
            top: 18px;
            width: 100%;
            border-radius: 30px;

            @media (max-width: 768px) {
                height: 300px;
                object-fit: cover;
                object-position: 100% 70%;
            }
        }

        h2 {
            font-size: 42px;
        }

        @media (min-width: 768px) {
            &:first-of-type {
                padding-right: 20px;
            }
            &:last-of-type {
                padding-left: 20px;
            }
        }
    }

    .text-right {
        margin: 0 auto auto;
        display: flex;
        flex-flow: column nowrap;
        gap: 24px;
    }
`

const StyledHome = styled.div`
    display: flex;
    flex-flow: column nowrap;
`

export default Home
