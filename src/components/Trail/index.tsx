import { Col, Container, Row } from "../Layout/Grid"
import {
    Testimonials,
    TestimonialsCarousel
} from "../../components/Testimonials"
import ElderlySleep from "../../assets/images/elderly-sleep.jpeg"
import WeightImage from "../../assets/images/sleep-apnea-weight.jpeg"
import TestimonialsData from "../../static/testimonials.json"
import { objectToElem } from "../../helpers/stringToElement"
import { HomePageCopyType } from "../../@types/copy"
import HomeCopy from "../../static/homepage.json"

import * as S from "./styles"

export const Trail = () => {
    const copyText: HomePageCopyType[][] = HomeCopy

    return (
        <S.Trail>
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
                    <Col className="image-col hidden-sm" sm={12} md={6} lg={4}>
                        <img src={WeightImage} alt="" className="image-left" />
                    </Col>
                </Row>
            </Container>
            <S.Testimonials>
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
            </S.Testimonials>
            <Container>
                <Row>
                    <Col className="image-col" sm={12} md={6} lg={4}>
                        <img src={ElderlySleep} alt="" className="image-left" />
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
        </S.Trail>
    )
}
