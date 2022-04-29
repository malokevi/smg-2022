import styled from "styled-components"
import { Col, Container, Row } from "../components/Layout/Grid"

const KnowledgeCenter = () => {
    return (
        <StyledKnowledgeCenter>
            <Container>
                <Row>
                    <Col>
                        <h1>Knowledge Center</h1>
                    </Col>
                </Row>
            </Container>
        </StyledKnowledgeCenter>
    )
}

const StyledKnowledgeCenter = styled.div`
    padding: ${({ theme }) => theme.padding.page} 0;
    display: flex;
    flex-flow: column;
`

export default KnowledgeCenter
