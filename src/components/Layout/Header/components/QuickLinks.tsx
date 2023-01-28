import styled from "styled-components"

import { Container, Row, Col } from "../../Grid"

const QuickLinks = () => {
    return (
        <StyledQuickLinks>
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
        </StyledQuickLinks>
    )
}

const StyledQuickLinks = styled.div`
    display: flex;
    flex-flow: column;
    padding: 12px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

    .quick-links {
        display: flex;
        flex-flow: column;
        gap: 8px 32px;
        text-transform: uppercase;
        margin: auto;

        @media (min-width: 500px) {
            flex-flow: row nowrap;
        }
    }

    .quick-links__text {
        font-size: ${({ theme }) => theme.fontSize.xxs};

        @media (min-width: 768px) {
            font-size: ${({ theme }) => theme.fontSize.xs};
        }

        & > span {
            color: ${({ theme }) => theme.colors.red};
            font-weight: bold;
        }
    }
`

export default QuickLinks
