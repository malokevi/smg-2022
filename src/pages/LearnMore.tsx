import styled from "styled-components"
import { Col, Container, Row } from "../components/Layout/Grid"

const LearnMore = () => {
    return (
        <StyledLearnMore>
            <Container>
                <Row>
                    <Col>
                        <h1>Knowledge Center</h1>
                    </Col>
                </Row>
            </Container>
        </StyledLearnMore>
    )
}

const StyledLearnMore = styled.div`
    padding: ${({ theme }) => theme.padding.page} 0;
    display: flex;
    flex-flow: column;
`

export default LearnMore
