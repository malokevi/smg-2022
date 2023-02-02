import { Container, Row, Col } from "../../../Grid"

import * as S from "./styles"

export const QuickLinks = () => {
    return (
        <S.QuickLinks>
            <Container>
                <Row>
                    <Col>
                        <div className="quick-links">
                            <p className="quick-links__text">
                                <span>Free shipping:</span> on orders $150+
                            </p>
                            <p className="quick-links__text">
                                <span>Call toll free:</span>{" "}
                                <a href="tel:1-555-482-0291">1-555-482-0291</a>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </S.QuickLinks>
    )
}
